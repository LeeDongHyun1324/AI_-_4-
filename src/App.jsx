import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import BookListPage from './pages/BookListPage'

function App() {
  // const [count, setCount] = useState(0)
  const [books, setBooks] = useState([]);

  setBooks([
      { "id": 1, "title": "title", "author": "kmim","content": "   1  ",
        "coverImageUrl": "","createdAt": "2026-04-24T09:00:00.000Z",
        "updatedAt": "2026-04-24T09:00:00.000Z"}
    ]
  );
  return (
    <>
      <BookListPage books={books}/>
    </>
  )
}

export default App
