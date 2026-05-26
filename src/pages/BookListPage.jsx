import { useEffect, useState } from 'react';
import { getBooks, deleteBook } from '../api/books';
import BookCard from '../components/BookCard';

export default function BookListPage({ onNavigate, setSelectedBookId }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getBooks()
      .then(setBooks)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  async function handleDelete(id) {
    if (!window.confirm('정말 삭제하시겠습니까?')) return;
    try {
      await deleteBook(id);
      setBooks((prev) => prev.filter((b) => b.id !== id));
    } catch (err) {
      alert(err.message);
    }
  }

  if (loading) return <p className="status-message">불러오는 중...</p>;
  if (error) return <p className="status-message status-message--error">{error}</p>;

  return (
    <div className="book-list-page">
      <div className="book-list-header">
        <h1>도서 목록</h1>
        <button className="btn-primary" onClick={() => onNavigate('create')}>
          + 도서 등록
        </button>
      </div>

      {books.length === 0 ? (
        <p className="status-message">등록된 도서가 없습니다.</p>
      ) : (
        <ul className="book-list">
          {books.map((book) => (
            <li
              key={book.id}
              onClick={() => {
                setSelectedBookId(book.id);
                onNavigate("detail");
              }}
            >
              <BookCard
                book={book}
                onDelete={handleDelete}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}