import { IPost } from "../models/IPost";
import { IPostRequest } from "../models/IPostRequest";
import { api } from "./axios";
import { getUser } from "./userApi";
import { getIsLiked, getLikeCount } from "./likeApi";

export const getFeed = async (): Promise<IPost[]> => {
  const response = await api.get<IPostRequest[]>("/posts");

  return Promise.all(response.data.map(mapPost));
};

export async function mapPost(post: IPostRequest): Promise<IPost> {
  const author = await getUser(post.authorId);
  const likes = await getLikeCount(post.id);
  const isLiked = await getIsLiked(post.id);

  return {
    ...post,
    author: author.login,
    likesCount: likes.count,
    isLiked: isLiked.isLiked,
  };
}
