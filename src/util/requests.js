import axios from "axios";
import generateId from "./uuidGenerator";

const BASE_URL = "http://localhost:5500/books";

export function getBookById(id) {
  const PROMISE = axios.get(`${BASE_URL}/${id}`);

  const DATA_PROMISE = PROMISE.then((response) => response.data);

  return DATA_PROMISE;
}

export function getAllBooks() {
  const PROMISE = axios.get(BASE_URL);

  const DATA_PROMISE = PROMISE.then((response) => response.data);

  return DATA_PROMISE;
}

export function addNewBook(book) {
  const BOOK = { id: generateId(), ...book };

  const PROMISE = axios.post(BASE_URL, BOOK);

  const DATA_PROMISE = PROMISE.then((data) => data.response);

  return DATA_PROMISE;
}

export function updateBook(book) {
  const PROMISE = axios.put(`${BASE_URL}/${book.id}`, book);

  const DATA_PROMISE = PROMISE.then((data) => data.response);
  return DATA_PROMISE;
}

export function deleteBook(id) {
  axios.delete(`${BASE_URL}/${id}`);
}
