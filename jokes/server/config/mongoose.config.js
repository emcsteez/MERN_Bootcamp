const mongoose = require("mongoose");

mongoose
.connect("mongodb://localhost/jokes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to the database"))
.catch((err) =>
    console.log("Error while connecting to the database ", err)
);