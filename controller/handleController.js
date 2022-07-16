const getAll = async (req, res, Model) => {
  const data = await Model.find();
  res.status(200).json({
    status: "succes",
    results: data.length,
    data: data,
  });
};

const getOne = async (req, res, Model) => {
  const data = await Model.findById(req.params.id);
  res.status(200).json({
    status: "succes",
    data: data,
  });
};

const addOne = async (req, res, Model) => {
  const data = await Model.create(req.body);
  res.status(201).json({
    status: "succes",
    data: data,
  });
};

const deleteOne = async (req, res, Model) => {
  const data = await Model.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "succes",
    data: data,
  });
};

const updateOne = async (req, res, Model) => {
  const data = await Model.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({
    status: "succes",
    data: data,
  });
};

module.exports = {
  getAll,
  getOne,
  addOne,
  deleteOne,
  updateOne,
};
