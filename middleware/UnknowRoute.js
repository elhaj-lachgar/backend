const ErrorHandler = require("../utils/ErrorFeature");

const UnknownRoute = async function (req , res , next) {
    return next(new ErrorHandler("Unknown route" , 404));
}


module.exports = UnknownRoute;