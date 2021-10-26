import UserReview from "../../../components/UserReview";
import Review from "../../../components/Review";
import Layout from "../../../components/Layout";
import useSWR from "swr";
import { Col, Card, Row, Button, Image } from "react-bootstrap";
import { useEffect, useState } from "react";

const Content = (props) => {
  const [book, setBook] = useState(props.book);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(
    "http://127.0.0.1:8080/api/book/recommend/" + props.pid,
    fetcher
  );

  console.log(data);

  useEffect(() => {
    if (data) {
      setBook(data);
    }
  });

  if (error) {
    return <p>Failed to load</p>;
  }

  if (!data && !book) {
    return <p>Loading...</p>;
  }

  const imagePath = book.recomfilepath.replace("http://", "https://");

  function createMarkup(contents) {
    return { __html: contents };
  }

  return (
    <Layout>
      <Card>
        <Row>
          <Col md="3">
            <Image src={imagePath} alt={book.recomtitle} />
          </Col>
          <Col>
            <Card.Body>
              <h5 class="card-title">{book.recomtitle}</h5>
              <p class="card-text">{book.recomauthor}</p>
              <Button>찜하기</Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <hr />
      <p
        class="card-text"
        dangerouslySetInnerHTML={createMarkup(book.recomcontens)}
      ></p>
      <div class="detail-img">
        <h4>상세 이미지</h4>
        <Image src={imagePath} alt={book.recomtitle} />
      </div>
      <hr />
      <h2>리뷰</h2>
      <Review />
      <h2>사용자 평가</h2>
      <UserReview />
    </Layout>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const pid = params.id;

  const response = await fetch(
    "http://127.0.0.1:8080/api/book/recommend/" + pid
  );
  const data = await response.json();

  return { props: { book: data, pid: pid }, revalidate: 60 };
}

export async function getStaticPaths() {
  const response = await fetch("http://127.0.0.1:8080/api/book/recommend");
  const data = await response.json();

  const ids = data.map((book) => book.id);
  const pathsWithParams = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths: pathsWithParams,
    fallback: true,
  };
}

export default Content;
