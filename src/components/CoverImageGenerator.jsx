import { useState } from 'react';
import { generateCoverImage } from '../api/openai';
 
export default function CoverImageGenerator({ book, onImageGenerated }) {
  const [selectedStyle, setSelectedStyle] = useState('none');
  const [extraDetail, setExtraDetail] = useState('');
  const [userApiKey, setUserApiKey] = useState('');
  const [selectedQuality, setSelectedQuality] = useState('medium');
  const [loading, setLoading] = useState(false);
 
  // AI 표지 이미지 생성
  async function handleGenerate() {
    // 방어 코드: API 키 없으면 중단
    if (!userApiKey) {
      alert('OpenAI API Key를 먼저 입력해주세요.');
      return;
    }
 
    setLoading(true);
    try {
      // 1~2단계: OpenAI 호출 → Data URL 받기 (에러 처리는 openai.jsx 내부에서)
      // (b64Json 추출/방어/에러 처리는 openai.js 안에서 끝남)
      const imageSrc = await generateCoverImage(book, userApiKey, selectedQuality, selectedStyle, extraDetail);
 
      // 4단계: 생성된 이미지 URL을 db.json에 PATCH로 저장
      const patchRes = await fetch(`http://localhost:3000/books/${book.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ coverImageUrl: imageSrc }),
      });
 
      // PATCH 실패도 체크
      if (!patchRes.ok) {
        throw new Error('표지 저장에 실패했습니다.');
      }
 
      // 5단계: 부모 컴포넌트에 이미지 URL 전달 (화면 갱신)
      onImageGenerated(imageSrc);
    } catch (err) {
      console.error(err);
      alert(err.message);
    } finally {
      // 성공/실패 상관없이 로딩 해제
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

      {/* 생성 모델 선택 (고정) */}
      <label>생성 모델:</label>
      <select className="select-model" value="gpt-image-2" disabled>
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

      {/* 표지 스타일 선택 */}
      <label>표지 스타일:</label>
      <select
        className="select-style"
        value={selectedStyle}
        onChange={(e) => setSelectedStyle(e.target.value)}
      >
        <option value="none">기본 (지정 안 함)</option>
        <option value="수채화풍, 부드러운 색감">수채화풍</option>
        <option value="미니멀, 심플한 디자인">미니멀</option>
        <option value="빈티지, 클래식한 느낌">빈티지</option>
        <option value="다채롭고 화려한 일러스트">화려한 일러스트</option>
        <option value="어둡고 무게감 있는 분위기">다크/무게감</option>
      </select>

      <br />

      {/* 추가 지시사항 입력 */}
      <label>추가 지시사항:</label>
      <textarea
        className="input-prompt"
        placeholder="예) 고양이를 주인공으로, 파란색 계열로..."
        value={extraDetail}
        onChange={(e) => setExtraDetail(e.target.value)}
      />

      <br />

      {/* 이미지 생성 버튼 */}
      <button type="button" onClick={handleGenerate} disabled={loading}>
        {loading ? '생성 중...' : 'AI 표지 생성'}
      </button>
    </section>
  );
}
 