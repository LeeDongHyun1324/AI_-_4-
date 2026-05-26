
import { useState } from 'react'
import "./App.css";
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BookListPage from './pages/BookListPage';
import BookEditPage from './pages/BookEditPage';
import BookCreatePage from './pages/BookCreatePage';

function App() {
  const [page, setPage] = useState('home');

  const [editingBook, setEditingBook] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  return (
    <>
      {/* <Navbar />
      <HomePage />
      {editingBook && (
        <BookEditPage 
          book={editingBook} 
          onCancel={() => setEditingBook(null)}
          onSuccess={() => {
            setEditingBook(null);
            setRefreshTrigger(prev => prev + 1);
          }}
        />
      )}
      
      <BookListPage 
        key={refreshTrigger} 
        onEditClick={(book) => setEditingBook(book)} 
        /> */}


      <Navbar onNavigate={setPage} />
      {page === 'home' && <HomePage onNavigate={setPage} />}
      {page === 'list' && (
              <BookListPage 
                key={refreshTrigger}
                onEditClick={(book) => {
                  setEditingBook(book);
                  setPage('edit');
                }} 
              />
            )}      
      {page === 'edit' && <BookEditPage 
          book={editingBook} 
          onCancel={() => {
            setEditingBook(null);
            setPage('list');
           }}
          onSuccess={() => {
            setEditingBook(null);
            setRefreshTrigger(prev => prev + 1);
            setPage('list');
          }}
        />}
      {page === 'create' && <BookCreatePage onNavigate={setPage} onEditClick={(book) => setEditingBook(book)}/>}

    </>
  );
}

export default App;
