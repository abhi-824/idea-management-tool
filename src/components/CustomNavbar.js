import { Navbar, Container } from "react-bootstrap";
import CButton from "./CButton";
export default function CustomNavbar(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Idea Management Tool</Navbar.Brand>
        <div>
          <CButton title="Group Highlights" variant="dark"></CButton>
          <CButton title="Add Note" variant="dark"></CButton>
        </div>
      </Container>
    </Navbar>
  );
}
