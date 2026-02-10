# BFHL REST API – Chitkara University Qualifier

This project implements two public REST APIs as part of the **Chitkara University Qualifier (Class of 2027)**.

The APIs are built using **Node.js + Express** and include **AI integration using Google Gemini**.

---

## 🚀 Live APIs

- **POST** `/bfhl`
- **GET** `/health`

> Deployed URL will be shared along with this repository.

---

## 🛠 Tech Stack

- Node.js
- Express.js
- Axios
- Google Gemini API
- dotenv

---

## 📌 API Endpoints

### 1️⃣ GET `/health`

Health check endpoint.

#### Response
```json
{
  "is_success": true,
  "official_email": "jatin0784.be23@chitkara.edu.in"
}
