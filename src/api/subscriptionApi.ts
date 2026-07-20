import { api } from "./axios";

interface ISubscriptionCount {
  count: number;
}

interface ISubscriberCount {
  count: number;
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
