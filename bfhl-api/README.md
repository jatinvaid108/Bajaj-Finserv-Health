# BFHL REST API

REST APIs built for **Chitkara University Qualifier (Class of 2027)** using **Node.js and Express** with **Google Gemini AI integration**.

---

## 🚀 Live Endpoints

- **POST** `/bfhl`
- **GET** `/health`

---

## 🛠 Tech Stack

- Node.js
- Express.js
- Axios
- Google Gemini API
- dotenv

---

## 📌 API Usage

### GET `/health`
Health check endpoint.

```json
{
  "is_success": true,
  "official_email": "jatin0784.be23@chitkara.edu.in"
}


POST /bfhl

Accepts exactly one key in request body.

| Key         | Input         | Output                  |
| ----------- | ------------- | ----------------------- |
| `fibonacci` | Integer       | Fibonacci series        |
| `prime`     | Integer array | Prime numbers           |
| `lcm`       | Integer array | LCM value               |
| `hcf`       | Integer array | HCF value               |
| `AI`        | String        | Single-word AI response |

{
  "prime": [2,4,7,9,11]
}

{
  "is_success": true,
  "official_email": "jatin0784.be23@chitkara.edu.in",
  "data": [2,7,11]
}


⚠️ Error Handling

Proper HTTP status codes

Consistent response structure

Graceful handling of invalid inputs

No server crashes

🔐 Environment Variables

Create .env in project root:

OFFICIAL_EMAIL=jatin0784.be23@chitkara.edu.in
GEMINI_API_KEY=your_api_key
PORT=3000


▶️ Run Locally
npm install
node src/index.js

Server runs at:
http://localhost:3000

📦 Deployment

Deployed using Vercel with public access.

👤 Author

Jatin Vaid
B.Tech CSE, Chitkara University  
