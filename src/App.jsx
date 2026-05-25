import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import BookListPage from './pages/BookListPage'

function App() {
  // const [count, setCount] = useState(0)
  const [books, setBooks] = useState([
    { "id": 1, 
      "title": "title", 
      "author": "kmim",
      "content": "   1  ",
      "coverImageUrl": "",
      "createdAt": "2026-04-24T09:00:00.000Z",
      "updatedAt": "2026-04-24T09:00:00.000Z"
    }, 
    { "id": 2, 
      "title": "our great escape", 
      "author": "just park",
      "content": "Three of them were devil. and there's nothing at all.",
      "coverImageUrl": "",
      "createdAt": "2026-04-24T09:00:00.000Z",
      "updatedAt": "2026-04-24T09:00:00.000Z"
    }
  ]); // 초기 데이터 하드코딩 상태
  
  const handleDelete = (id) => {
    setBooks(books.filter(book => book.id !== id));
  }; // 임시 삭제 함수. db 삭제는 미적용.

  return (
    <>
      <BookListPage books={books} onDelete={handleDelete}/>
    </>
  )
}

export default App
