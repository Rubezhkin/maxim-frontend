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

export async function likePost(postId: number): Promise<void> {
  await api.post<void>("/like-post/like", null, { params: { postId } });
}

export async function unlikePost(postId: number): Promise<void> {
  await api.post<void>("/like-post/unlike", null, { params: { postId } });
}

export async function likeComment(commentId: number): Promise<void> {
  await api.post<void>("/like-comment/like", null, { params: { commentId } });
}

export async function unlikeComment(commentId: number): Promise<void> {
  await api.post<void>("/like-comment/unlike", null, { params: { commentId } });
}
