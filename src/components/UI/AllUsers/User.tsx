import { Link } from "react-router-dom";
import { UserData } from "../../../types";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/User.module.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

interface UserProps {
  user: UserData;
}
const User: React.FC<UserProps> = ({ user }) => {
  const { id, firstName, lastName, image, email, address, company } = user;
  return (
    <Col>
      <div
        className={`d-flex justify-content-center flex-column align-items-center shadow ${styles.userInfo}`}
      >
        <div className={styles.cover}></div>
        <img src={image} alt="" />

        <Link to={`/user/${id}`} className="text-decoration-none">
          <h3>
            {firstName} {lastName}
          </h3>
        </Link>
        <h6> {email}</h6>
        <div className={styles.horizontalLine}></div>
        <p className="text-center">
          {address.address},<br />
          <span>
            {address.city}, {address.state}
          </span>
        </p>

        <p className={styles.company}>Company: {company.name}</p>
        <div>
          <FaTwitter />
          <FaFacebook />
          <FaLinkedin />
        </div>
      </div>
    </Col>
  );
};

export default User;
