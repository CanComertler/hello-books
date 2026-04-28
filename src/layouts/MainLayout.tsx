import { Outlet } from "react-router";
import Navbar from "../components/Navbar";


const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <Outlet />
      </main>
      <footer className="text-center p-4">2026 - Books</footer>
    </div>
  );
};
export default MainLayout;