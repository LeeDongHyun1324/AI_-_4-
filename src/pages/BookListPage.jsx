import { useEffect, useState } from 'react';
import { fetchBooks, deleteBook } from '../api/books';
import BookCard from '../components/BookCard';

export default function BookListPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBooks()
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
        <button className="btn-primary" onClick={() => alert('도서 추가 페이지로 이동')}>
          + 도서 추가
        </button>
      </div>

      {books.length === 0 ? (
        <p className="status-message">등록된 도서가 없습니다.</p>
      ) : (
        <ul className="book-list">
          {books.map((book) => (
            <li key={book.id}>
              <BookCard book={book} onDelete={handleDelete} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}