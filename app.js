const express = require("express");
const productRouter = require("./productRouter");
const app = express();
app.use(express.json());

app.use("/product", productRouter);

app.get("*", (req, res) => {
    res.status(200).json({
        data: "i was not able to find your route",
    });
});

app.listen(8080, () => {
    console.log("Server is running on port 8080 ✅");
});
