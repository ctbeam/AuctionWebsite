'use strict';

const express = require('express'),
    path = require("path"),
    app = express(),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    router = require('./router'),
    mongoose = require('mongoose'),
    config = require('./config/main'),
    exphbs = require('express-handlebars');


// const port = parseInt(process.env.PORT, 10) || config.port;
const port = process.env.PORT || config.port;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(logger('dev'));

app.use(express.static('public'));
app.use("/libs", express.static(path.join(__dirname, "/node_modules")));
app.use("/public", express.static(path.join(__dirname, "/public")));

mongoose.connect(config.database);
mongoose.Promise = global.Promise;

//app.engine(".hbs", exphbs({ extname: ".hbs" }));
//app.set("view engine", ".hbs");
//app.set("views", "views/");
//app.get("/", (req, res) => res.render("index", { layout: false }));

router(app);

app.listen(port, () => console.log(`Magic happening at http://localhost:${port}`));