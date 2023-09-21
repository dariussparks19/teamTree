const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/teamproj", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("CONNECTED");
    })
    .catch(() =>{
        console.log(`error`);
    })