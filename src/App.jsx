
import { useState } from 'react'
import "./App.css";
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BookListPage from './pages/BookListPage';
import BookEditPage from './pages/BookEditPage';

function App() {
  const [page, setPage] = useState('home');

  return (
    <>
<<<<<<< HEAD
      <Navbar />
      <HomePage />
      <BookEditPage/>

    </>
  )

}

export default App;
=======
      <Navbar onNavigate={setPage} />
      {page === 'home' && <HomePage onNavigate={setPage} />}
      {page === 'list' && <BookListPage />}
      {page === 'edit' && <BookEditPage />}
    </>
  );
}

export default App;
>>>>>>> ffe3fa40bea1187099d30890ea03702ed430d9eb
