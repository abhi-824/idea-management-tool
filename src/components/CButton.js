import { Button } from "react-bootstrap";
export default function CButton(props) {
  return <Button variant={props.variant}>{props.title}</Button>;
}

CButton.defaultProps = {
  variant: "light",
  title: "",
};
