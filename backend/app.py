from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
import requests

load_dotenv()

app = Flask(__name__)

# Allow your frontend to communicate with this backend
CORS(app)


RESEND_API_KEY = os.getenv("RESEND_API_KEY")
MAIL_RECEIVER = os.getenv("MAIL_RECEIVER")


@app.route("/api/contact", methods=["POST"])
def contact():
    try:
        data = request.get_json()

        name = data.get("name", "").strip()
        email = data.get("email", "").strip()
        message = data.get("message", "").strip()

        # Validate fields
        if not name or not email or not message:
            return jsonify({
                "success": False,
                "message": "All fields are required."
            }), 400

        if not RESEND_API_KEY:
            return jsonify({
                "success": False,
                "message": "Email service is not configured."
            }), 500

        if not MAIL_RECEIVER:
            return jsonify({
                "success": False,
                "message": "Receiver email is not configured."
            }), 500

        # Email content
        email_data = {
            "from": "Portfolio Contact <onboarding@resend.dev>",
            "to": [MAIL_RECEIVER],
            "subject": f"Portfolio Contact from {name}",
            "reply_to": email,
            "text": (
                f"Name: {name}\n"
                f"Email: {email}\n\n"
                f"Message:\n{message}"
            )
        }

        # Send email through Resend
        response = requests.post(
            "https://api.resend.com/emails",
            headers={
                "Authorization": f"Bearer {RESEND_API_KEY}",
                "Content-Type": "application/json"
            },
            json=email_data
        )

        if response.status_code not in [200, 201]:
            print("Resend error:", response.text)

            return jsonify({
                "success": False,
                "message": "Failed to send email."
            }), 500

        return jsonify({
            "success": True,
            "message": "Message sent successfully."
        }), 200

    except Exception as e:
        print("Server error:", str(e))

        return jsonify({
            "success": False,
            "message": "Something went wrong."
        }), 500


@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "message": "Portfolio backend is running."
    })


if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )