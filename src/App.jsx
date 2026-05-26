import { useState } from 'react'
import "./App.css";
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BookListPage from './pages/BookListPage';
import BookEditPage from './pages/BookEditPage';
import BookDetailPage from './pages/BookDetailPage';
import BookCreatePage from './pages/BookCreatePage';

function App() {
  const [page, setPage] = useState('home');
  const [selectedBookId, setSelectedBookId] = useState(null);

  return (
    <>
      <Navbar onNavigate={setPage} />
      {page === 'home' && <HomePage onNavigate={setPage} />}
      {page === 'list' && <BookListPage onNavigate={setPage} setSelectedBookId={setSelectedBookId}/>}
      {page === 'edit' && <BookEditPage />}
      {page === 'create' && <BookCreatePage onNavigate={setPage} />}
      {page === "detail" && <BookDetailPage onNavigate={setPage} bookId={selectedBookId} />}
    </>
  );
}
 
export default App;