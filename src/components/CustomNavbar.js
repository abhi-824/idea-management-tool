import { Navbar, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { getCurrentId } from "./NoteStorage";
import { sampleData } from "./sample";
export default function CustomNavbar(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Idea Management Tool</Navbar.Brand>
        <div>
          <Button variant="dark">Group Highlights</Button>
          <Button
            variant="dark"
            onClick={(e) => {
              const id = getCurrentId();
              props.onAddNote(
                id,
                sampleData.sampleTitle,
                sampleData.sampleTitle,
                sampleData.sampleDescription
              );
            }}
          >
            Add Note
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}
