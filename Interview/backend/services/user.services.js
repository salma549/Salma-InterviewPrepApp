const bcrypt = require("bcrypt");
const User = require("../models/Users.model.js");

const createUser = async (userData) => {
  try {
    console.log("Inside createUser Service");
    let { firstName, lastName, email, mobile, password } = userData;

    // Check if the user already exists
    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      throw new Error("User already exists with email: " + email);
    }

    // Hash the password before saving
    password = await bcrypt.hash(password, 8);

    const user = await User.create({
      firstName,
      lastName,
      email,
      mobile,
      password,
    });

    console.log("User created: ", user);
    return user;
  } catch (error) {
    console.error("Error creating user: ", error);
    throw new Error(error.message);
  }
};

const findUserById = async (userId) => {
  try {
    const user = await User.findById(userId);

    // Return null if user is not found
    if (!user) {
      return null;
    }

    return user;
  } catch (error) {
    console.error("Error finding user by ID: ", error.message);
    throw new Error(error.message);
  }
};

const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });

    // Return null if user is not found
    if (!user) {
      return null;
    }

    return user;
  } catch (error) {
    console.error("Error finding user by email: ", error.message);
    throw new Error(error.message);
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.error("Error getting all users: ", error.message);
    throw new Error(error.message);
  }
};

module.exports = {
  createUser,
  findUserById,
  getUserByEmail,
  getAllUsers,
};
