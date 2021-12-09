export default class Note {
  constructor(id, body, title, subtitle) {
    this.id = id;
    this.body = body;
    this.title = title;
    this.subtitle = subtitle;
  }
  saveToLocalStorage() {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push({
      id: this.id,
      title: this.title,
      subtitle: this.subtitle,
      body: this.body,
    });
    localStorage.setItem("notes", JSON.stringify(notes));
  }
  deleteFromLocalStorage(id) {
    const notes = localStorage.getItem("notes") || [];
    var idx = notes.indexOf(id);
    notes.splice(idx, 1);
    localStorage.setItem("notes", notes);
  }
}
export function getAllNotesFromLocalStorage(){
  const notes = JSON.parse(localStorage.getItem("notes")||"[]") || [];
  return notes;
}
export function getCurrentId(){
  const notes = JSON.parse(localStorage.getItem("notes")||"[]") || [];
  return notes.length+1;
}
export function getAllBucketsFromLocalStorage(){
  const buckets = JSON.parse(localStorage.getItem("buckets")||"[]") || [];
  return buckets;
}