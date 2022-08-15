require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 4000;

const app = express();
const message = process.env.MESSAGE
app.get("/", (req, res) => {
  res.send(message);
});

app.listen(PORT, () => {
  console.log(`haha yes, the server is running on port ${PORT}`);
});
