import React from "react";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import "./css/compiled/main.css";
import CustomCard from "./components/Card";
import { Container } from "react-bootstrap";
import {
  getAllNotesFromLocalStorage,
  getAllBucketsFromLocalStorage,
} from "./components/NoteStorage";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [notes, setNotes] = useState(getAllNotesFromLocalStorage());
  const [buckets, setBuckets] = useState(getAllBucketsFromLocalStorage());
  const handleAddNote = (id, title, tags, subtitle, body) => {
    notes.push({
      id: id,
      title: title,
      tags: tags,
      subtitle: subtitle,
      body: body,
    });
    console.log("hey");
    setNotes([...notes]);
    localStorage.setItem("notes", JSON.stringify(notes));
  };
  const handleDeleteNote = (id) => {
    var idx = notes.indexOf(id);
    notes.splice(idx, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    setNotes([...notes]);
  };
  console.log("render");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <CustomNavbar
                  onAddNote={handleAddNote}
                  isBuckPage={false}
                ></CustomNavbar>
                <div className="container">
                  <div className="row justify-content-left p-3">
                    {notes.map((elem) => {
                      return (
                        <CustomCard
                          id={elem.id}
                          tags={elem.tags}
                          title={elem.title}
                          subtitle={elem.subtitle}
                          body={elem.body}
                          onDeleteNote={handleDeleteNote}
                        ></CustomCard>
                      );
                    })}
                  </div>
                </div>
              </React.Fragment>
            }
          ></Route>
          <Route
            path="/buckets"
            element={
              <React.Fragment>
                <CustomNavbar
                  onAddNote={handleAddNote}
                  isBuckPage={true}
                ></CustomNavbar>
                <Container>
                  {buckets.map((bucket) => {
                    return;
                  })}
                </Container>
              </React.Fragment>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
