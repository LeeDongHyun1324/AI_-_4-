function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="header">도서관리</h1>

      <div className="nav-menu">
        <button className="home">홈</button>

        <button className="list-header">
          도서 목록
        </button>

        <button className="addBook">
          새 도서 등록
        </button>
      </div>
    </nav>
  );
}

export default Navbar;