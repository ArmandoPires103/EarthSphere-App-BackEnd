const express = require("express")

const countries = express.Router()

const { createCountry, getOneCountry, getAllCountries, deleteCountry, updateCountries } = require("../queries/worlds")

countries.get("/", async (_req, res) => {
    const allNews = await getAllCountries();
  
    if (allNews[0]) res.status(200).json(allNews);
    else res.status(500).json({ error: "server error" });
  });

countries.get("/:id", async (req, res) => {
    const { id } = req.params;
    const oneCountry = await getOneCountry(id);
    if (oneCountry) {
      res.json(oneCountry);
    } else {
      res.status(404).json({ error: "not found" });
    }
  });

countries.post("/", async (req, res) => {
    try {
      const country = await createCountry(req.body);
      res.json(country);
    } catch (error) {
      res.status(400).json({ error });
    }
  });

  countries.put("/:id", async (req, res) => {
    const { id } = req.params;
    console.log(req.body);
    if (id) {
      const updatedCountry = await updateCountries(id, req.body);
      res.status(200).json(updatedCountry);
    } else {
      res.status(400).json({ error });
    }
  });
  
  countries.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedCountry = await deleteCountry(id);
    if (deletedCountry.id) {
      res.status(200).json(deletedCountry);
    } else {
      res.status(404).json("Country not found");
    }
  });
  

  module.exports = countries