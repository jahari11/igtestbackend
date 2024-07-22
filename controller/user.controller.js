const bcrypt = require("bcrypt");

const User = require("../model/user");



exports.register = async (req, res) => {
  try {
    const { username, password, mobile,profileImage, profileName, role } = req.body;
    

   

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const user = await User.create({
      username,
      password: hashedPassword,
      mobile,
      profileImage,
      profileName,
      role
    });

    // Send response
    res.status(201).json({ user });
  } catch (err) {
    // Handle errors
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }

    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.edit = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, mobile } = req.body;

    // Check if the user with the provided id exists
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update the user's information
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { username, mobile },
      { new: true }
    );

    // Return the updated user
    res.status(200).json({ user: updatedUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.delete = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    await User.findByIdAndDelete(id);

    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }











}