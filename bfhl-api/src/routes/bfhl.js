const express = require("express");
const router = express.Router();
const { fibonacci, isPrime, lcmArray, hcfArray } = require("../utils/math");
const askAI = require("../utils/ai");

router.post("/", async (req, res) => {
  try {
    const keys = Object.keys(req.body);

    if (keys.length !== 1) {
      return res.status(400).json({
        is_success: false,
        official_email: process.env.OFFICIAL_EMAIL,
        data: null
      });
    }

    const key = keys[0];
    const value = req.body[key];

    let result;

    switch (key) {
      case "fibonacci":
        if (!Number.isInteger(value))
          throw new Error("Invalid fibonacci input");
        result = fibonacci(value);
        break;

      case "prime":
        if (!Array.isArray(value))
          throw new Error("Invalid prime input");
        result = value.filter(isPrime);
        break;

      case "lcm":
        if (!Array.isArray(value))
          throw new Error("Invalid lcm input");
        result = lcmArray(value);
        break;

      case "hcf":
        if (!Array.isArray(value))
          throw new Error("Invalid hcf input");
        result = hcfArray(value);
        break;

      case "AI":
        if (typeof value !== "string")
          throw new Error("Invalid AI input");
        result = await askAI(value);
        break;

      default:
        return res.status(400).json({
          is_success: false,
          official_email: process.env.OFFICIAL_EMAIL,
          data: null
        });
    }

    return res.status(200).json({
      is_success: true,
      official_email: process.env.OFFICIAL_EMAIL,
      data: result
    });
  } catch (err) {
    return res.status(500).json({
      is_success: false,
      official_email: process.env.OFFICIAL_EMAIL,
      data: null
    });
  }
});

module.exports = router;
