# 📚 AI 기반 도서 표지 생성 및 관리 서비스

## 📌 프로젝트 소개

사용자가 도서 제목과 저자, 내용을 입력하면 생성형 AI를 활용하여 도서 표지를 자동 생성하고 생성된 도서를 등록 · 조회 · 수정 · 삭제할 수 있는 웹 서비스입니다.

React 기반 프론트엔드와 json-server 기반 Mock API 서버를 활용하여 CRUD 기능을 구현하였으며 OpenAI API를 통해 사용자 맞춤형 표지 이미지를 생성할 수 있도록 개발하였습니다.

이미지를 생성할 때 카테고리별 생성 및 사용자 요구사항에 충족하는 표지 이미지를 생성할 수 있습니다.
---

# 👨‍💻 팀원 소개

| 이름 | 역할 |
|------|------|
| 이동현 | React CRUD 기능 구현
| 한유진 | UI/UX 기능 구현
| 김혜성 | AI 표지 생성 기능 구현
| 박민우 | React CRUD 기능 구현
| 홍다현 | UI/UX 기능 구현
| 서다은 | AI 표지 생성 기능 구현
| 김규민 | UI/UX 기능 구현
| 유혁재 | AI 표지 생성 기능 구현

---

# 🛠️ 기술 스택

## Front-End
- React
- Vite
- JavaScript
- CSS

## Back-End(Mock Server)
- json-server

## 협업
- Git
- GitHub

## AI
- OpenAI API

---

# 📂 프로젝트 구조

```bash
src
 ┣ components
 ┃ ┣ BookCard.jsx
 ┃ ┣ BookForm.jsx
 ┃ ┣ CoverImageGenerator.jsx
 ┃ ┗ Navbar.jsx
 ┣ pages
 ┃ ┣ BookCreatePage.jsx
 ┃ ┣ BookDetailPage.css
 ┃ ┣ BookDetailPage.jsx
 ┃ ┣ BookEditPage.jsx
 ┃ ┣ BookListPage.jsx
 ┃ ┗ HomePage.jsx
 ┣ api
 ┃ ┣ openai.jsx
 ┃ ┗ books.jsx
 ┣ App.jsx
 ┣ App.css
 ┣ index.css
 ┗ main.jsx
```

---

# 🚀 실행 방법

## 1️⃣ 프로젝트 설치

```bash
npm install
```

---

## 2️⃣ json-server 실행

```bash
npx json-server --watch db.json --port 3000
```

---

## 3️⃣ React 실행

```bash
npm run dev
```
http://localhost:5173/ 접근
---

# 📌 주요 기능

## ✅ 도서 CRUD 기능

- 도서 등록(Create)
- 도서 조회(Read)
- 도서 수정(Update)
- 도서 삭제(Delete)

json-server와 REST API 방식으로 연동하여 데이터를 관리하였습니다.

---

## ✅ AI 도서 표지 생성 기능

- 사용자가 입력한 제목 및 줄거리 기반 이미지 생성
- 생성형 AI 기반 표지 자동 생성
- 생성 이미지 미리보기 기능 제공
- 이미지 카테고리를 입력하여 사용자 맞춤 이미지 생성 기능 제공
- 사용자 요구사항에 맞춤 이미지 생성 기능 제공
- 생성된 이미지 3개 중 사용자 선택 가능 기능 제공
- 생성된 표지와 도서 데이터 함께 저장

---

## ✅ 공통 레이아웃 구성

- Header 및 Navigation 컴포넌트 분리
- 페이지 이동 시 공통 UI 유지
- 컴포넌트 기반 재사용 구조 설계

---

## ✅ 상태 관리

- React useState 기반 상태 관리
- useEffect를 활용한 데이터 로딩 처리
- 비동기 API 요청 처리 및 예외 상황 대응

---

# 🖼️ 화면 구성

## 📌 메인 화면

![alt text](image.png)

---

## 📌 도서 목록 화면

![alt text](image-4.png)

---

## 📌 도서 등록 화면

![alt text](image-1.png)

---

## 📌 AI 표지 생성 화면

![alt text](image-2.png)

---

## 📌 도서 수정 화면

![alt text](image-3.png)

---

# ⚙️ 구현 내용

## 📌 React 기반 컴포넌트 설계

페이지별 기능을 컴포넌트 단위로 분리하여 재사용성과 유지보수성을 높였습니다.

---

## 📌 REST API 연동

json-server를 활용하여 RESTful API 구조로 데이터를 관리하였으며 fetch API를 활용해 비동기 통신을 구현하였습니다.

---

## 📌 AI 이미지 생성 기능 구현

OpenAI API를 활용하여 사용자의 입력 데이터를 기반으로 프롬프트를 생성하고 이를 통해 도서 표지를 자동 생성하도록 구현하였습니다.

---

## 📌 GitHub 협업

각 브랜치를 생성하여 작업을 분리하였으며 Pull Request 기반 협업 방식을 적용하였습니다.

---

# ⚠️ 트러블 슈팅

---

## 📌 Git Merge Conflict 발생

### 문제
여러 팀원이 동일 파일을 수정하면서 merge conflict가 발생하였습니다.

### 해결
충돌 영역을 직접 수정하고 Pull Request 기반 병합 프로세스를 적용하여 해결하였습니다.

---

# 📈 기대 효과

- 생성형 AI 기반 콘텐츠 자동 생성 경험 제공
- React 기반 CRUD 구조 학습
- GitHub 협업 및 브랜치 전략 경험
- REST API 및 비동기 통신 구조 이해

---

# 📎 GitHub Repository

(https://github.com/LeeDongHyun1324/AI_-_4-)