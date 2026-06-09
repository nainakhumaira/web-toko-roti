-- Database schema untuk Bakery Naichi

-- 1. Tabel Pengguna (Admin & Pelanggan)
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'customer') DEFAULT 'customer',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Tabel Kategori Produk
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_kategori VARCHAR(50) NOT NULL,
    deskripsi TEXT
);

-- 3. Tabel Produk Utama
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT,
    nama_produk VARCHAR(100) NOT NULL,
    kategori VARCHAR(50) NOT NULL,
    deskripsi TEXT,
    harga DECIMAL(10, 2) NOT NULL,
    stok INT DEFAULT 0,
    gambar_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
);

-- 4. Tabel Variasi Produk
CREATE TABLE product_variants (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    nama_varian VARCHAR(100) NOT NULL,
    harga DECIMAL(10, 2) NOT NULL,
    gambar_url VARCHAR(255),
    stok INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- 5. Tabel Pesanan Utama
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    total_harga DECIMAL(10, 2) NOT NULL,
    status_pesanan ENUM('pending', 'processing', 'completed', 'cancelled') DEFAULT 'pending',
    alamat_pengiriman TEXT,
    metode_pengiriman ENUM('pickup', 'delivery') DEFAULT 'pickup',
    metode_pembayaran ENUM('cod', 'transfer', 'ovo') DEFAULT 'cod',
    tanggal_pesanan TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 6. Tabel Detail Pesanan
CREATE TABLE order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    product_id INT,
    variant_id INT,
    kuantitas INT NOT NULL,
    harga_satuan DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    FOREIGN KEY (variant_id) REFERENCES product_variants(id) ON DELETE SET NULL
);

-- ========================================================
-- DATA CONTOH (SEEDER DATA) UNTUK DIUJI COBA
-- ========================================================

INSERT INTO categories (nama_kategori, deskripsi) VALUES 
('Roti Putih', 'Roti putih lembut dan pastry ringan untuk sarapan dan cemilan'),
('Roti Coklat & Croissant', 'Roti berlapis dan coklat serta pilihan pastry premium'),
('Kue Kering', 'Kue lapis, donat, muffin, dan camilan manis lainnya'),
('Kue Tart', 'Kue tart elegan untuk perayaan dan hadiah spesial');

INSERT INTO products (category_id, nama_produk, kategori, deskripsi, harga, stok, gambar_url) VALUES 
(1, 'Roti Tawar Gulung', 'Roti Putih', 'Roti tawar gulung lembut dengan variasi isi premium.', 48000.00, 40, 'roti_tawar_gulung.jpg'),
(1, 'Baguette Perancis', 'Roti Putih', 'Baguette tradisional Prancis dengan kulit renyah.', 50000.00, 35, 'baguette.jpg'),
(1, 'Roti Gandum Sehat', 'Roti Putih', 'Roti gandum penuh serat untuk gaya hidup sehat.', 55000.00, 25, 'roti_gandum.jpg'),
(1, 'Roti Sourdough', 'Roti Putih', 'Roti sourdough fermentasi alami dengan rasa kompleks.', 60000.00, 20, 'roti_sourdough.jpg'),
(2, 'Croissant Butter', 'Roti Coklat & Croissant', 'Croissant lapis mentega premium dengan rasa khas.', 65000.00, 30, 'croissant.jpg'),
(2, 'Roti Putih Premium', 'Roti Coklat & Croissant', 'Roti putih premium yang lembut untuk sandwich dan roti isi.', 45000.00, 45, 'roti_putih.jpg'),
(3, 'Kue Lapis Legit', 'Kue Kering', 'Kue lapis legit dengan lapisan manis dan aroma rempah.', 75000.00, 20, 'kue_lapis_legit.jpg'),
(3, 'Donat Coklat Glazur', 'Kue Kering', 'Donat empuk dengan lapisan coklat manis.', 35000.00, 50, 'donat_coklat.jpg'),
(3, 'Muffin Blueberry', 'Kue Kering', 'Muffin lembut penuh blueberry segar.', 40000.00, 40, 'muffin_blueberry.jpg'),
(4, 'Kue Tart Coklat', 'Kue Tart', 'Kue tart coklat dengan Ganache lembut dan topping elegan.', 180000.00, 15, 'tart_coklat.jpg'),
(4, 'Kue Tart Red Velvet', 'Kue Tart', 'Kue tart red velvet dengan krim keju halus.', 190000.00, 12, 'tart_red_velvet.jpg'),
(4, 'Kue Tart Buah Segar', 'Kue Tart', 'Kue tart buah segar dengan buah musiman dan krim vanilla.', 200000.00, 12, 'tart_buah.jpg');

INSERT INTO product_variants (product_id, nama_varian, harga, stok, gambar_url) VALUES 
(1, 'Original', 48000.00, 40, 'roti_tawar_gulung_original.jpg'),
(1, 'Coklat Hazelnut', 52000.00, 35, 'roti_tawar_gulung_coklat.jpg'),
(1, 'Keju Mozzarella', 53000.00, 30, 'roti_tawar_gulung_keju.jpg'),
(2, 'Original', 50000.00, 35, 'baguette_original.jpg'),
(2, 'Garlic Herb', 55000.00, 25, 'baguette_garlic.jpg'),
(2, 'Keju Parmesan', 58000.00, 20, 'baguette_keju.jpg'),
(3, 'Original', 55000.00, 25, 'roti_gandum_original.jpg'),
(3, 'Kismis Apel', 59000.00, 20, 'roti_gandum_kismis.jpg'),
(3, 'Oat Madu', 60000.00, 18, 'roti_gandum_oat.jpg'),
(4, 'Classic', 60000.00, 20, 'roti_sourdough_classic.jpg'),
(4, 'Olive', 65000.00, 15, 'roti_sourdough_olive.jpg'),
(4, 'Keju Cheddar', 67000.00, 12, 'roti_sourdough_keju.jpg');
