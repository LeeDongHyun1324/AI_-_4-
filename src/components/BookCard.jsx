export default function BookCard({ book, onDelete }) {
  return (
    <div className="book-card">
      {book.coverImageUrl ? (
        <img className="book-card-cover" src={book.coverImageUrl} alt={book.title} />
      ) : (
        <div className="book-card-cover book-card-cover--empty" />
      )}
      <div className="book-card-info">
        <h3 className="book-card-title">{book.title}</h3>
        <p className="book-card-author">{book.author}</p>
      </div>
      <button className="book-card-delete" onClick={() => onDelete(book.id)}>
        삭제
      </button>
    </div>
  );
}
