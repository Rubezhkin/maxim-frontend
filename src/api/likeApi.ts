import { api } from "./axios";

interface ILikeCount {
  count: number;
}

interface IIsLiked {
  isLiked: boolean;
}

export async function getLikeCount(postId: number): Promise<ILikeCount> {
  return (
    await api.get<ILikeCount>("/like-post/likes-count", { params: { postId } })
  ).data;
}

export async function getIsLiked(postId: number): Promise<IIsLiked> {
  return (await api.get<IIsLiked>("/like-post/isLiked", { params: { postId } }))
    .data;
}
