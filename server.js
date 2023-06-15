const port = 6000 || process.env.PORT;
const express = require("express");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
require("dotenv").config();

const app = express();

const indexRouter = require("./routers/indexRouter");

app.get("/healthcheck", (req, res) => {
  res.send(true);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(jsonParser);
app.use(indexRouter);

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
