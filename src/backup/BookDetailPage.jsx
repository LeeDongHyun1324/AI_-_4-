import { useEffect, useState } from "react";
import CoverImageGenerator from "../components/CoverImageGenerator";

function BookDetailPage() {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  //도서 상세 조회
  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await fetch("http://localhost:3001/books/3"); //현재 db.json파일 1개만 추가해놓은 상태로 하드코딩. 배포 시 http://localhost:3000/books/${id}로 변경
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error("도서 상세 조회 실패:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchBook();
  }, []);

  //AI 표지 이미지 생성 후 상태 업데이트
  function handleImageGenerated(imageUrl) {
    setBook((prev) => ({ ...prev, coverImageUrl: imageUrl }));
  }

  if (loading) return <p>도서 정보를 불러오는 중입니다...</p>;
  if (!book) return <p>도서 정보를 찾을 수 없습니다.</p>;

  return (
    <main>
      {/* 도서 제목 */}
      <h2 className="book-title">{book.title}</h2>

      {/* 수정/삭제 버튼 */}
      <button className="btn-edit">수정</button>
      <button className="btn-delete">삭제</button>

      <hr />
      {/* AI 표지 생성 컴포넌트 */}
      <CoverImageGenerator book={book} onImageGenerated={handleImageGenerated} />

      <hr />

      {/* 표지 이미지 출력 */}
      {book.coverImageUrl ? (
        <img
          className="book-cover"
          src={book.coverImageUrl}
          alt={`${book.title} 표지`}
          width="250"
        />
      ) : (
        <p className="book-cover">표지 이미지 없음</p>
      )}

      {/* 도서 상세 정보 */}
      <h3>책 내용</h3>
      <p className="book-content">{book.content}</p>

      <p className="createdAt">생성일: {book.createdAt}</p>
      <p className="updatedAt">수정일: {book.updatedAt}</p>
      
      {/* 목록으로 돌아가기 버튼 */}
      <button className="btn-back">도서 목록으로 돌아가기</button>
    </main>
  );
}

export default BookDetailPage;