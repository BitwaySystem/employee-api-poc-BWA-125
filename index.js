const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./src/utils/database");
const UserModel = require("./src/models/UserModel");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); // corrige o proble de CORS
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});

app.use("/users", require("./src/routes/UserRoute"));

sequelize
    .sync()
    .then((result) => {
        console.log("Database connected");
        app.listen(3000);
    })
    .catch((err) => console.log(err));
