import { Link } from "react-router";
import type { Book } from "../pages/Books";

type Props = {
  book: Book;
};

const BookCard = ({ book }: Props) => {
  return (
    <li className="bg-blue-950 text-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition">
      
      {/* Kapak */}
      <img
        src={book.image}
        alt={book.title}
        className="w-full h-64 object-cover"
      />

      {/* İçerik */}
      <div className="p-4">
        <h3 className="text-lg font-bold line-clamp-1">{book.title}</h3>
        <p className="text-sm opacity-80">{book.author}</p>
        <p className="text-xs opacity-60 mb-3">
          {book.year} • {book.genre}
        </p>

        {/* Butonlar */}
        <div className="flex gap-2">
          <Link to={`/books/${book.id}`} className="btn btn-sm flex-1">
            Detay
          </Link>
          <Link to={`/books/${book.id}/edit`} className="btn btn-info btn-sm">
            Düzenle
          </Link>
          <Link to={`/books/${book.id}/delete`} className="btn btn-error btn-sm">
            Sil
          </Link>
        </div>
      </div>
    </li>
  );
};

export default BookCard;