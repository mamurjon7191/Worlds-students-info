const Country = require("../model/countryModel");

const {
  getAll,
  getOne,
  addOne,
  deleteOne,
  updateOne,
} = require("./handleController");

const getAllCountry = (req, res) => {
  getAll(req, res, Country);
};

const getOneCountry = () => {
  getOne(req, res, Country);
};

const addOneCountry = (req, res) => {
  addOne(req, res, Country);
};
const deleteOneCountry = (req, res) => {
  deleteOne(req, res, Country);
};
const updateOneCountry = (req, res) => {
  updateOne(req, res, Country);
};

module.exports = {
  getAllCountry,
  getOneCountry,
  addOneCountry,
  deleteOneCountry,
  updateOneCountry,
};
