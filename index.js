// index.js
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(cors());

app.get("/download", async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: "No URL provided" });

  try {
    const apiUrl = `https://api.vevioz.com/api/widget?url=${encodeURIComponent(url)}`;
    const response = await axios.get(apiUrl);
    res.send(response.data); // HTML snippet
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch download link" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
