import { BrowserRouter, Route, Routes } from "react-router";

import Home from "../pages/Home";
import Books from "../pages/Books";
import BookDetail from "../pages/BookDetail";
import AddBook from "../pages/AddBook";
import EditBook from "../pages/EditBook";
import DeleteBook from "../pages/DeleteBook";
import MainLayout from "../layouts/MainLayout";

const MyRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/add" element={<AddBook />} />
          <Route path="/books/:id" element={<BookDetail />} />
          <Route path="/books/:id/edit" element={<EditBook />} />
          <Route path="/books/:id/delete" element={<DeleteBook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default MyRouter;