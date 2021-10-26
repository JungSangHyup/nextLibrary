import Link from "next/link";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="/">LIBRARY</Navbar.Brand>
        <Navbar.Collapse>
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title="도서목록">
            <NavDropdown.Item href="#">책장</NavDropdown.Item>
            <NavDropdown.Item href="#">갤러리</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#">게시판</Nav.Link>
          <Nav.Link href="#">문의사항</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
