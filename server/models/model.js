const mongo = require("mongoose");
const Schema = mongo.Schema;
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const user = mongo.model("user", userSchema);
module.exports = user;
