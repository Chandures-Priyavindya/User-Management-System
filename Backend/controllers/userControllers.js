const user = require("../Model/userModel"); 

const getAllusers = async(req, res, next) => {

    let Users;
    //get all users
    try {
        Users = await User.find();
    } catch (err) {
        console.log(err);
    }
    // if user not found
    if(!Users){
        return res.status(404).json({message: "user not found"});
    }
    //display users
    return res.status(200).json({Users});
    
};

exports.getAllusers = getAllusers;
