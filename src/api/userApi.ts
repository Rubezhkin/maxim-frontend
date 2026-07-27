import { IUser } from "../models/IUser";
import { IUserList } from "../models/IUserList";
import { IUserProfile } from "../models/IUserProfile";
import { api } from "./axios";
import { getPostsByAuthor } from "./postApi";
import {
  getIsSubscribed,
  getSubscriberCount,
  getSubscriptionCount,
} from "./subscriptionApi";

export async function getUser(userId: number): Promise<IUser> {
  return (await api.get<IUser>("/users/id", { params: { id: userId } })).data;
}

export async function getUsers(): Promise<IUserList[]> {
  const list = await api.get<IUser[]>("/users");

  return Promise.all(list.data.map(mapUserList));
}

export async function getUserProfile(userId: number): Promise<IUserProfile> {
  const user = await api.get<IUser>("/users/id", { params: { id: userId } });

  return mapUserProfile(user.data);
}

async function mapUserProfile(user: IUser): Promise<IUserProfile> {
  const posts = await getPostsByAuthor(user.id);
  const subscriberCount = await getSubscriberCount(user.id);
  const subscriptionCount = await getSubscriptionCount(user.id);
  const isSubscribed = await getIsSubscribed(user.id);
  return {
    ...user,
    posts: posts,
    subscriberCount: subscriberCount.count,
    subscriptionCount: subscriptionCount.count,
    isSubscribed: isSubscribed.isSubscribed,
  };
}

export async function mapUserList(user: IUser): Promise<IUserList> {
  const subscriberCount = await getSubscriberCount(user.id);
  const isSubscribed = await getIsSubscribed(user.id);
  return {
    ...user,
    subscriberCount: subscriberCount.count,
    isSubscribed: isSubscribed.isSubscribed,
  };
}
