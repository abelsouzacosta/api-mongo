require("dotenv").config();
const jwt = require("jsonwebtoken");

/**
 * This middleware verifies if the user are
 * authorized in the application through the token generated in the
 * api
 * @param {Request} req - request function
 * @param {Response} res - response function
 * @param {NextFunction} next - next function
 * @returns
 */
module.exports = (req, res, next) => {
  // captures the authetication header
  const authenticationHeader = req.headers.authorization;

  // verifies if there is an authetication header
  if (!authenticationHeader)
    return res.status(400).json({
      error: "Token not provided",
    });

  // splits the authetication header in two parts
  const parts = authenticationHeader.split(" ");

  // authentication header must have two parts
  if (parts.length !== 2)
    return res.status(401).json({
      error: "Token mismatch",
    });

  // token desestruturation
  const [bearer, token] = parts;

  // regex pattern matching
  if (!/^Bearer$/i.test(bearer))
    return res.status(401).send({ error: "Token malformatted" });

  // token is compatible
  jwt.verify(token, process.env.HASH, (err, decoded) => {
    if (err)
      return res.status(402).json({
        error: "Unauthorized",
      });

    // inserts the user id into the request
    req.userId = decoded.id;

    return next();
  });
};
