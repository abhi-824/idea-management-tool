import { Button } from "react-bootstrap";
export default function CButton(props) {
  return (
    <Button
      variant={props.variant}
      onClick={(e) => {
        props.handleOnClick("1","ss","12","dd");
      }}
    >
      {props.title}
    </Button>
  );
}

CButton.defaultProps = {
  variant: "light",
  title: "",
};
