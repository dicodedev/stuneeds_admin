import { getUser } from "../../prisma/user.js";
import jwt from "jsonwebtoken";
import { config } from "../config/index.js";

let refreshTokens = [];

export const getAllUser = async (req, res) => {
  try {
    const data = await getUser();
    res.status(200).json({
      user: req.user,
      message: "All Users",
      data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const createUser = async (req, res) => {
  try {
    const { first_name, last_name } = req.body;

    res.status(200).json({
      message: "New user created!",
    });
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = {
      email,
      password,
    };

    const access_token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: config.token.expireIn,
    });

    const refresh_token = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);

    res.status(200).json({
      message: "New user created!",
      data: {
        user,
        token: {
          access_token,
          refresh_token,
          expires_at: 365,
        },
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export const refreshToken = async (req, res) => {
  try {
    const { refresh_token } = req.body;

    if (!refresh_token)
      return res.status(401).send("A refresh token is required");
    if (!refreshTokens.includes(refresh_token))
      return res.status(403).send("A refresh token is required");

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(403).send("Error validating token");

      const access_token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "60m",
      });

      res.status(200).json({
        access_token,
      });
    });
  } catch (error) {
    console.error(error);
  }
};
