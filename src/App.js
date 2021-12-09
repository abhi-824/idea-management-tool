import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import "./css/compiled/main.css";
import CustomCard from "./components/Card";
import { Container } from "react-bootstrap";
import { getAllNotesFromLocalStorage } from "./components/NoteStorage";
import { useState } from "react";
function App() {
  const [notes, setNotes] = useState(getAllNotesFromLocalStorage());
  console.log(notes);
  const handleAddNote = (id, title, subtitle, content) => {
    notes.push({
      id: id,
      title: title,
      subtitle: subtitle,
      content: content,
    });
    console.log("hey")
    setNotes([...notes]);
    localStorage.setItem("notes", JSON.stringify(notes));
  };
  const handleDeleteNote = (id) => {
    var idx = notes.indexOf(id);
    notes.splice(idx, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    setNotes([...notes])
  };
  console.log("render");
  return (
    <div className="App">
      <CustomNavbar onAddNote={handleAddNote}></CustomNavbar>
      <Container className="d-flex flex-row wrap">
        {notes.map((elem) => {
          return (
            <CustomCard
              id={elem.id}
              title={elem.title}
              subtitle={elem.subtitle}
              body={elem.body}
              onDeleteNote={handleDeleteNote}
            ></CustomCard>
          );
        })}
      </Container>
    </div>
  );
}

export default App;
