const express = require("express");
const cors = require("cors");
const ApiError = require("./app/app-error");

const app = express();
const booksRouter = require("./app/routes/book.route");


app.use(cors());
app.use(express.json());
app.use("/api/books", booksRouter);

app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
    return res.status(error.statusCode || 500).json({
        message: error.message || "Internal Server Error",
    });
});

app.get("/", (req, res) => {
    res.json({message: "Chào mừng đến ứng dụng quản lý mượn sách."});
});

module.exports = app;