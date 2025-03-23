const User = require("../Model/UserModel"); // Ensure the correct model path

// Get all users
const getAllusers = async (req, res, next) => {
  let users;
  try {
    users = await User.find(); 
  } catch (err) {
    console.log(err);
    
  }

  if (!users) {
    return res.status(404).json({ message: "Users not found" });
  }

  return res.status(200).json({ users });
};

// Add a user
const addUsers = async (req, res, next) => {
    const { name, gmail, age, address } = req.body;

    let users;

    try {
        users = new User({ name, gmail, age, address }); 
        await users.save();
    } catch (err) {
        console.log(err);
        
    }

    if (!users) {
        return res.status(400).json({ message: "Unable to add users" });
    }

    return res.status(201).json({ users });
};

//get by id
const getById = async (req, res, next) => {
    const id = req.params.id;
    let user;

    try {
        user = await User.findById(id);
    } catch (err) {
        console.log(err);
    }
    //not availble users
    if (!user) {
        return res.status(400).json({ message: "user not found" });
    }

    return res.status(200).json({ user });

}

//update user details
const updateUser = async (req, res, next)=>{
    const id = req.params.id;
    const { name, gmail, age, address } = req.body;

    let users;
    try {
        users = await User.findByIdAndUpdate(id,
            { name:name, gmail:gmail,age: age,address: address});
        users = await users.save();
    } catch (err) {
        console.log(err);
    }
    if (!users) {
        return res.status(400).json({ message: "unable to update user details" });
    }

    return res.status(200).json({ users });
};
//Delete user details
const deleteUser = async (req, res, next) => {
    const id = req.params.id;

    let user;
    
    try {
        user= await User.findByIdAndDelete(id)
    } catch (err) {
        console.log(err);
    }
    if (!user) {
        return res.status(400).json({ message: "unable to delete user details"});
    }

    return res.status(200).json({ user });

}

exports.getAllusers = getAllusers;
exports.addUsers = addUsers;
exports.getById = getById;
exports.updateUser = updateUser;
exports.deleteUser= deleteUser;