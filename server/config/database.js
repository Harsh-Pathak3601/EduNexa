const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL, {}).then(() => {
        console.log("Connected to MongoDB");
        }).catch((err) => {
        console.error("Error connecting to MongoDB", err);
        console.error(err);
        process.exit(1);
        });
    };