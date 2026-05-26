function Navbar({ setPage }) {
  return (
    <nav className="navbar">
      <h1 className="header">도서관리</h1>

      <div className="nav-menu">
        <button
          className="home"
          onClick={() => setPage("home")}
        >
          홈
        </button>

        <button
          className="list-header"
          onClick={() => setPage("list")}
        >
          도서 목록
        </button>

        <button
          className="addBook"
          onClick={() => setPage("create")}
        >
          새 도서 등록
        </button>
      </div>
    </nav>
  );
}

export default Navbar;