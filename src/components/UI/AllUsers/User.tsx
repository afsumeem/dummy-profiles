import { Link } from "react-router-dom";
import { UserData } from "../../../types";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
interface UserProps {
  user: UserData;
}
const User: React.FC<UserProps> = ({ user }) => {
  const { id, firstName, lastName, image, email, address, company } = user;
  return (
    <div>
      <Col key={id}>
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>
              {firstName}
              {lastName}
            </Card.Title>
            <Card.Text>
              {email}
              {address.address}
              {address.city}
              {address.state}
              {company.name}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link to={`/user/${id}`}>Show details</Link>
          </Card.Footer>
        </Card>
      </Col>
    </div>
  );
};

export default User;
