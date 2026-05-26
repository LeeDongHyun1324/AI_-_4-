function BookEditPage() {
  return (
    <div className="edit-container">
      <h1 className="page-title">도서 수정</h1>

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
    </div>
  );
}

export default BookEditPage;