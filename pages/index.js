import { useEffect, useState } from "react";
import SideMenu from "../components/SideMenu";
import Layout from "../components/Layout";
import useSWR from "swr";
import Link from "next/link";

import CustomCard from "../components/CustomCard";
import { Row, Col, Container } from "react-bootstrap";

const Home = (props) => {
  const [books, setBooks] = useState(props.books);
  const [rental, setRental] = useState(false);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(
    "http://127.0.0.1:8080/api/book/recommend",
    fetcher
  );

  useEffect(() => {
    if (data) {
      setBooks(data);
    }
  });

  if (error) {
    return <p>Failed to load</p>;
  }

  if (!data && !books) {
    return <p>Loading...</p>;
  }

  const rentalClick = () => {
    if (rental) setRental(false);
    else setRental(true);
  };

  return (
    <Layout>
      <Row>
        <Col md="2">
          <SideMenu />
        </Col>
        <Col>
          <input
            type="checkbox"
            className="custom-control-input rental_btn"
            data-value="all"
            onClick={rentalClick}
          />
          <label className="custom-control-label m-2 " htmlFor="rental_btn">
            대여
          </label>
          <Container>
            {books.map((book) => (
              <CustomCard
                key={book.id}
                id={book.id}
                img={book.recomfilepath}
                name={book.recomtitle}
                author={book.recomauthor}
              />
            ))}
          </Container>
        </Col>
      </Row>
    </Layout>
  );
};

export async function getStaticProps() {
  const response = await fetch("http://127.0.0.1:8080/api/book/recommend");
  // const response = await fetch(
  //   "https://www.nl.go.kr.//NL/search/openApi/saseoApi.do?key=" + CERTKEY
  // );
  const data = await response.json();

  return { props: { books: data }, revalidate: 60 };
}

export default Home;
