const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");
const morgan = require("morgan");
const port = process.env.PORT || 5000;
const volcanos = require("./routes/api/volcanos");
const members = require("./routes/api/members");

app = express();

app.use(morgan("combined"));

require("./mongooseConnect");
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/volcanos", volcanos);
app.use("/api/members", members);

app.listen(port, function (error) {
  if (error) {
    throw err;
  }
  console.log(`Volcanic Skydiving decending at port: ${port}`);
  console.log(`http://localhost:${port}`);
});
