import React from "react";
import { Button, Card, Col, Row, Image } from "react-bootstrap";

const CustomCard = ({ id, img, name, author }) => {
  const imagePath = img.replace("http://", "https://");
  return (
    <Card>
      <Row>
        <Col md="2">
          <Image src={imagePath} alt={name} />
        </Col>
        <Col md="8">
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{author}</Card.Text>
            <Card.Link href={`/book/${encodeURIComponent(id)}`}>
              <Button>보기</Button>
            </Card.Link>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default CustomCard;
