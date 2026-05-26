// OpenAI 이미지 생성 API 호출 → 바로 쓸 수 있는 Data URL(imageSrc)을 반환
export async function generateCoverImage(book, apiKey, quality, style, extraDetail) {
  const prompt = `
  아래 책 정보를 바탕으로 정면에서 바라본 2D 책 표지 이미지를 생성해줘.

  [책 제목] ${book.title}
  [책 내용] ${book.content}
  ${style !== 'none' ? `[스타일] ${style}` : ''}
  ${extraDetail ? `[추가 지시사항] ${extraDetail}` : ''}

  표지에는 제목을 포함하고, 책의 분위기를 잘 표현해줘.
  `.trim();

  const res = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-image-2',
      prompt,
      n: 1,
      size: '1024x1536',
      quality,
      output_format: 'png',
    }),
  });

  // 에러 응답 처리 (message가 없을 수 있어 fallback 추가)
  if (!res.ok) {
    let message = `OpenAI 요청 실패 (status: ${res.status})`;
    try {
      const errorData = await res.json();
      message = errorData.error?.message || message;
    } catch {
      // 응답 본문이 JSON이 아닐 수도 있음 → 기본 메시지 사용
    }
    throw new Error(message);
  }

  const data = await res.json();

  // b64_json 누락 방어: 없으면 깨진 imageSrc가 저장되는 걸 막음
  const b64Json = data.data?.[0]?.b64_json;
  if (!b64Json) {
    throw new Error('응답에 이미지 데이터(b64_json)가 없습니다.');
  }

  // imageSrc(Data URL)까지 만들어서 반환 → 컴포넌트는 그대로 쓰기만 하면 됨
  return `data:image/png;base64,${b64Json}`;
}