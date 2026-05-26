import { useState } from 'react'
import "./App.css";
import HomePage from './pages/HomePage';
import BookEditPage from './pages/BookEditPage';
// import BookListPage from "./pages/BookListPage";
// import BookCreatePage from "./pages/BookCreatePage";
import Navbar from './components/Navbar';

// import './App.css'

function App() {
  // 페이지 이동 useState
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return <HomePage />;

      case "list":
        return <BookListPage />;

      case "create":
        return <BookCreatePage />;

      default:
        return <HomePage />;
    }
  };

  return (
    <>
      <Navbar setPage={setPage} />
      {renderPage()}
    </>
  );
}

export default App;
