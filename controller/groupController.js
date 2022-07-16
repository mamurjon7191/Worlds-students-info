const Group = require("../model/groupModel");

const {
  getAll,
  getOne,
  addOne,
  deleteOne,
  updateOne,
} = require("./handleController");

const getAllGroup = (req, res) => {
  getAll(req, res, Group);
};

const getOneGroup = () => {
  getOne(req, res, Group);
};

const addOneGroup = (req, res) => {
  addOne(req, res, Group);
};
const deleteOneGroup = (req, res) => {
  deleteOne(req, res, Group);
};
const updateOneGroup = (req, res) => {
  console.log(2);
  updateOne(req, res, Group);
};

module.exports = {
  getAllGroup,
  getOneGroup,
  addOneGroup,
  deleteOneGroup,
  updateOneGroup,
};
