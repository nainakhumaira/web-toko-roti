-- Database schema untuk Web Toko Roti

-- 1. Tabel Pengguna (Admin & Pelanggan)
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'customer') DEFAULT 'customer',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Tabel Kategori Roti
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_kategori VARCHAR(50) NOT NULL,
    deskripsi TEXT
);

-- 3. Tabel Produk (Terhubung ke Kategori)
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT,
    nama_produk VARCHAR(100) NOT NULL,
    deskripsi TEXT,
    harga DECIMAL(10, 2) NOT NULL,
    stok INT DEFAULT 0,
    gambar_url VARCHAR(255),
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
);

-- 4. Tabel Pesanan Utama (Terhubung ke User)
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    total_harga DECIMAL(10, 2) NOT NULL,
    status_pesanan ENUM('pending', 'processing', 'completed', 'cancelled') DEFAULT 'pending',
    tanggal_pesanan TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 5. Tabel Detail Pesanan (Menghubungkan Pesanan dengan Banyak Produk)
CREATE TABLE order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    product_id INT,
    kuantitas INT NOT NULL,
    harga_satuan DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- ========================================================
-- DATA CONTOH (SEEDER DATA) UNTUK DIUJI COBA
-- ========================================================

INSERT INTO categories (nama_kategori, deskripsi) VALUES 
('Artisan Sourdough', 'Roti fermentasi alami dengan kerak renyah dan bagian dalam yang lembut'),
('Viennoiserie & Pastry', 'Kue berbahan dasar puff pastry yang renyah dan kaya akan mentega Prancis');

INSERT INTO products (category_id, nama_produk, deskripsi, harga, stok, gambar_url) VALUES 
(1, 'Classic Sourdough Boule', 'Roti sourdough klasik seberat 500g dengan fermentasi 24 jam.', 45000.00, 15, 'sourdough.jpg'),
(2, 'Butter Croissant', 'Croissant berlapis-lapis menggunakan mentega Prancis premium.', 28000.00, 30, 'croissant.jpg'),
(2, 'Chocolate Danish', 'Pastry renyah dengan isian cokelat hitam Belgia yang pekat.', 32000.00, 20, 'chocolate_danish.jpg');
