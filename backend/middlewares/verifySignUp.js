import db from "../models/index.js";

const ROLES = db.ROLES;
const User = db.user;

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  try {
    // check for username in db
    let user = await User.findOne({ where: { username: req.body.username } });
    if (user) {
      return res
        .status(404)
        .json({ message: "Failed: Username already exists!" });
    }

    // check for email in db
    user = await User.findOne({ where: { email: req.body.email } });
    if (user) {
      return res.status(404).json({ message: "Failed: Email already exists!" });
    }

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (const role of req.body.roles) {
      if (!ROLES.includes(role)) {
        return res
          .status(400)
          .json({ message: `Failed: Role does not exist: ${role}` });
      }
    }
  }

  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted,
};

export default verifySignUp;
