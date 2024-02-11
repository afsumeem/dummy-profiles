import { Link } from "react-router-dom";
import { UserData } from "../../../types";

interface UserProps {
  user: UserData;
}
const User: React.FC<UserProps> = ({ user }) => {
  const { id, firstName } = user;
  return (
    <div>
      <h2>{firstName}</h2>
      <Link to={`/singleuser/${id}`}>Show details</Link>
    </div>
  );
};

export default User;
