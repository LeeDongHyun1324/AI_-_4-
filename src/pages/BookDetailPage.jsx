import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CoverImageGenerator from "../components/CoverImageGenerator";

function BookDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

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

  function handleImageGenerated(imageUrl) {
    setBook((prev) => ({ ...prev, coverImageUrl: imageUrl }));
  }

  async function handleDelete() {
    await fetch(`http://localhost:3000/books/${id}`, { method: "DELETE" });
    navigate("/books");
  }

  if (loading) return <p>도서 정보를 불러오는 중입니다...</p>;
  if (!book) return <p>도서 정보를 찾을 수 없습니다.</p>;

  return (
    <main>
      <h2 className="book-title">{book.title}</h2>

      <button className="btn-edit" onClick={() => navigate(`/books/${id}/edit`)}>수정</button>
      <button className="btn-delete" onClick={handleDelete}>삭제</button>

      <hr />

      <CoverImageGenerator book={book} onImageGenerated={handleImageGenerated} />

      <hr />

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

      <button className="btn-back" onClick={() => navigate("/books")}>도서 목록으로 돌아가기</button>
    </main>
  );
}

export default BookDetailPage;