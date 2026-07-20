import { api } from "./axios";

interface ICommentsCount {
  count: number;
}

export async function getCommentsCount(
  postId: number,
): Promise<ICommentsCount> {
  return (
    await api.get<ICommentsCount>("/comment/comments-count", {
      params: { id: postId },
    })
  ).data;
}
