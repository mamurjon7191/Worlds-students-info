const express = require("express");

const countryRouter = require("../roters/countryRoter");
const districtRouter = require("../roters/districtRoter");
const groupRouter = require("../roters/groupRouter");
const schoolRouter = require("../roters/schoolRouter");
const studentRouter = require("../roters/studentRouter");

const app = express();

app.use("/api/v1/country", countryRouter);
app.use("/api/v1/district", districtRouter);
app.use("/api/v1/group", groupRouter);
app.use("/api/v1/school", schoolRouter);
app.use("/api/v1/student", studentRouter);

module.exports = app;
