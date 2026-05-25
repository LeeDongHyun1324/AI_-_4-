import '../App.css'
import BookCard from '../components/BookCard';

function BookListPage({ books, onDelete }) {

    return (
        <div className="booklist-page">
            <ul className="book-list">
                {books.map(b => (
                    <BookCard
                        key={b.id}
                        book={b}
                        onDelete={onDelete}
                    />
                ))}
            </ul>
        </div>
  );

} 

export default BookListPage