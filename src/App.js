import "./App.css";
import React from "react";

import { useState, useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import BookTable from "./components/BookTable";
import BookForm from "./components/BookForm";
import DetailTable from "./components/DetailTable";
import {
  addNewBook,
  deleteBook,
  getAllBooks,
  updateBook,
} from "./util/requests";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAllBooks().then((data) => setBooks(data));
  }, []);

  const handleSubmit = async (book) => {
    addNewBook(book).then((data) => setBooks([...books, data]));
  };

  const handleUpdate = async (book) => {
    updateBook(book).then((data) => setBooks([...books, data]));
  };

  const handleDelete = async (id) => {
    deleteBook(id);

    const newBooksList = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(newBooksList);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/details/:id"
            element={<DetailTable deleteBook={handleDelete} />}
          ></Route>
          <Route
            path="/"
            element={<BookTable books={books} deleteBook={handleDelete} />}
          />

          <Route
            path="/addbook"
            element={<BookForm submit={handleSubmit} book={{}} />}
          />
          <Route
            path="/edit/:id"
            element={
              <BookForm
                editForm={true}
                books={books}
                updateBook={handleUpdate}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
