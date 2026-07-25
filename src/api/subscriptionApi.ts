import { IUser } from "../models/IUser";
import { IUserList } from "../models/IUserList";
import { api } from "./axios";
import { mapUserList } from "./userApi";

interface ISubscriptionCount {
  count: number;
}

interface ISubscriberCount {
  count: number;
}

interface IIsSubscribed {
  isSubscribed: boolean;
}

export async function getSubscriptionCount(
  userId: number,
): Promise<ISubscriptionCount> {
  return (
    await api.get<ISubscriptionCount>("/subscription/subscription-count", {
      params: { userId },
    })
  ).data;
}

export async function getSubscriberCount(
  userId: number,
): Promise<ISubscriberCount> {
  return (
    await api.get<ISubscriberCount>("/subscription/subscriber-count", {
      params: { authorId: userId },
    })
  ).data;
}

export async function getSubscribers(authorId: number): Promise<IUserList[]> {
  const list = await api.get<IUser[]>("/subscription/subscribers", {
    params: { authorId },
  });

  return Promise.all(list.data.map(mapUserList));
}

export async function getSubscriptions(
  subscriberId: number,
): Promise<IUserList[]> {
  const list = await api.get<IUser[]>("/subscription/subscriptions", {
    params: { subscriberId },
  });

  return Promise.all(list.data.map(mapUserList));
}

export async function getIsSubscribed(
  authorId: number,
): Promise<IIsSubscribed> {
  return (
    await api.get<IIsSubscribed>("/subscription/isSubscribed", {
      params: { authorId },
    })
  ).data;
}

export async function subscribe(authorId: number): Promise<void> {
  await api.post<void>("/subscription/subscribe", null, {
    params: { authorId },
  });
}

export async function unsubscribe(authorId: number): Promise<void> {
  await api.post<void>("/subscription/unsubscribe", null, {
    params: { authorId },
  });
}
