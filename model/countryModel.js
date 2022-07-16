const mongoose = require("mongoose");

const countryScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // embeding usul country bilan viloyat ulanishi
  region: [
    {
      name: {
        type: String,
        required: true,
      },
      districtId: [
        // child referencing usuli viloyat bilan tuman ulanishi
        {
          type: mongoose.Schema.ObjectId, // bu nima orqali ulanyotgaani
          ref: "districts", //shu idni qaysi collectionda turganini korsatishi
        },
      ],
    },
  ],
});

const Country = mongoose.model("countries", countryScheme);

module.exports = Country;
