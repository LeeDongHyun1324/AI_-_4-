function BookCreatePage() {function BookCreatePage새 도서 등록</h1>

      {/* 제목 입력 */}
      <input
        type="text"
        className="input-title"
        placeholder="도서 제목을 입력하세요"
      />

      {/* 내용 입력 */}
      <textarea
        className="input-content"
        placeholder="도서의 내용을 입력하세요"
      />

      {/* 버튼 영역 */}
      <button className="btn-cancel">취소</button>
      <button className="btn-submit">저장</button>
    </div>
  );
}

export default BookCreatePage;

  return (
    <div>
      {/* 페이지 제목 */}