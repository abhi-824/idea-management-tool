import { Card } from "react-bootstrap";
export default function CustomCard(props) {
  return (
    <Card style={{ width: "18rem", background: props.color }}>
      <Card.Body>
        <Card.Title><textarea defaultValue={"Title here"} rows="1"></textarea></Card.Title>
        <Card.Subtitle className="mb-2 text-muted"><textarea defaultValue={"Subtitle here"} rows="1"></textarea></Card.Subtitle>
        <Card.Text>
          <textarea defaultValue={"start typing body here"}></textarea>
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}
CustomCard.defaultProps = {
    background: "none",
  }
