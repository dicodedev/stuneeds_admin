import jwt from "jsonwebtoken";

const loggedInUser = (req, res, next) => {
  try {
    const headers = req.headers;
    const authHeader = headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token)
      return res.status(401).json({ message: "An access token is need" });

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(403).send({ message: "Invalid access token" });

      req.user = user;

      next();
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Server Error" });
  }
};

export default loggedInUser;
