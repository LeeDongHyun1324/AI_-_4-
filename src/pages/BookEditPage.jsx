function BookEditPage({ book, onCancel, onSuccess }) {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [content, setContent] = useState(book.content);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await updateBook(book.id, { title, author, content });
      alert('성공적으로 수정되었습니다.');
      onSuccess();
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className="edit-container">
      <h1 className="page-title">도서 수정</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            className="input-title"
            placeholder="수정할 제목"
          />
        </div>

        <div className="input-group">
          <textarea
            className="input-content"
            placeholder="수정할 내용"
          ></textarea>
        </div>

        <div className="button-group">
          <button className="btn-submit">저장</button>
          <button className="btn-cancel">취소</button>
        </div>
      </form>
    </div>
  );
}

export default BookEditPage;