import { Link } from "react-router";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-6">
      
      <div className="text-center bg-blue-950 text-white p-10 rounded-2xl shadow-2xl max-w-xl w-full">

    
        <h1 className="text-4xl font-bold mb-3">
          📚 Kitap Kütüphanesine 📚
        </h1>
        <h2 className="text-4xl font-bold mb-3">
          Hoş Geldin 
        </h2>

        {/* AÇIKLAMA */}
        <p className="text-sm opacity-80 mb-6">
          Kitapları ekle, düzenle, sil ve filtrele. Basit ama güçlü bir yönetim sistemi.
        </p>

        {/* BUTONLAR */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">

          <Link to="/books" className="btn btn-primary">
            Kitapları Gör
          </Link>

          <Link to="/books/add" className="btn btn-outline">
            Kitap Ekle
          </Link>

        </div>

      </div>
    </div>
  );
};

export default Home;