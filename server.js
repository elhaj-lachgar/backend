// dependencies
const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

// server
const app = express();


// coded functionality
const UnknownRoute = require('./middleware/UnknowRoute');
const ErrorMiddlwareHandler = require('./middleware/ErrorRoute');


if(process.env.NODE_ENV == "development"){
    app.use(morgan('dev'));
}





app.all("*" ,UnknownRoute);
app.use(ErrorMiddlwareHandler);


app.listen(process.env.PORT);