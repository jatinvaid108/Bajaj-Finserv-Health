require("dotenv").config();
const express = require("express");
const cors = require("cors");

const bfhlRoute = require("./routes/bfhl");
const healthRoute = require("./routes/health");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/bfhl", bfhlRoute);
app.use("/health", healthRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
