const District = require("../model/distirictModel");

const {
  getAll,
  getOne,
  addOne,
  deleteOne,
  updateOne,
} = require("./handleController");

const getAllDistrict = (req, res) => {
  getAll(req, res, District);
};

const getOneDistrict = () => {
  getOne(req, res, District);
};

const addOneDistrict = (req, res) => {
  addOne(req, res, District);
};
const deleteOneDistrict = (req, res) => {
  deleteOne(req, res, District);
};
const updateOneDistrict = (req, res) => {
  updateOne(req, res, District);
};

module.exports = {
  getAllDistrict,
  getOneDistrict,
  addOneDistrict,
  deleteOneDistrict,
  updateOneDistrict,
};
