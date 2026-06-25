require("dotenv").config();

const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log("Connected");
})
.catch(err => {
    console.error(err);
});