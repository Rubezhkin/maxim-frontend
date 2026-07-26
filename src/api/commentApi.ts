import { IComment } from "../models/IComment";
import { ICommentRequest } from "../models/ICommentRequest";
import { api } from "./axios";
import { getIsLikedComment, getLikeCountComment } from "./likeApi";
import { getUser } from "./userApi";

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

export async function getComments(postId: number): Promise<IComment[]> {
  const responce = await api.get<ICommentRequest[]>("/comment", {
    params: { id: postId },
  });

  return Promise.all(responce.data.map(mapComment));
}
export async function createComment(
  id: number,
  comment: string,
): Promise<void> {
  await api.post<void>("/comment", { comment }, { params: { id } });
}

async function mapComment(comment: ICommentRequest): Promise<IComment> {
  const author = await getUser(comment.authorId);
  const likesCount = await getLikeCountComment(comment.id);
  const isLiked = await getIsLikedComment(comment.id);
  return {
    ...comment,
    author: author.login,
    isLiked: isLiked.isLiked,
    likesCount: likesCount.count,
  };
}
