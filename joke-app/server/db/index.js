var mongoose = require("mongoose");

var mongo_uri = "momongodb+srv://taweewatmail:taweewat130122@jokecluster.dgwvv.mongodb.net/jokeDatabase?retryWrites=true&w=majority";
mongoose.connect(mongo_uri, { useNewUrlParser: true }).then(
    () => {
        console.log("[success] task 2 : connected to the database ");
    },
    error => {
        console.log("[failed] task 2 " + error);
        process.exit();
    }
);
const db = mongoose.connection
module.exports = db