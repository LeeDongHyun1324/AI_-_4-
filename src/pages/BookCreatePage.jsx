
// import { useState } from 'react';
// import "./BookCreatePage.css";

// function BookCreatePage() {
//     const [title, setTitle] = useState('');
//     const [author, setAuthor] = useState('');
//     const [content, setContent] = useState('');

//     const handleCancel = () =>{
//         setTitle('');
//         setAuthor('');
//     };

//     const handleSubmit = () =>{
//         const newBook = {
//             title,
//             content,
//         };
//         console.log("저장된 도서:", newBook);
//     };


//     return(
//         <div>
//             <h1 className = "page-title">새 도서 등록</h1>

//             <input
//                 type="text"
//                 className = "input-title"
//                 placeholder = "도서 제목을 입력하세요"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//             />          

//             <textarea
//             className="input-content"
//             placeholder="도서의 내용을 입력하세요"
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             />

//             <div className="button-group">

//                 <button className="btn-cancel" onClick={handleCancel}>
//                     취소
//                 </button>

//                 <button className="btn-submit" onClick={handleSubmit}>
//                     저장
//                 </button>

//             </div>
//         </div>
//     );
// }

        
// export default BookCreatePage;

//창버전
 
import BookForm from "../components/BookForm";
import { createBook } from "../api/books";
 
function BookCreatePage({ onNavigate }) {
  const handleCreate = async (bookData) => {
      // 제목 검사
      if (!bookData.title.trim()) {
        alert("도서 제목을 입력해주세요.");
        return;
      }
 
      // 저자 검사
      if (!bookData.author.trim()) {
        alert("저자를 입력해주세요.");
        return;
      }
 
      // 내용 검사
      if (!bookData.content.trim()) {
        alert("도서 내용을 입력해주세요.");
        return;
      }
     
      try {
        const newBook = {
          ...bookData,
          coverImageUrl: "",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
 
        await createBook(newBook);
 
        alert("도서가 등록되었습니다.");
 
        onNavigate("list");
      } catch (err) {
        alert(err.message);
      }
    };
 
  const handleCancel = () => {
    onNavigate("list");
  };
 
  return (
    <BookForm
      onSubmit={handleCreate}
      onCancel={handleCancel}
      submitText="저장"
    />
  );
}
 
export default BookCreatePage;