import { Alert } from "react-bootstrap";
export default function Message(props) {
  return (
    <Alert variant={props.variant}>
      {props.content}
    </Alert>
  );
}
Message.defaultProps = {
  content: "",
};
