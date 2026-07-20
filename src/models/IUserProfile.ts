import { IPost } from "./IPost";

export interface IUserProfile {
  id: number;
  login: string;
  subscriberCount: number;
  subscriptionCount: number;
  posts: IPost[];
}
