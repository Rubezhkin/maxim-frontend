import { api } from "./axios";

interface ILikeCount {
  count: number;
}

interface IIsLiked {
  isLiked: boolean;
}

export async function getLikeCountPost(postId: number): Promise<ILikeCount> {
  return (
    await api.get<ILikeCount>("/like-post/likes-count", { params: { postId } })
  ).data;
}

export async function getIsLikedPost(postId: number): Promise<IIsLiked> {
  return (await api.get<IIsLiked>("/like-post/isLiked", { params: { postId } }))
    .data;
}

export async function getLikeCountComment(
  commentId: number,
): Promise<ILikeCount> {
  return (
    await api.get<ILikeCount>("/like-comment/likes-count", {
      params: { commentId },
    })
  ).data;
}

export async function getIsLikedComment(commentId: number): Promise<IIsLiked> {
  return (
    await api.get<IIsLiked>("/like-comment/isLiked", { params: { commentId } })
  ).data;
}
