const mongoose = require("../../../shared/http/db");
const bcrypt = require("bcryptjs");
const SALT_WORK_FACTOR = 10; /// salt to bcrypt

/**
 * Define os campos que teremos dentro de um documento
 * no mongo
 */
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    require: true,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre("save", async function save(next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    const hash = await bcrypt.hash(this.password, salt);

    this.password = hash;

    return next();
  } catch (error) {
    return next(error);
  }
});

module.exports = UserSchema;
