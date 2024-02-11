import { useLoaderData } from "react-router-dom";
import { UserData } from "../../types";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styles from "../../styles/SingleUser.module.css";
import { Col, Row } from "react-bootstrap";

const SingleUser: React.FC = () => {
  const user: UserData = useLoaderData() as UserData;
  const { firstName, lastName, image, email, address, company } = user;

  return (
    <div>
      {/* user card container */}
      <Row className={` ${styles.userInfo}`}>
        <Col md={1} lg={2}></Col>
        <Col sm={12} md={5} lg={4}>
          <div className={styles.cover}>
            <img src={image} alt="" />
          </div>

          {/* user avatar and title */}
        </Col>

        <Col
          sm={12}
          md={5}
          lg={4}
          className="d-flex flex-column align-items-center justify-content-center border rounded"
        >
          <h3 className="mt-4">
            {firstName} {lastName}
          </h3>

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
        </Col>
        <Col md={1} lg={2}></Col>
      </Row>
    </div>
  );
};

export default SingleUser;
