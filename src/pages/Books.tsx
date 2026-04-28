import { useEffect, useState } from "react";
import { api } from "../api/api";
import BookCard from "../components/BookCard";

export type Book = {
  id: string;
  author: string;
  title: string;
  year?: string;
  image: string;
  genre: string;
  summary?: string;
};

const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("all");
  const [year, setYear] = useState("");

  useEffect(() => {
    api.get<Book[]>("/books").then((res) => setBooks(res.data));
  }, []);


  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    const matchesGenre =
      genre === "all" ? true : book.genre === genre;

    const matchesYear =
      year ? book.year?.toString() === year : true;

    return matchesSearch && matchesGenre && matchesYear;
  });


  const genres = ["all", ...new Set(books.map((b) => b.genre))];

  return (
    <div className="p-6 space-y-6">


      <div className="bg-blue-950 p-4 rounded-2xl text-white flex flex-col md:flex-row gap-3">


        <input
          type="text"
          placeholder="Kitap veya yazar ara..."
          className="input input-bordered w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />


        <select
          className="select select-bordered w-full"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          {genres.map((g) => (
            <option key={g} value={g}>
              {g === "all" ? "Tüm Türler" : g}
            </option>
          ))}
        </select>


        <input
          type="text"
          placeholder="Yıl"
          className="input input-bordered w-full"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>

  
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))
        ) : (
          <p className="text-white">Kitap bulunamadı</p>
        )}
      </ul>
    </div>
  );
};

export default Books;