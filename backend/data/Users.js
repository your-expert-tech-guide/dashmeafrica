const bcrypt = require("bcryptjs");
const users = [
  {
    name: "Admin", //Upload Items
    email: "admin@node.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },

  {
    name: "User", //Buy Items or Receive Donation
    email: "user@node.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

module.exports = users;