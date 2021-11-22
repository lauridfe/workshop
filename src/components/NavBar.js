import { Nav, Container, Navbar } from "react-bootstrap";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Mercado</Navbar.Brand>
          <Nav className="w-100 me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Store</Nav.Link>
            <Nav.Link href="#pricing">Preguntas</Nav.Link>
            <Nav.Link href="#icon">
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
