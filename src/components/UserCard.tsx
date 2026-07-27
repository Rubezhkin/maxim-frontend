import { Link } from "react-router-dom";
import { IUserList } from "../models/IUserList";
import SubscribeButton from "./SubscribeButton";
import { useAppSelector } from "../hooks/redux";

interface Props {
  user: IUserList;
  onChange: () => Promise<void>;
}

function UserCard({ user, onChange }: Props) {
  const authUser = useAppSelector((state) => state.auth.user);
  return (
    <div>
      <Link to={`/profile/${user.id}`}>{user.login} </Link>
      {user.subscriberCount} подписчиков
      {authUser?.id === user.id ? (
        <></>
      ) : (
        <SubscribeButton
          id={user.id}
          isSubscribed={user.isSubscribed}
          onChange={onChange}
        />
      )}
    </div>
  );
}
export default UserCard;
