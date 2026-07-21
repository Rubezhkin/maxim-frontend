import { IUserList } from "../models/IUserList";

interface Props {
  user: IUserList;
}

function UserCard({ user }: Props) {
  return (
    <div>
      {user.login} {user.subscriberCount} подписчиков
    </div>
  );
}
export default UserCard;
