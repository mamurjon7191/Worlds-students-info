const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

require("./config/db");

const app = require("./middleware/app");

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
