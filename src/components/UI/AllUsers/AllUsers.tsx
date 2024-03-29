// import { useLoaderData } from "react-router-dom";
import { UserData } from "../../../types";
import { useEffect, useState } from "react";
import User from "./User";
import { Button, Row, Spinner } from "react-bootstrap";
import SelectInput from "../Inputs/SelectInput";
import SearchInput from "../Inputs/SearchInput";
import AddUser from "../Modal/AddUserModal";
import { ToastContainer } from "react-toastify";

const AllUsers = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [searchUsers, setSearchUsers] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");
  const [modalShow, setModalShow] = useState(false);

  // fetch user data
  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await fetch("https://dummyjson.com/users");
        if (!res.ok) {
          throw new Error("Failed");
        }
        const responseData = await res.json();
        const usersData: UserData[] = responseData.users;
        setUsers(usersData);
      } catch (error) {
        // console.error(error);
      }
    };
    fetchAllUsers();
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
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mx-4 gap-4 gap-md-3 mt-5">
        {/* sorting */}
        <SelectInput sortBy={sortBy} setSortBy={setSortBy} />

        {/*  search input*/}
        <SearchInput
          searchUsers={searchUsers}
          setSearchUsers={setSearchUsers}
        />

        {/* add user btn */}
        <Button className="w-25 mb-3" onClick={() => setModalShow(true)}>
          Add New User
        </Button>

        {/* toast */}
        <ToastContainer
          position="top-center"
          autoClose={10000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          style={{ width: "500px" }}
        />

        {/* add user modal component */}
        <AddUser show={modalShow} onHide={() => setModalShow(false)} />
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
