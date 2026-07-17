import { IUser } from "../models/IUser";
import { api } from "./axios";

export async function getUser(userId: number): Promise<IUser> {
  return (await api.get<IUser>("/users/id", { params: { id: userId } })).data;
}
