import IncorrectRequest from "../error/IncorrectRequest.js";

async function filtersPagination (req, res, next) {
    let { limit = 5, page = 1, ordering = "_id:-1"} = req.query;

    let [sortField, order] = ordering.split(":");

    limit = parseInt(limit);
    page = parseInt(page);
    order = parseInt(order);

    const result = req.result;

    if(page > 0 && limit > 0) {
        const jobsResult = await result.find()
            .sort({ [sortField]: order })
            .skip((page - 1) * limit)
            .limit(limit)
            .exec();

        res.status(200).json(jobsResult);				
    } else {
        next(new IncorrectRequest());
    };
};

export default filtersPagination;