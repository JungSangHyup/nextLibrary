import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import { FaStar, FaUser } from "react-icons/fa";

const Review = ({ star, sum, reviewList }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <Col md="4">
              <FaUser size="100px" />
            </Col>
            <Col>
              <Row>
                <Col md="2">
                  <h2 class="rating-num">4.5</h2>
                </Col>
                <Col md="10">
                  <label className="star star-5">
                    <FaStar className="star star-5" />
                  </label>
                  <label className="star star-5">
                    <FaStar className="star star-5" />
                  </label>
                  <label className="star star-5">
                    <FaStar className="star star-5" />
                  </label>
                  <label className="star star-5">
                    <FaStar className="star star-5" />
                  </label>
                  <label className="star star-5">
                    <FaStar className="star star-5" />
                  </label>
                </Col>
              </Row>
              <ProgressBar now={60} />
              <hr />
              재밌어요
            </Col>
          </Row>
        </Col>
      </Row>
      <style jsx>
        {`
          .star {
            float: right;
            font-size: 36px;
            color: #4a148c;
            transition: all 0.2s;
          }

          .star:hover {
            transform: rotate(-15deg) scale(1.3);
          }
        `}
      </style>
    </Container>
  );
};

export default Review;
