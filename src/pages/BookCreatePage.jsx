
import { useState } from 'react';
import "./BookCreatePage.css";

function BookCreatePage() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    const handleCancel = () =>{
        setTitle('');
        setAuthor('');
    };

    const handleSubmit = () =>{
        const newBook = {
            title,
            content,
        };
        console.log("저장된 도서:", newBook);
    };


    return(
        <div>
            <h1 className = "page-title">새 도서 등록</h1>

            <input
                type="text"
                className = "input-title"
                placeholder = "도서 제목을 입력하세요"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />          

            <textarea
            className="input-content"
            placeholder="도서의 내용을 입력하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            />

            <div className="button-group">

                <button className="btn-cancel" onClick={handleCancel}>
                    취소
                </button>

                <button className="btn-submit" onClick={handleSubmit}>
                    저장
                </button>

            </div>
        </div>
    );
}

        
export default BookCreatePage;