import { useState } from 'react'
import "./App.css";
import HomePage from './pages/HomePage';
import BookEditPage from './pages/BookEditPage';
import Navbar from './components/Navbar';
import BookListPage from './pages/BookListPage';

// import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <BookEditPage/>
      <BookListPage />
    </>
  )
}

export default App
