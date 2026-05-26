
import { useState } from 'react'
import "./App.css";
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BookListPage from './pages/BookListPage';
import BookCreatePage from './pages/BookCreatePage';

function App() {
  const [page, setPage] = useState('home');

  return (
    <>
      <Navbar onNavigate={setPage} />
      {page === 'home' && <HomePage onNavigate={setPage} />}
      {page === 'list' && <BookListPage />}
      {page === 'edit' && <BookCreatePage />}
    </>
  );
}

export default App;

