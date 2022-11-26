const express = require("express");
const dotenv = require("dotenv");
const routers = require("./routers");

dotenv.config({ path: "./config.env" });

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

// https://docs.zibal.ir/IPG/API {مستندات}

app.use(routers);

app.listen(3000);
