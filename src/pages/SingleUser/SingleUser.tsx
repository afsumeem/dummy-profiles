import { useLoaderData } from "react-router-dom";
import { UserData } from "../../types";

const SingleUser: React.FC = () => {
  const user: UserData = useLoaderData() as UserData;
  const { firstName } = user;
  return (
    <div>
      <h1>{firstName}</h1>
    </div>
  );
};

export default SingleUser;
