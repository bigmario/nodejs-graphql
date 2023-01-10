const UserService = require('../services/user.service');


const userService = new UserService();

const allUsers = async () => {
  const users = await userService.find()
  return users
}

const user = async (_, args) => {
  const user = await userService.findOne(args.id)
  return user
}

module.exports = {
  allUsers,
  user
}

