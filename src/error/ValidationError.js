import IncorrectRequest from "./IncorrectRequest.js";

class ValidationError extends IncorrectRequest {
    constructor(erro) {
        const messageErro = Object.values(erro.errors).map(erro => erro.message).join("; ");
        super(`The following errors were found: ${messageErro}`);
    };
};

export default ValidationError;