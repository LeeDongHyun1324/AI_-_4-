function BookCreatePage() {
  return (
    <div>
      <h1 className="page-title">새 도서 등록</h1>

      <input
        type="text"
        className="input-title"
        placeholder="도서명을 입력하세요"
      />

      <textarea
        className="input-content"
        placeholder="도서의 내용을 입력하세요"
      />

      <button className="btn-cancel">취소</button>
      <button className="btn-submit">저장</button>
    </div>
  );
}

export default BookCreatePage;