const db = require("../db/dbConfig.js");


const getAllCountries = async () => {
    try {
      const allCountries = await db.any("SELECT * FROM countries");
  
      return allCountries;
    } catch (error) {
      return error;
    }
  };

  const getOneCountry = async (id) => {
    try {
      const oneCountry = await db.one("SELECT * FROM countries WHERE id=$1", id);
      return oneCountry;
    } catch (error) {
      return error;
    }
  };
  
  const createCountry = async (country) => {
    try {
      const newCountry = await db.one(
        "INSERT INTO countries (country, time, landmarks, cities) VALUES($1, $2, $3, $4) RETURNING *",
        [country.country, country.time, country.landmarks, country.cities]
      );
      return newCountry;
    } catch (error) {
      return error;
    }
  };
  
  const deleteCountry = async (id) => {
    try {
      const deletedCountry = await db.one(
        "DELETE FROM countries WHERE id = $1 RETURNING *",
        id
      );
      return deletedBookmark;
    } catch (error) {
      return error;
    }
  };
  
  const updateCountries = async (id, countries) => {
    const { country, time, landmarks, cities, description } = countries;
    try {
      const updatedCountry = await db.one(
        "UPDATE countries SET country=$1, time=$2, landmarks=$3, ciies=$4, description=$5 WHERE id=$6 RETURNING *",
        [country, time, landmarks, cities, description, id]
      );
      return updatedCountry;
    } catch (error) {
      return error;
    }
  };

  module.exports ={
    getAllCountries,
    getOneCountry,
    deleteCountry,
    updateCountries,
    createCountry
    
  }