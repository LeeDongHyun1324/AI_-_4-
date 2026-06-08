import { updateBook } from '../api/books';
import BookForm from '../components/BookForm';

function BookEditPage({ book, onCancel, onSuccess }) {
  
  const handleEdit = async (bookData) => {
    if (!bookData.title.trim()) {
      alert("도서 제목을 입력해주세요.");
      return;
    }

    if (!bookData.author.trim()) {
      alert("저자를 입력해주세요.");
      return;
    }

    if (!bookData.content.trim()) {
      alert("도서 내용을 입력해주세요.");
      return;
    }

    try {
      const updatedBookData = {
        ...book,
        ...bookData,
        updatedAt: new Date().toLocaleString("sv-SE", {
          timeZone: "Asia/Seoul",
        }),
      };

      await updateBook(book.id, updatedBookData);
      
      alert('성공적으로 수정되었습니다.');
      onSuccess();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <BookForm
      initialTitle={book?.title}
      initialAuthor={book?.author}
      initialContent={book?.content}
      onSubmit={handleEdit}
      onCancel={onCancel}
      submitText="수정 완료"
    />
  );
}

export default BookEditPage;