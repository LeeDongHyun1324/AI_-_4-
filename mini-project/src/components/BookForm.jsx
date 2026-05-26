import "../App.css";

function BookForm() {
  return (
    <form className="write-form">

      <input
        type="text"
        className="input-title"
        placeholder="도서명을 입력하세요"
      />

      <textarea
        className="input-content"
        placeholder="도서의 내용을 입력하세요"
      ></textarea>

      <div className="button-group">
        <button type="submit" className="btn-submit">저장</button>
        <button type="button" className="btn-cancel">취소</button>
      </div>

    </form>
  );
}

export default BookForm;