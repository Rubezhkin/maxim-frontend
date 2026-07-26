import { IPost } from "../models/IPost";
import { IPostRequest } from "../models/IPostRequest";
import { api } from "./axios";
import { getUser } from "./userApi";
import { getIsLikedPost, getLikeCountPost } from "./likeApi";
import { getCommentsCount } from "./commentApi";

export const getFeed = async (): Promise<IPost[]> => {
  const response = await api.get<IPostRequest[]>("/posts");

  return Promise.all(response.data.map(mapPost));
};

export async function getPostsByAuthor(authorId: number): Promise<IPost[]> {
  const response = await api.get<IPostRequest[]>("posts/by-author", {
    params: { authorId: authorId },
  });

  return Promise.all(response.data.map(mapPost));
}

export async function getPost(postId: number): Promise<IPost> {
  const responce = await api.get<IPostRequest>("posts/by-id", {
    params: {
      id: postId,
    },
  });

  return mapPost(responce.data);
}

async function mapPost(post: IPostRequest): Promise<IPost> {
  const author = await getUser(post.authorId);
  const likes = await getLikeCountPost(post.id);
  const isLiked = await getIsLikedPost(post.id);
  const commentsCount = await getCommentsCount(post.id);

  return {
    ...post,
    author: author.login,
    likesCount: likes.count,
    isLiked: isLiked.isLiked,
    commentsCount: commentsCount.count,
  };
}

export const createPost = async (formData: FormData) => {
  return api.post("/posts", formData);
};

export const editPost = async (id: number, FormData: FormData) => {
  return api.put("/posts", FormData, { params: { id } });
};
