# 📚 Books App (React + JSON Server)

> 🇹🇷 Türkçe + 🇬🇧 English documentation

---

# 🇹🇷 Türkçe

## 📌 Proje Hakkında

Bu proje, React kullanılarak geliştirilmiş basit ama modern bir kitap yönetim uygulamasıdır.  
Kullanıcılar kitap ekleyebilir, silebilir, düzenleyebilir ve filtreleyebilir.

---

## 🚀 Özellikler

- 📖 Kitap listeleme
- ➕ Kitap ekleme
- 🗑️ Silme (geri sayımlı güvenli silme)
- ✏️ Düzenleme
- 🔎 Arama sistemi (kitap & yazar)
- 🎯 Tür filtresi (genre)
- 📅 Yıla göre filtreleme
- 🖼️ Kitap kapak görselleri
- 📱 Responsive tasarım

---

## 🧠 Kullanılan Teknolojiler

| Teknoloji | Açıklama |
|-----------|----------|
| React ⚛️ | UI geliştirme |
| TypeScript 🟦 | Tip güvenliği |
| React Router 🚏 | Sayfa yönlendirme |
| Axios 🌐 | API istekleri |
| JSON Server 🗄️ | Fake backend |
| TailwindCSS 🎨 | Stil sistemi |

---

## 📂 Proje Yapısı
src/
├── components
├── pages
├── api
├── layouts
└── types


---

## ⚙️ Kurulum

```bash
git clone https://github.com/kullanici/books-app
cd books-app
npm install
npm run dev

npx json-server db.json --watch --port 3000


🧩 Özellik Detayı
🗑️ Güvenli Silme Sistemi
3 saniyelik geri sayım
yanlışlıkla silmeyi engeller
kullanıcı onayı zorunlu


📈 Geliştirme Fikirleri
🔥 Dark/Light mode
🔥 Favori kitap sistemi
🔥 Backend (Node.js + MongoDB)
🔥 Auth sistemi (login/register)




🇬🇧 English
📌 About the Project

This is a simple but modern book management application built with React.
Users can add, delete, edit, and filter books.

🚀 Features
📖 Book listing
➕ Add new books
🗑️ Safe delete with countdown
✏️ Edit books
🔎 Search system (title & author)
🎯 Genre filtering
📅 Year filtering
🖼️ Book cover images
📱 Responsive design
🧠 Tech Stack
Technology	Description
React ⚛️	UI library
TypeScript 🟦	Type safety
React Router 🚏	Routing
Axios 🌐	API requests
JSON Server 🗄️	Fake backend
TailwindCSS 🎨	Styling
📂 Project Structure
src/
 ├── components
 ├── pages
 ├── api
 ├── layouts
 └── types
⚙️ Installation
git clone https://github.com/username/books-app
cd books-app
npm install
npm run dev

Run JSON server:

npx json-server db.json --watch --port 3000
🧩 Feature Highlight
🗑️ Safe Delete System
3-second countdown
prevents accidental deletion
requires user confirmation
📈 Future Improvements
🔥 Dark / Light mode
🔥 Favorite books system
🔥 Backend with Node.js + MongoDB
🔥 Authentication system
⭐ License

This project is for educational purposes.




