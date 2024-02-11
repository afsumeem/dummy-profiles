// import { useLoaderData } from "react-router-dom";
import { UserData } from "../../../types";
import { useEffect, useState } from "react";
import User from "./User";
import { Row } from "react-bootstrap";

const AllUsers = () => {
  const [users, setUsers] = useState<UserData[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const responseData = await response.json();
        const usersData: UserData[] = responseData.users;
        setUsers(usersData);
        // console.log(usersData);
      } catch (error) {
        // console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);
  // console.log(users);
  // const users: UserData[] = useLoaderData() as UserData[];
  // console.log(users);
  return (
    <div>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </Row>
    </div>
  );
};

export default AllUsers;
