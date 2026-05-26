// OpenAI 이미지 생성 API 호출
export async function fetchCoverImage(apiKey, prompt, quality) {
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

  // API 응답 실패 시 에러 메시지 추출
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error?.message);
  }

  return res.json();
}