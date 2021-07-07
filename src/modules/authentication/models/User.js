const mongoose = require("../../../shared/http/db");
const UserSchema = require("../schemas/UserSchema");

const User = mongoose.model("User", UserSchema);

module.exports = User;
