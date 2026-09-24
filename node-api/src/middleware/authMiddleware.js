const authMiddleware = (req, res, next) => {
    const apiKey = req.headers["x-api-key"];

    if (apiKey !== process.env.API_KEY) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized"
        });
    }

    next();
};

module.exports = authMiddleware;