import '../App.css'
import BookCard from '../components/BookCard';

function BookListPage({ books }) {

    return (
        <div className="booklist-page">
            <ul className="book-list">
                {books.map(b => (
                    <BookCard
                        key={b.id}
                        id={b.id}
                        title={b.title}
                        author={b.author}
                        content={b.content}
                        coverImageUrl={b.coverImageUrl}
                        createdAt={b.createdAt}
                        updatedAt={b.updatedAt}
                    />
                ))}
            </ul>
        </div>
  );

} 

export default BookListPage