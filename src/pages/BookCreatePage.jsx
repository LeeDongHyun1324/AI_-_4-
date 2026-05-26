import "./BookCreatePage.css";
import BookForm from "../components/BookForm";

function BookCreatePage() {
  const handleCreate = (bookData) => {
    console.log("생성:", bookData);
  };

  const handleCancel = () => {
    console.log("취소");
  };

  return (
    <BookForm
      onSubmit={handleCreate}
      onCancel={handleCancel}
      submitText="저장"
    />
  );
}

export default BookCreatePage;