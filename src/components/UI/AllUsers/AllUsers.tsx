// import { useLoaderData } from "react-router-dom";
import { UserData } from "../../../types";
import { useEffect, useState } from "react";
import User from "./User";
import { Button, Form, InputGroup, Row, Spinner } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";

const AllUsers = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [searchUsers, setSearchUsers] = useState<string>("");

  // fetch user data

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

  // search users
  const filteredUsers = users.filter((user) =>
    user.firstName.toLowerCase().includes(searchUsers.toLowerCase())
  );

  return (
    <div>
      <h1 className="mt-4 mb-2 text-center">ALL USERS</h1>
      <hr />

      <div className="w-25 ms-auto">
        <InputGroup className="mb-3 ">
          <Form.Control
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={searchUsers}
            onChange={(e) => setSearchUsers(e.target.value)}
          />
          <Button variant="outline-secondary" id="button-addon2">
            <CiSearch />
          </Button>
        </InputGroup>
      </div>

      {/* user container */}

      <Row xs={1} md={2} lg={3} xl={4} className="g-4 mt-3">
        {/*  */}

        {users.length === 0 ? (
          <div className="d-block mx-auto mt-5">
            {/* loader */}

            <Spinner animation="border" variant="dark" />
          </div>
        ) : (
          <>
            {filteredUsers.length === 0 ? (
              <h2 className="text-center w-100 text-danger">No users found.</h2>
            ) : (
              filteredUsers.map((user) => <User key={user.id} user={user} />)
            )}
          </>
        )}
      </Row>
    </div>
  );
};

export default AllUsers;
