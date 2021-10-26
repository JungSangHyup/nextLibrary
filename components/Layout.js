import React from "react";
import { Container } from 'react-bootstrap';
import Navigation from "../components/Navigation";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navigation />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
