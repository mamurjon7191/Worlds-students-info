const Student = require("../model/studentModel");

const {
  getAll,
  getOne,
  addOne,
  deleteOne,
  updateOne,
} = require("./handleController");

const getAllStudent = (req, res) => {
  getAll(req, res, Student);
};

const getOneStudent = () => {
  getOne(req, res, Student);
};

const addOneStudent = (req, res) => {
  addOne(req, res, Student);
};
const deleteOneStudent = (req, res) => {
  deleteOne(req, res, Student);
};
const updateOneStudent = (req, res) => {
  updateOne(req, res, Student);
};

module.exports = {
  getAllStudent,
  getOneStudent,
  addOneStudent,
  deleteOneStudent,
  updateOneStudent,
};
