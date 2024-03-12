import "./App.css";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

import { useState, useEffect } from "react";

import useBookCalls from "./hooks/useBookCalls";

function App() {
  const { getBooks } = useBookCalls();

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="App">
      App
      {/* <BookList /> */}
      {/* <BookForm /> */}
    </div>
  );
}

export default App;
