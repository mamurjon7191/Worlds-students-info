const School = require("../model/schoolModel");

const {
  getAll,
  getOne,
  addOne,
  deleteOne,
  updateOne,
} = require("./handleController");

const getAllSchool = (req, res) => {
  getAll(req, res, School);
};

const getOneSchool = () => {
  getOne(req, res, School);
};

const addOneSchool = (req, res) => {
  addOne(req, res, School);
};
const deleteOneSchool = (req, res) => {
  deleteOne(req, res, School);
};
const updateOneSchool = (req, res) => {
  updateOne(req, res, School);
};

module.exports = {
  getAllSchool,
  getOneSchool,
  addOneSchool,
  deleteOneSchool,
  updateOneSchool,
};
