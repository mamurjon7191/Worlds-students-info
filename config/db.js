const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE, {}, () => {
  console.log("DB is connected");
});
