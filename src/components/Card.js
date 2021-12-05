import { Card, Button } from "react-bootstrap";
import { useState } from "react";
export default function CustomCard(props) {
  const [title, setTitle] = useState(props.title);
  const [subtitle, setSubtitle] = useState(props.subtitle);
  const [body, setBody] = useState(props.body);
  const handleEditNote = (id) => {
    const notes = JSON.parse(localStorage.getItem("notes") || "[]") || [];
    let noteToBeUpdated = notes.find((o) => o.id === id);
    if (noteToBeUpdated) {
      noteToBeUpdated.title = title;
      noteToBeUpdated.subTitle = subtitle;
      noteToBeUpdated.content = body;
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  };
  return (
    <Card style={{ width: "18rem", background: props.color }}>
      <Card.Body>
        <Card.Title>
          <textarea
            defaultValue={title}
            rows="1"
            onChange={(e) => {
              setTitle(e.target.value);
              handleEditNote(props.id)
            }}
          ></textarea>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <textarea
            defaultValue={subtitle}
            rows="1"
            onChange={(e) => {
              setSubtitle(e.target.value);
              handleEditNote(props.id)
            }}
          ></textarea>
        </Card.Subtitle>
        <Card.Text>
          <textarea
            defaultValue={body}
            onChange={(e) => {
              setBody(e.target.value);
              handleEditNote(props.id)
            }}
          ></textarea>
        </Card.Text>
        <Button
          variant="danger"
          onClick={(e) => {
            props.onDeleteNote(props.id);
          }}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}
CustomCard.defaultProps = {
  background: "none",
  title: "Title here",
  subtitle: "Subtitle here",
  body: "start typing body here",
};
