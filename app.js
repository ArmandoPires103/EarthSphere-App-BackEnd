const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get('/news', async (req, res) => {
    try {
      const country = req.query.country || 'us'; // Default to 'us' if country parameter is not provided
      const apiKey = '9a742a293e0c409ca0fb88b932aef633'; // Replace 'YOUR_API_KEY' with your actual NewsAPI API key
  
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }
  
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error('Error fetching news:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

// 404 PAGE
app.get("*", (req, res) => {
  res.json({ error: "Page not found" });
});




module.exports = app;