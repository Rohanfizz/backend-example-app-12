let database = [];

exports.createProduct = (req, res, next) => {
    const product = {
        id: database.length,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        rating: req.body.rating,
    };
    database.push(product);

    res.status(201).json({
        status: "success",
        data: product,
    });
};

exports.getAll = (req, res, next) => {
    res.status(200).json({
        status: "success",
        data: database,
    });
};

exports.getById = (req, res, next) => {
    const requestedId = req.params.id;
    if (requestedId >= database.length) {
        res.status(404).json({
            status: "fail",
            message: `Product with id ${requestedId} not found`,
        });
    }
    res.status(200).json({
        status: "success",
        data: database[requestedId],
    });
};
