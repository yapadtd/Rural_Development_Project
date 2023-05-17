const express = require("express");//assigned package to constant variable
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

//define variable to assign server port no
const PORT = process.env.PORT || 8060; //is 8060 not available, assign available port no to that variable 

app.use(cors());
app.use(bodyParser.json()); //use jason format (key-value pairs)

//conect database
const URL = process.env.MONGODB_URL;

// mongoose.connect(URL, {
//     useCreateIndex: true, 
//     useFindAndModify: false, 
//     useNewUrlParser: true, 
//     useUnifiedTopology: true 
// });

mongoose.connect(URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

const connection = mongoose.connection;
connection.once("open", ()=>{
    console.log("Mongodb Connection success!");
});

const packageRouter = require("./routes/requests.js") //get access model file


app.use("/request",packageRouter); //load js file


app.listen(PORT, () => console.log(`server started on port ${PORT}`));
