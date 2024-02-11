// import { useLoaderData } from "react-router-dom";
import { UserData } from "../../../types";
import { useEffect, useState } from "react";
import User from "./User";
import { Button, Form, InputGroup, Row, Spinner } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";

const AllUsers = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [searchUsers, setSearchUsers] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");

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

  // Sort users based on selected name, email and company

  const sortedUsers = filteredUsers.sort((user1, user2) => {
    if (sortBy === "name") {
      return user1.firstName.localeCompare(user2.firstName);
    } else if (sortBy === "email") {
      return user1.email.localeCompare(user2.email);
    } else if (sortBy === "company") {
      return user1.company.name.localeCompare(user2.company.name);
    }
    return 0;
  });

  //

  return (
    <div>
      <h1 className="mt-4 mb-2 text-center">ALL USERS</h1>
      <hr />

      {/* search input  */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mx-4 gap-4 gap-md-1">
        {/* sorting */}
        <Form.Select
          aria-label="Select sorting option"
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option>All</option>
          <option value="name">Sort by name</option>
          <option value="email">Sort by email</option>
          <option value="company">Sort by Company name</option>
        </Form.Select>

        {/*  search input*/}
        <InputGroup className="mb-3 w-25">
          <Form.Control
            placeholder="Search users"
            className="border-0 border-bottom rounded-0 "
            aria-label="Search users"
            aria-describedby="basic-addon2"
            value={searchUsers}
            onChange={(e) => setSearchUsers(e.target.value)}
          />
          <Button
            className="bg-transparent text-dark border-0 border-bottom rounded-0"
            id="button-addon2"
          >
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
            {users.length === 0 ? (
              <div className="d-block mx-auto mt-5">
                <Spinner animation="border" variant="dark" />
              </div>
            ) : (
              <>
                {sortedUsers.length === 0 ? (
                  <div className="text-center w-100">No users found.</div>
                ) : (
                  sortedUsers.map((user) => <User key={user.id} user={user} />)
                )}
              </>
            )}
          </>
        )}
      </Row>
    </div>
  );
};

export default AllUsers;
