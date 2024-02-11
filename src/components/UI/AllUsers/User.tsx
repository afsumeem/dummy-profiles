import { Link, NavLink } from "react-router-dom";
import { UserData } from "../../../types";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/User.module.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

// user data types

interface UserProps {
  user: UserData;
}

const User: React.FC<UserProps> = ({ user }) => {
  const { id, firstName, lastName, image, email, address, company } = user;

  return (
    <Col>
      {/* user card container */}
      <div
        className={`d-flex justify-content-center flex-column align-items-center shadow ${styles.userInfo}`}
      >
        <div className={styles.cover}></div>

        {/* user avatar and title */}
        <img src={image} alt="" />

        <Link to={`/user/${id}`} className="text-decoration-none">
          <h3>
            {firstName} {lastName}
          </h3>
        </Link>

        {/* user info */}
        <h6> {email}</h6>
        <div className={styles.horizontalLine}></div>
        <p className="text-center">
          {address.address},<br />
          <span>
            {address.city}, {address.state}
          </span>
        </p>

        <p className={styles.company}>Company: {company.name}</p>

        {/* social icons */}
        <div className=" d-flex gap-3 mb-3 mt-2">
          <NavLink to="https://www.twitter.com" target="_blank">
            <FaTwitter style={{ color: "rgb(95, 156, 226)" }} />
          </NavLink>
          <NavLink to="https://www.facebook.com" target="_blank">
            <FaFacebook style={{ color: "rgb(31, 28, 228)" }} />{" "}
          </NavLink>{" "}
          <NavLink to="https://www.linkedin.com" target="_blank">
            <FaLinkedin style={{ color: "rgb(5, 3, 133)" }} />{" "}
          </NavLink>
        </div>
      </div>
    </Col>
  );
};

export default User;
