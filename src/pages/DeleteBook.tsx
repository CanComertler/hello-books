import { useEffect, useState } from "react";
import type { Book } from "./Books";
import { useParams, useNavigate, Link } from "react-router";
import { api } from "../api/api";

const DeleteBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null);

  const [countdown, setCountdown] = useState<number | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    api.get<Book>(`/books/${id}`).then((res) => setBook(res.data));
  }, [id]);


  const startCountdown = () => {
    setCountdown(3);
  };


  useEffect(() => {
    if (countdown === null) return;

    if (countdown === 0) return;

    const timer = setTimeout(() => {
      setCountdown((prev) => (prev !== null ? prev - 1 : 0));
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  const handleDelete = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (countdown !== 0) return;

    api.delete(`/books/${id}`).then(() => {
      navigate("/books");
    });
  };

  if (!book) return <p className="p-6">Yükleniyor...</p>;

  const isReady = countdown === 0;

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200 p-4">
      <div className="w-full max-w-2xl bg-blue-950 text-white rounded-2xl shadow-2xl overflow-hidden">


        <div className="flex flex-col md:flex-row">
          <img
            src={book.image}
            alt={book.title}
            className="w-full md:w-1/3 h-80 object-cover"
          />

          <div className="p-6 flex-1">
            <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
            <p className="opacity-80">{book.author}</p>
            <p className="text-sm opacity-60 mb-4">
              {book.year} • {book.genre}
            </p>

            <p className="text-sm font-bold text-red-300">
              ⚠ Bu kitabı silmek üzeresin. İşlem geri alınamaz.
            </p>
          </div>
        </div>


        <div className="bg-black/30 p-5 flex flex-col md:flex-row gap-3 items-center justify-between">


          <span className="text-m text-red-400">
            {countdown === null && (
              <span className="text-m text-red-400">
                Silme işlemi hazır değil
              </span>
            )}
          </span>

          <div className="flex gap-3">

            <button
              onClick={startCountdown}
              className="btn btn-warning"
              disabled={countdown !== null}
            >
              Silmeyi Başlat
            </button>

            <form onSubmit={handleDelete}>
              <button
                type="submit"
                className="btn btn-error"
                disabled={!isReady}
              >
                {isReady ? "Evet, Sil" : `Bekle..${countdown ?? 3}`}
              </button>
            </form>

            <Link to="/books" className="btn btn-outline">
              İptal
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteBook;