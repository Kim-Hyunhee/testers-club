import "reflect-metadata";
import { User } from "../entity";
import { getRepository } from "typeorm";

const UserService = {
  createUser: async ({
    email,
    phoneNumber,
    birthday,
    gender,
  }: {
    email: string;
    phoneNumber: string;
    birthday: string;
    gender: string;
  }) => {
    const user = new User();
    user.email = email;
    user.phoneNumber = phoneNumber;
    user.birthday = birthday;
    user.gender = gender;

    await User.save(user);
    return true;
  },

  getUsers: async () => {
    const users = await getRepository(User)
      .createQueryBuilder("user")
      .getMany();

    return users;
  },
};
export default UserService;
