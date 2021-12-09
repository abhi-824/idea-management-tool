import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { getCurrentId } from "./NoteStorage";
import { sampleData } from "./sample";
export default function CustomNavbar(props) {
  console.log(props.isBuckPage);
  return (
    <React.Fragment>
      {!props.isBuckPage && (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Idea Management Tool</Navbar.Brand>
            <div>
              <Link to="/buckets">
                <Button variant="dark">See all Buckets</Button>
              </Link>
              <Button
                variant="dark"
                onClick={(e) => {
                  const id = getCurrentId();
                  props.onAddNote(
                    id,
                    sampleData.sampleTitle,
                    sampleData.sampleTags,
                    sampleData.sampleSubTitle,
                    sampleData.sampleDescription
                  );
                }}
              >
                Add Note
              </Button>
            </div>
          </Container>
        </Navbar>
      )}
      {props.isBuckPage && (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Idea Management Tool</Navbar.Brand>
            <div>
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
                Add Bucket
              </Button>
            </div>
          </Container>
        </Navbar>
      )}
    </React.Fragment>
  );
}
