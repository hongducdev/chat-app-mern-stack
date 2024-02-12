import bcryptjs from "bcryptjs";
import User from "../models/user.models.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = await User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    await generateTokenAndSetCookie(newUser._id, res);
    await newUser.save();

    res.status(200).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
      profilePic: newUser.profilePic,
    });
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
export const login = (req, res) => {
  console.log("Login User");
  res.send("Login User");
};

export const logout = (req, res) => {
  console.log("Logout User");
  res.send("Logout User");
};
