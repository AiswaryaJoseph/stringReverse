const express = require("express");
const mongoose = require("mongoose");

const app = express();

const port = 3000;

const db =
  "mongodb+srv://celinaish2021:stringReverse@cluster0.c8kejmw.mongodb.net/StringReverse?retryWrites=true&w=majority";
mongoose
  .connect(db)
  .then(() => {
    console.log("Database Connection established");
  })
  .catch((e) => console.log(e));



const StringSchema = new mongoose.Schema({
    str: {
      type: String,
      require: true,
    }
})

const StringModel = mongoose.model("String", StringSchema);

app.use(express.json());

app.post("/string", (req,res)=>{
 str=req.body.str
        let a = [];
        for (let i = 0; i < str.length; i++) {
          if (str[i] === str[i].toUpperCase()) {
           a.push(str[i].toLowerCase())
          } else a.push(str[i].toUpperCase())
        }
         

        res.status(200).json({
            output:a.join("")
        })
 
});

app.listen(port, () => {
  console.log("Server is up in port", port);
});

// stringReverse
