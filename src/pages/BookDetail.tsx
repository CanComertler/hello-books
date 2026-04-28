import { useEffect, useState } from "react";
import type { Book } from "./Books";
import { useParams, Link } from "react-router";
import { api } from "../api/api";

const BookDetail = () => {
  const { id } = useParams();

  const [book, setBook] = useState<Book | null>(null);
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    // seçili kitap
    api.get<Book>(`/books/${id}`).then((res) => setBook(res.data));

    // tüm liste (prev/next için)
    api.get<Book[]>("/books").then((res) => setBooks(res.data));
  }, [id]);

  if (!book) return <p className="p-6">Yükleniyor...</p>;

  // 🔥 prev / next hesaplama
  const index = books.findIndex((b) => b.id === book.id);
  const prev = books[index - 1];
  const next = books[index + 1];

  return (
    <div className="p-6 flex justify-center">
      <div className="bg-blue-950 text-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden">

        {/* ÜST ALAN */}
        <div className="flex flex-col md:flex-row">
          <img
            src={book.image}
            alt={book.title}
            className="w-full md:w-1/3 h-80 md:h-auto object-cover"
          />

          <div className="p-6 flex-1">
            <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
            <p className="opacity-80">{book.author}</p>
            <p className="text-sm opacity-60 mb-4">
              {book.year} • {book.genre}
            </p>

            <p className="text-sm leading-relaxed">
              {book.summary || "Bu kitap için henüz özet eklenmemiş."}
            </p>
          </div>
        </div>

        <div className="flex justify-between p-4 border-t border-white/10">
          {prev ? (
            <Link to={`/books/${prev.id}`} className="btn btn-outline">
              ← Önceki
            </Link>
          ) : <div />}

          {next ? (
            <Link to={`/books/${next.id}`} className="btn btn-outline">
              Sonraki →
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  );
};

export default BookDetail;