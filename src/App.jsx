import { useState } from 'react'
import "./App.css";
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BookListPage from './pages/BookListPage';
import BookEditPage from './pages/BookEditPage';
// import BookListPage from "./pages/BookListPage";
// import BookCreatePage from "./pages/BookCreatePage";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <BookEditPage/>
    </>
  );
}

export default App;
