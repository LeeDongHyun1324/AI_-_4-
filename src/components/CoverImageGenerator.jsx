import { useState } from 'react';

export default function CoverImageGenerator({ book, onImageGenerated }) {
  const [userApiKey, setUserApiKey] = useState('');
  const [selectedQuality, setSelectedQuality] = useState('medium');
  const [loading, setLoading] = useState(false);

  // AI 표지 이미지 생성
  async function handleGenerate() {
    setLoading(true);
    
    //책 정보를 바탕으로 이미지 생성 프롬프트
    const prompt = `책 제목: ${book.title}\n책 내용: ${book.content}\n위 내용을 바탕으로 정면으로 바라본 2D 책 표지 이미지를 생성해줘.`;
    
    //OpenAI 이미지 생성 API 호출
    const res = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userApiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-image-2',
        prompt,
        n: 1,
        size: '1024x1536',
        quality: selectedQuality,
        output_format: 'png',
      }),
    });

    //base64 이미지 데이터 추출
    const data = await res.json();
    const b64Json = data.data?.[0]?.b64_json;
    const imageSrc = `data:image/png;base64,${b64Json}`;

    //생성된 이미지 URL을 db.json에 업데이트
    await fetch(`http://localhost:3000/books/${book.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ coverImageUrl: imageSrc }),
    });

    //부모 컴포넌트에 이미지 URL 전달
    onImageGenerated(imageSrc);
    setLoading(false);
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
      <select className="select-model" value="gpt-image-2" readOnly>
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