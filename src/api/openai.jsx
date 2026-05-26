import { useState } from 'react';
import { fetchCoverImage } from './openai.jsx';

export default function CoverImageGenerator({ book, onImageGenerated }) {
  const [userApiKey, setUserApiKey] = useState('');
  const [selectedQuality, setSelectedQuality] = useState('medium');
  const [loading, setLoading] = useState(false);

  //AI 표지 이미지 생성
  async function handleGenerate() {
    //API 키 입력 확인
    if (!userApiKey) {
      alert('API 키를 입력하세요');
      return;
    }

    setLoading(true);

    try {
      //책 정보를 바탕으로 이미지 생성 프롬프트
      const prompt = `책 제목: ${book.title}\n책 내용: ${book.content}\n위 내용을 바탕으로 정면으로 바라본 2D 책 표지 이미지를 생성해줘.`;

      // OpenAI 호출 → imageSrc(Data URL) 바로 반환받음
      // (b64Json 추출/방어/에러 처리는 openai.js 안에서 끝남)
      const imageSrc = await fetchCoverImage(userApiKey, prompt, selectedQuality);
      
      //생성된 이미지 URL을 db.json에 업데이트 
      // 생성된 이미지 URL을 db.json에 PATCH로 저장
      const patchRes = await fetch(`http://localhost:3000/books/${book.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ coverImageUrl: imageSrc }),
      });
 
      // PATCH 응답 체크: 저장 실패도 잡기
      if (!patchRes.ok) {
        throw new Error('표지 저장에 실패했습니다.');
      }

      //부모 컴포넌트에 이미지 URL 전달
      onImageGenerated(imageSrc);

    } catch (error) {
      alert(`이미지 생성 실패: ${error.message}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section>
      <h3>AI 표지 생성</h3>

      {/* API키 입력 */}
      <label>OpenAI API Key:</label>
      <input
        className="input-apikey"
        type="password"
        placeholder="sk-xxxxxxxxxxxxxxxxxxxxxxxx"
        value={userApiKey}
        onChange={(e) => setUserApiKey(e.target.value)}
      />

      <br />

      {/* 생성 모델 선택 (고정) - select- disabled 사용*/}
      <label>생성 모델:</label>
      <select className="select-model" value="gpt-image-2"  disabled>
        <option value="gpt-image-2">GPT Image 2 (1024x1536)</option>
      </select>

      <br />

      {/* 이미지 품질 선택 */}
      <label>품질:</label>
      <select
        className="select-quality"
        value={selectedQuality}
        onChange={(e) => setSelectedQuality(e.target.value)}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <br />

      {/* 이미지 생성 버튼 */}
      <button type="button" onClick={handleGenerate} disabled={loading}>
        {loading ? '생성 중...' : 'AI 표지 생성'}
      </button>
    </section>
  );
}