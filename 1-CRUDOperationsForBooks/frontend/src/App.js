import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

import { useState, useEffect } from "react";
import axios from "axios";
import EditBookForm from "./components/EditBookForm";

function App() {
  useEffect(() => {
    getBooks();
  }, []);

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    ISBN: "",
    genre: "",
    publicationYear: "",
    image: "",
  });
  const baseURL = "http://localhost:8000";
  const getBooks = async () => {
    try {
      const response = await axios.get(baseURL);
      console.log(response);
      setFormData(response.data.result.rows);
    } catch (error) {
      console.error("Error fetching books:", error);
      throw error;
    }
  };

  const createBook = async (formData) => {
    try {
      const response = await axios.post(baseURL, formData);
      return response.data;
    } catch (error) {
      console.error("Error creating book:", error);
      throw error;
    }
  };

  return (
    <div className="App" style={{ padding: "20px" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/edit/:id" element={<EditBookForm />} />
          <Route path="/new" element={<BookForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
