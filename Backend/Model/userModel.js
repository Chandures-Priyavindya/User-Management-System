const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,//type of data
        require:true,//validation
    },
    gmail:{
        type:String,//type of data
        require:true,//validation
    },
    age:{
        type:Number,//type of data
        require:true,//validation
    },
    address:{
        type:String,//type of data
        require:true,//validation
    }
});

module.export = mongoose.model(
    "userModel", //filename
    userSchema //function name
)