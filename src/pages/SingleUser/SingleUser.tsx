import { useLoaderData } from "react-router-dom";
import { UserData } from "../../types";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const SingleUser: React.FC = () => {
  const user: UserData = useLoaderData() as UserData;
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
        </Card>
      </Col>
    </div>
  );
};

export default SingleUser;
