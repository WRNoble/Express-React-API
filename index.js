const express = require('express');
const app = express();
const routes = require("./routes");

app.use("/roman-emperors", routes);

app.listen(3001, ()=> console.log("listening"));