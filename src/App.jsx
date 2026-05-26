import { useState } from 'react'
import "./App.css";
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BookListPage from './pages/BookListPage';
import BookEditPage from './pages/BookEditPage';
import BookCreatePage from "./pages/BookCreatePage";
import BookDetailPage from "./pages/BookDetailPage";
 
 
function App() {
  const [page, setPage] = useState('home');
 
  return (
    <>
 
      <Navbar onNavigate={setPage} />
      {page === 'home' && <HomePage onNavigate={setPage} />}
      {page === 'list' && <BookListPage movePage={setPage} />}
      {page === 'edit' && <BookEditPage />}
      {page === 'create' && <BookCreatePage />}
      {page === 'detail' && <BookDetailPage />}
    </>
  );
}
 
export default App;