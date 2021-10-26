import { Container, Nav, Navbar, Row } from "react-bootstrap";

const SideMenuItem = ({ menu }) => {
  return (
    <a
      className="nav-link"
      id="tab_new"
      data-toggle="pill"
      role="tab"
      data-value="new"
      aria-controls="v-pills-messages"
      aria-selected="false"
    >
      {menu}
    </a>
  );
};

const SideMenu = () => {
  return (
    <Nav defaultActiveKey="/" className="flex-column">
      <Nav.Link>건강/취미</Nav.Link>
      <Nav.Link>경제/경영</Nav.Link>
      <Nav.Link>사회/정치</Nav.Link>
      <Nav.Link>소설/시</Nav.Link>
      <Nav.Link>여행/예술</Nav.Link>
      <Nav.Link>IT모바일</Nav.Link>
      <Nav.Link>유아</Nav.Link>
    </Nav>
  );
};

export default SideMenu;
