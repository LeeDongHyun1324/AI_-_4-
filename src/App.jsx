<<<<<<< HEAD
import './App.css';
import BookDetailPage from './pages/BookDetailPage';

function App() {
  return (
    <div>
      <BookDetailPage />
    </div>
  );
=======
import { useState } from 'react'
import "./App.css";
import HomePage from './pages/HomePage';
import BookEditPage from './pages/BookEditPage';
import Navbar from './components/Navbar';

// import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <BookEditPage/>
    </>
  )
>>>>>>> 8e46784fc5eb5079b9bae09bf9f747ff83e58e93
}

export default App;