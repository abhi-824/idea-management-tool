import { Card, Button } from "react-bootstrap";
import { useState } from "react";
export default function CustomCard(props) {
  let [title, setTitle] = useState(props.title);
  let [subtitle, setSubtitle] = useState(props.subtitle);
  let [body, setBody] = useState(props.body);
  let [tags, setTags] = useState(props.tags);
  const getTagsFromString = (str) => {
    return str.split(" ");
  };
  const handleEditNote = async (id) => {
    setSubtitle(subtitle);
    setTitle(title);
    setBody(body);
    setTags([...tags]);
    const notes = JSON.parse(localStorage.getItem("notes") || "[]") || [];
    let noteToBeUpdated = notes.find((o) => o.id === id);
    if (noteToBeUpdated) {
      noteToBeUpdated.title = title;
      noteToBeUpdated.subtitle = subtitle;
      noteToBeUpdated.body = body;
      noteToBeUpdated.tags = tags;
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  };
  return (
    <div className="col-4 mb-4">
      <Card style={{ background: props.color }} className="">
        <Card.Body>
          <Card.Title>
            <textarea
              defaultValue={title}
              rows="1"
              onChange={(e) => {
                title = e.target.value;
                handleEditNote(props.id);
              }}
            ></textarea>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <textarea
              defaultValue={props.tags.toString()}
              rows="1"
              onChange={(e) => {
                tags = getTagsFromString(e.target.value);
                console.log(tags);
                handleEditNote(props.id);
              }}
            ></textarea>
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            <textarea
              defaultValue={subtitle}
              rows="1"
              onChange={(e) => {
                subtitle = e.target.value;
                handleEditNote(props.id);
              }}
            ></textarea>
          </Card.Subtitle>
          <Card.Text>
            <textarea
              defaultValue={body}
              onChange={(e) => {
                body = e.target.value;
                handleEditNote(props.id);
              }}
            ></textarea>
          </Card.Text>
          <Button
            className="position-absolute top-0 end-0"
            variant="danger"
            onClick={(e) => {
              props.onDeleteNote(props.id);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path
                fill-rule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
CustomCard.defaultProps = {
  background: "none",
  title: "Title here",
  subtitle: "Subtitle here",
  body: "start typing body here",
};
