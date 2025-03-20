const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "Chào mừng đến ứng dụng quản lý mượn sách."});
});

module.exports = app;