import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CoverImageGenerator from "../components/CoverImageGenerator";

function BookDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  //도서 상세 조회
  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await fetch(`http://localhost:3000/books/${id}`);
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error("도서 상세 조회 실패:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBook();
  }, [id]);

  //표지 이미지 생성하고 상태 업데이트
  function handleImageGenerated(imageUrl) {
    setBook((prev) => ({ ...prev, coverImageUrl: imageUrl }));
  }

  //도서 삭제하고 목록으로 이동
  async function handleDelete() {
    await fetch(`http://localhost:3000/books/${id}`, { method: "DELETE" });
    navigate("/books");
  }

  if (loading) return <p>도서 정보를 불러오는 중입니다...</p>;
  if (!book) return <p>도서 정보를 찾을 수 없습니다.</p>;

  //출력
  return (
    <main>
      <h2 className="book-title">{book.title}</h2>

      {/*수정 페이지로 이동 및 삭제 버튼*/}
      <button className="btn-edit" onClick={() => navigate(`/books/${id}/edit`)}>수정</button>
      <button className="btn-delete" onClick={handleDelete}>삭제</button>

      <hr />
      {/* 이미지 생성 컴포넌트 */}
      <CoverImageGenerator book={book} onImageGenerated={handleImageGenerated} />

      <hr />
      {/* 표지 이미지 출력하기 */}
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

      <h3>책 내용</h3>
      <p className="book-content">{book.content}</p>

      <p className="createdAt">생성일: {book.createdAt}</p>
      <p className="updatedAt">수정일: {book.updatedAt}</p>
      
      {/* 목록으로 돌아가기 버튼 */}
      <button className="btn-back" onClick={() => navigate("/books")}>도서 목록으로 돌아가기</button>
    </main>
  );
}

export default BookDetailPage;