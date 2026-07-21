import { Link } from "react-router-dom";
import { IUserList } from "../models/IUserList";

interface Props {
  user: IUserList;
}

function UserCard({ user }: Props) {
  return (
    <div>
      <Link to={`/profile/${user.id}`}>{user.login} </Link>
      {user.subscriberCount} подписчиков
    </div>
  );
}
export default UserCard;
