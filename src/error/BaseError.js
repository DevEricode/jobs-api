class BaseError extends Error {
    constructor(mensagem = "Internal Server Error.", status = 500) {
        super();
        this.message = mensagem;
        this.status = status;
    };

    sendReply(res) {
        res.status(this.status).send({
            mensagem: this.message,
            status: this.status
        });
    };

};

export default BaseError;