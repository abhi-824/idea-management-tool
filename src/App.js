import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import "./css/compiled/main.css";
import CustomCard from "./components/Card";
import { Container } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <CustomNavbar></CustomNavbar>
      <Container>
        <CustomCard></CustomCard>
      </Container>
    </div>
  );
}

export default App;
