const mongoose = require("mongoose"),
  url = "mongodb://127.0.0.1:27017",
  dbName = "volcano",
  connectionString = url + "/" + dbName;

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
