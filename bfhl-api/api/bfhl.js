import { fibonacci, isPrime, lcmArray, hcfArray } from "../src/utils/math.js";
import askAI from "../src/utils/ai.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      is_success: false,
      official_email: process.env.OFFICIAL_EMAIL,
      data: null
    });
  }

  try {
    const keys = Object.keys(req.body);
    if (keys.length !== 1) throw new Error();

    const key = keys[0];
    const value = req.body[key];
    let result;

    switch (key) {
      case "fibonacci":
        result = fibonacci(value);
        break;
      case "prime":
        result = value.filter(isPrime);
        break;
      case "lcm":
        result = lcmArray(value);
        break;
      case "hcf":
        result = hcfArray(value);
        break;
      case "AI":
        result = await askAI(value);
        break;
      default:
        throw new Error();
    }

    res.status(200).json({
      is_success: true,
      official_email: process.env.OFFICIAL_EMAIL,
      data: result
    });
  } catch {
    res.status(500).json({
      is_success: false,
      official_email: process.env.OFFICIAL_EMAIL,
      data: null
    });
  }
}
