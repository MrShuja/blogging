const express = require("express");
const app = express();
const PORT = 8000;
const bodyParser = require("body-parser");
const connectDb = require("./config/connectDb");
const SignUp = require("./routes/index.route");
const cors = require('cors')

connectDb();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(cors("*"))
app.use("/", SignUp)
app.listen(PORT, ()=>{
    console.log(`Server is lisenting on port ${PORT}`)
})