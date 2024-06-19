import mongoose from "mongoose";
import IncorrectRequest from "../error/IncorrectRequest.js";
import ValidationError from "../error/ValidationError.js";
import BaseError from "../error/BaseError.js";

function errorHandler(erro, req, res, next) {

    if(erro instanceof mongoose.Error.CastError) {
        new IncorrectRequest().sendReply(res);
    } else if (erro instanceof mongoose.Error.ValidationError) {
        new ValidationError(erro).sendReply(res);
    } else if (erro instanceof BaseError) {
        erro.sendReply(res);
    } else {
        new BaseError().sendReply(res);
    };
};

export default errorHandler;