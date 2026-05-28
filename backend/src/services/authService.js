import User from "../models/User.js";

import generateToken
  from "../utils/generateToken.js";



export const registerService =
  async ({
    name,
    email,
    password,
  }) => {

    const userExists =
      await User.findOne({ email });

    if (userExists) {
      throw new Error(
        "User already exists"
      );
    }

    const user =
      await User.create({
        name,
        email,
        password,
      });

    return {
      _id: user._id,
      name: user.name,
      email: user.email,
      token:
        generateToken(user._id),
    };
  };



export const loginService =
  async ({
    email,
    password,
  }) => {

    const user =
      await User.findOne({ email });

    if (
      user &&
      (await user.matchPassword(password))
    ) {

      return {
        _id: user._id,
        name: user.name,
        email: user.email,
        token:
          generateToken(user._id),
      };
    }

    throw new Error(
      "Invalid email or password"
    );
  };