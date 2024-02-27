// dependencies
const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

// server
const app = express();

// coded functionality
const UnknownRoute = require("./middleware/UnknowRoute");
const ErrorMiddlwareHandler = require("./middleware/ErrorRoute");
const handleUnhandledRejection = require("./middleware/handleUnhandledRejection");

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

app.all("*", UnknownRoute);
app.use(ErrorMiddlwareHandler);

const server = app.listen(process.env.PORT);

process.on("unhandledRejection", (err) =>
  handleUnhandledRejection(err, server)
);
