import { Response, Request } from "express";
import UserService from "../service/user";
import "reflect-metadata";

export const postUsers = async (req: Request, res: Response) => {
  const { email, phoneNumber, birthday, gender } = req.body;
  await UserService.createUser({ email, phoneNumber, birthday, gender });
  res.send(true);
};

export const getUserNum = async (req: Request, res: Response) => {
  const testers = (await UserService.getUsers()).length;
  res.send(testers.toString());
};
