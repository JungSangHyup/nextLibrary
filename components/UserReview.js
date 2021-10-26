import React, { useState } from "react";
import { FaStar, FaUser } from "react-icons/fa";
import { Card, Col, Row, Button, Form } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";

const UserReview = () => {
  const [rate, setRate] = useState(0);

  const onStarClick = (nextValue, prevValue, name) => {
    setRate({ rating: nextValue });
  };

  return (
    <Form
      name="commentForm"
      method="post"
      action="/book/review?num=${bookVO.bookId}"
    >
      <Card>
        <Row>
          <Col></Col>
          <Col md="10">
            <Card.Body>
              <Card.Title>책 평가하기</Card.Title>
              <StarRatingComponent
                name="rate"
                editing={true}
                renderStarIcon={() => <FaStar></FaStar>}
                starCount={5}
                value={3}
                onStarClick={onStarClick.bind(this)}
              />
              <textarea
                id="textarea"
                className="form-control card-text"
                name="content"
              ></textarea>
              <div className="mt-3 d-flex justify-content-between">
                <Button type="submit">등록</Button>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Form>
  );
};

export default UserReview;
