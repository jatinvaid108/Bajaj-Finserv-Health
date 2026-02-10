export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({
      is_success: false,
      official_email: process.env.OFFICIAL_EMAIL
    });
  }

  res.status(200).json({
    is_success: true,
    official_email: process.env.OFFICIAL_EMAIL
  });
}
