import { IUserList } from "../models/IUserList";
import UserCard from "./UserCard";

interface Props {
  users: IUserList[];
}

function UserList({ users }: Props) {
  return (
    <>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </>
  );
}
export default UserList;
