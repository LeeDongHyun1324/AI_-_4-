const BASE_URL = 'http://localhost:3001';

export async function fetchBooks() {
  const res = await fetch(`${BASE_URL}/books`);
  if (!res.ok) throw new Error('도서 목록을 불러오는데 실패했습니다.');
  return res.json();
}

export async function deleteBook(id) {
  const res = await fetch(`${BASE_URL}/books/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('도서 삭제에 실패했습니다.');
}
