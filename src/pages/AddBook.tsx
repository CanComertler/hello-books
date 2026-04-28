import { Link, useNavigate } from "react-router";
import { api } from "../api/api";
import { type Book } from "./Books";


const AddBook = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const book = Object.fromEntries(formData.entries()) as Book;

    if (book.title.length < 2) {
      alert("Kitap adı 2 karakterden kısa olamaz");
      return;
    }

    api.post<Book>("/books", book).then(() => {
      navigate("/books");
    });
  };

  return (
    <div className="w-full max-w-md">
      <form
        onSubmit={handleSubmit}
        className="bg-blue-950 shadow-xl rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Kitap Ekle</h2>

        <div className="mb-4">
          <label className="block mb-1">Kitap Adı</label>
          <input
            name="title"
            type="text"
            className="input input-bordered w-full"
            placeholder="Kitap adını giriniz"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Yıl</label>
          <input
            name="year"
            type="text"
            className="input input-bordered w-full"
            placeholder="Yıl giriniz"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Yazar</label>
          <input
            name="author"
            type="text"
            className="input input-bordered w-full"
            placeholder="Yazar adı"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1">Kapak URL</label>
          <input
            name="image"
            type="text"
            className="input input-bordered w-full"
            placeholder="https://..."
          />
        </div>

        <div className="flex gap-2">
          <button className="btn btn-primary flex-1">Ekle</button>
          <Link to="/books" className="btn btn-error flex-1">
            İptal
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddBook