// =====================================================
// PRODUCT DATA
// =====================================================

const products = [
    {
        id: 1,
        title: "Roti Putih Premium",
        description: "Roti putih lembut dengan tekstur sempurna",
        price: 45000,
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop",
        category: "roti-putih",
        rating: 4.8,
        reviews: 156,
        badges: ["Best Seller"]
    },
    {
        id: 2,
        title: "Croissant Butter",
        description: "Croissant renyah dengan lapisan mentega yang lezat",
        price: 65000,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop",
        category: "roti-coklat",
        rating: 4.9,
        reviews: 234,
        badges: ["Best Seller", "Gluten-Free"]
    },
    {
        id: 3,
        title: "Roti Gandum Sehat",
        description: "Roti gandum utuh kaya serat dan nutrisi",
        price: 55000,
        image: "https://images.unsplash.com/photo-1618883713919-c52a13906bfd?w=400&h=400&fit=crop",
        category: "roti-coklat",
        rating: 4.7,
        reviews: 89,
        badges: ["Gluten-Free"]
    },
    {
        id: 4,
        title: "Kue Lapis Legit",
        description: "Kue tradisional berlapis dengan rasa kaya dan nikmat",
        price: 75000,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop",
        category: "kue-kering",
        rating: 4.9,
        reviews: 167,
        badges: ["Best Seller"]
    },
    {
        id: 5,
        title: "Donat Coklat Glazur",
        description: "Donat empuk dengan glazur coklat yang menggugah selera",
        price: 35000,
        image: "https://images.unsplash.com/photo-1495003542422-01d4ec16b894?w=400&h=400&fit=crop",
        category: "kue-kering",
        rating: 4.6,
        reviews: 312,
        badges: []
    },
    {
        id: 6,
        title: "Baguette Perancis",
        description: "Baguette autentik dengan kulit renyah dan dalam empuk",
        price: 50000,
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop",
        category: "roti-putih",
        rating: 4.8,
        reviews: 198,
        badges: []
    },
    {
        id: 7,
        title: "Roti Tawar Gulung",
        description: "Roti tawar premium dengan tekstur gulung yang unik",
        price: 48000,
        image: "https://images.unsplash.com/photo-1618883713919-c52a13906bfd?w=400&h=400&fit=crop",
        category: "roti-putih",
        rating: 4.7,
        reviews: 145,
        badges: ["Gluten-Free"]
    },
    {
        id: 8,
        title: "Muffin Blueberry",
        description: "Muffin empuk dengan berry asli yang segar",
        price: 40000,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop",
        category: "kue-kering",
        rating: 4.8,
        reviews: 256,
        badges: []
    },
    {
        id: 9,
        title: "Roti Sourdough",
        description: "Roti asam alami dengan cita rasa kompleks yang mendalam",
        price: 60000,
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop",
        category: "roti-coklat",
        rating: 4.9,
        reviews: 203,
        badges: ["Best Seller"]
    }
];

// =====================================================
// TESTIMONIALS DATA
// =====================================================

const testimonials = [
    {
        id: 1,
        name: "Sarah Wijaya",
        title: "Pelanggan Setia",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        rating: 5,
        text: "Roti dari Toko Roti Artisan selalu segar dan lezat. Kualitas terjamin dan harga sangat masuk akal. Saya selalu pesan setiap minggu!",
        verified: true
    },
    {
        id: 2,
        name: "Budi Santoso",
        title: "Pengusaha Kafe",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        rating: 5,
        text: "Supplier terpercaya untuk kebutuhan roti kafe kami. Pelayanan cepat, kualitas konsisten, dan bisa request custom. Recommended!",
        verified: true
    },
    {
        id: 3,
        name: "Dewi Lestari",
        title: "Ibu Rumah Tangga",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
        rating: 5,
        text: "Keluarga saya sangat suka dengan roti gandum di sini. Rasanya enak dan tidak terlalu manis. Harga juga terjangkau untuk setiap hari.",
        verified: true
    },
    {
        id: 4,
        name: "Andi Sutrisno",
        title: "Karyawan Kantoran",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
        rating: 5,
        text: "Sarapan favorit saya sudah menjadi roti dari toko ini. Sebelum berangkat kerja selalu sekalian beli roti segar. Terus deh!",
        verified: true
    },
    {
        id: 5,
        name: "Linda Kusuma",
        title: "Baker Profesional",
        avatar: "https://images.unsplash.com/photo-1517841905240-bc2018dba4a8?w=100&h=100&fit=crop",
        rating: 5,
        text: "Customizer kue online mereka sangat memudahkan! Bisa langsung lihat preview dan lihat total harga. Sistem yang bagus dan user-friendly.",
        verified: true
    }
];

// =====================================================
// STATE MANAGEMENT
// =====================================================

const state = {
    cart: [],
    currentCategory: "semua",
    currentSlide: 0,
    currentTestimonialIndex: 0,
    wishlist: [],
    customCake: {
        color: "rgb(210, 105, 30)",
        text: "Nama Anda",
        toppings: [],
        size: "sedang",
        sizePrice: 120000
    }
};

// =====================================================
// DOM ELEMENTS
// =====================================================

const elements = {
    // Navbar
    navbar: document.querySelector(".navbar"),
    searchInput: document.getElementById("searchInput"),
    searchInputMobile: document.getElementById("searchInputMobile"),
    searchResults: document.querySelector(".search-results"),
    categoryBtns: document.querySelectorAll(".category-btn"),
    cartBtn: document.getElementById("cartBtn"),
    cartCount: document.getElementById("cartCount"),
    hamburger: document.getElementById("hamburger"),
    mobileMenu: document.getElementById("mobileMenu"),
    
    // Hero
    orderBtn: document.getElementById("orderBtn"),
    prevSlide: document.getElementById("prevSlide"),
    nextSlide: document.getElementById("nextSlide"),
    sliderDots: document.querySelectorAll(".dot"),
    
    // Products
    productsGrid: document.getElementById("productsGrid"),
    productsSection: document.getElementById("productsSection"),
    
    // Custom Cake
    cakeLayer: document.getElementById("cakeLayer"),
    cakeName: document.getElementById("cakeName"),
    colorOptions: document.querySelectorAll(".color-btn"),
    toppingCheckboxes: document.querySelectorAll(".topping-checkbox"),
    cakeSize: document.getElementById("cakeSize"),
    customCakePrice: document.getElementById("customCakePrice"),
    addCustomCakeBtn: document.getElementById("addCustomCakeBtn"),
    
    // Testimonials
    testimonialsCarousel: document.getElementById("testimonialsCarousel"),
    prevTestimonial: document.getElementById("prevTestimonial"),
    nextTestimonial: document.getElementById("nextTestimonial"),
    
    // Cart Modal
    cartModal: document.getElementById("cartModal"),
    closeCartBtn: document.getElementById("closeCartBtn"),
    cartItems: document.getElementById("cartItems"),
    cartTotal: document.getElementById("cartTotal"),
    subtotal: document.getElementById("subtotal"),
    taxAmount: document.getElementById("taxAmount"),
    continueShopping: document.getElementById("continueShopping"),
    checkout: document.getElementById("checkout"),
    overlay: document.getElementById("overlay"),
    
    // Newsletter
    newsletterForm: document.getElementById("newsletterForm")
};

// =====================================================
// INITIALIZATION
// =====================================================

function init() {
    renderProducts();
    renderTestimonials();
    attachEventListeners();
    updateCartDisplay();
}

// =====================================================
// PRODUCT MANAGEMENT
// =====================================================

function renderProducts(category = "semua") {
    const filteredProducts = category === "semua" 
        ? products 
        : products.filter(p => p.category === category);
    
    elements.productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
                <div class="product-badges">
                    ${product.badges.map(badge => `
                        <span class="badge ${badge.toLowerCase().replace(/\s/g, '-')}">${badge}</span>
                    `).join('')}
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-rating">
                    <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
                    <span class="rating-count">${product.reviews} ulasan</span>
                </div>
                <div class="product-price">
                    <span class="price">Rp ${product.price.toLocaleString('id-ID')}</span>
                </div>
                <div class="product-actions">
                    <button class="add-to-cart-btn" data-product-id="${product.id}">
                        Tambah ke Keranjang
                    </button>
                    <button class="wishlist-btn" data-product-id="${product.id}">♡</button>
                </div>
            </div>
        </div>
    `).join('');
    
    attachProductEventListeners();
}

function attachProductEventListeners() {
    document.querySelectorAll(".add-to-cart-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const productId = parseInt(e.target.dataset.productId);
            addToCart(productId);
        });
    });
    
    document.querySelectorAll(".wishlist-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const productId = parseInt(e.target.dataset.productId);
            toggleWishlist(productId, e.target);
        });
    });
}

function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    const existingItem = state.cart.find(item => item.id === productId && !item.isCustom);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        state.cart.push({
            ...product,
            quantity: quantity,
            cartItemId: Date.now()
        });
    }
    
    updateCartDisplay();
    showNotification(`${product.title} ditambahkan ke keranjang`);
}

function toggleWishlist(productId, button) {
    const index = state.wishlist.indexOf(productId);
    if (index > -1) {
        state.wishlist.splice(index, 1);
        button.classList.remove("active");
    } else {
        state.wishlist.push(productId);
        button.classList.add("active");
    }
}

// =====================================================
// SEARCH FUNCTIONALITY
// =====================================================

function setupSearch() {
    const searchInputs = [elements.searchInput, elements.searchInputMobile];
    
    searchInputs.forEach(input => {
        if (!input) return;
        
        input.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase();
            
            if (!query) {
                elements.searchResults.classList.remove("active");
                return;
            }
            
            const results = products.filter(p => 
                p.title.toLowerCase().includes(query) ||
                p.description.toLowerCase().includes(query)
            );
            
            if (results.length > 0) {
                elements.searchResults.innerHTML = results.map(product => `
                    <div class="search-result-item" data-product-id="${product.id}">
                        <img src="${product.image}" alt="${product.title}" class="search-result-img">
                        <div class="search-result-info">
                            <h4>${product.title}</h4>
                            <p>Rp ${product.price.toLocaleString('id-ID')}</p>
                        </div>
                    </div>
                `).join('');
                
                elements.searchResults.classList.add("active");
                
                document.querySelectorAll(".search-result-item").forEach(item => {
                    item.addEventListener("click", () => {
                        const productId = parseInt(item.dataset.productId);
                        addToCart(productId);
                        input.value = "";
                        elements.searchResults.classList.remove("active");
                    });
                });
            } else {
                elements.searchResults.innerHTML = '<div class="search-result-item" style="text-align: center; color: #999;">Produk tidak ditemukan</div>';
                elements.searchResults.classList.add("active");
            }
        });
    });
    
    document.addEventListener("click", (e) => {
        if (!e.target.classList.contains("search-input")) {
            elements.searchResults.classList.remove("active");
        }
    });
}

// =====================================================
// CATEGORY FILTERING
// =====================================================

function setupCategoryFilter() {
    elements.categoryBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            elements.categoryBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            state.currentCategory = btn.dataset.category;
            renderProducts(state.currentCategory);
            
            elements.productsSection.scrollIntoView({ behavior: "smooth" });
            
            if (elements.mobileMenu.classList.contains("active")) {
                elements.mobileMenu.classList.remove("active");
                elements.hamburger.classList.remove("active");
            }
        });
    });
    
    elements.categoryBtns[0].classList.add("active");
}

// =====================================================
// HERO SLIDER
// =====================================================

function setupHeroSlider() {
    elements.prevSlide.addEventListener("click", () => {
        state.currentSlide = (state.currentSlide - 1 + 3) % 3;
        updateSlider();
    });
    
    elements.nextSlide.addEventListener("click", () => {
        state.currentSlide = (state.currentSlide + 1) % 3;
        updateSlider();
    });
    
    elements.sliderDots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            state.currentSlide = index;
            updateSlider();
        });
    });
    
    elements.orderBtn.addEventListener("click", () => {
        elements.productsSection.scrollIntoView({ behavior: "smooth" });
    });
}

function updateSlider() {
    document.querySelectorAll(".slider-img").forEach((img, index) => {
        img.classList.remove("active");
        if (index === state.currentSlide) img.classList.add("active");
    });
    
    elements.sliderDots.forEach((dot, index) => {
        dot.classList.remove("active");
        if (index === state.currentSlide) dot.classList.add("active");
    });
}

// =====================================================
// CUSTOM CAKE SECTION
// =====================================================

function setupCustomCake() {
    // Color options
    elements.colorOptions.forEach(btn => {
        btn.addEventListener("click", () => {
            elements.colorOptions.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            state.customCake.color = btn.dataset.color;
            elements.cakeLayer.style.backgroundColor = state.customCake.color;
        });
    });
    
    // Text input
    elements.cakeName.addEventListener("input", (e) => {
        state.customCake.text = e.target.value || "Nama Anda";
        document.getElementById("cakeText").textContent = state.customCake.text;
    });
    
    // Toppings
    elements.toppingCheckboxes.forEach(checkbox => {
        checkbox.addEventListener("change", updateCustomCakePrice);
    });
    
    // Size
    elements.cakeSize.addEventListener("change", (e) => {
        const option = e.target.options[e.target.selectedIndex];
        state.customCake.size = e.target.value;
        state.customCake.sizePrice = parseInt(option.dataset.price);
        updateCustomCakePrice();
    });
    
    // Add to cart
    elements.addCustomCakeBtn.addEventListener("click", addCustomCakeToCart);
    
    // Set initial color
    elements.colorOptions[0].classList.add("active");
}

function updateCustomCakePrice() {
    let total = state.customCake.sizePrice;
    
    elements.toppingCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            total += parseInt(checkbox.dataset.price);
        }
    });
    
    state.customCake.toppings = Array.from(elements.toppingCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);
    
    elements.customCakePrice.textContent = `Rp ${total.toLocaleString('id-ID')}`;
    state.customCake.totalPrice = total;
}

function addCustomCakeToCart() {
    const customItem = {
        id: Date.now(),
        title: `Kue Custom - ${state.customCake.text}`,
        description: `Warna: ${state.customCake.color}, Ukuran: ${state.customCake.size}, Toping: ${state.customCake.toppings.join(", ") || "Tidak ada"}`,
        price: state.customCake.totalPrice,
        quantity: 1,
        isCustom: true,
        cartItemId: Date.now(),
        customData: { ...state.customCake }
    };
    
    state.cart.push(customItem);
    updateCartDisplay();
    showNotification("Kue custom ditambahkan ke keranjang!");
    
    // Reset form
    elements.cakeName.value = "";
    state.customCake.text = "Nama Anda";
    document.getElementById("cakeText").textContent = "Nama Anda";
    elements.toppingCheckboxes.forEach(cb => cb.checked = false);
    elements.cakeSize.value = "sedang";
    updateCustomCakePrice();
}

// =====================================================
// TESTIMONIALS SECTION
// =====================================================

function renderTestimonials() {
    const itemsPerPage = 3;
    const start = state.currentTestimonialIndex * itemsPerPage;
    const displayedTestimonials = testimonials.slice(start, start + itemsPerPage);
    
    elements.testimonialsCarousel.innerHTML = displayedTestimonials.map(testimonial => `
        <div class="testimonial-card">
            <div class="testimonial-header">
                <img src="${testimonial.avatar}" alt="${testimonial.name}" class="testimonial-avatar">
                <div class="testimonial-info">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.title}</p>
                    ${testimonial.verified ? '<span class="verified-badge">✓ Verified</span>' : ''}
                </div>
            </div>
            <div class="testimonial-rating">${'★'.repeat(testimonial.rating)}${'☆'.repeat(5 - testimonial.rating)}</div>
            <p class="testimonial-text">"${testimonial.text}"</p>
        </div>
    `).join('');
}

function setupTestimonials() {
    elements.prevTestimonial.addEventListener("click", () => {
        state.currentTestimonialIndex = Math.max(0, state.currentTestimonialIndex - 1);
        renderTestimonials();
    });
    
    elements.nextTestimonial.addEventListener("click", () => {
        const maxIndex = Math.ceil(testimonials.length / 3) - 1;
        state.currentTestimonialIndex = Math.min(maxIndex, state.currentTestimonialIndex + 1);
        renderTestimonials();
    });
}

// =====================================================
// SHOPPING CART
// =====================================================

function updateCartDisplay() {
    elements.cartCount.textContent = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    renderCartItems();
    updateCartTotals();
}

function renderCartItems() {
    if (state.cart.length === 0) {
        elements.cartItems.innerHTML = '<div class="empty-cart"><div class="empty-cart-icon">🛒</div><p>Keranjang Anda kosong</p></div>';
        return;
    }
    
    elements.cartItems.innerHTML = state.cart.map((item, index) => `
        <div class="cart-item">
            <img src="${item.image || 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=100&h=100&fit=crop'}" alt="${item.title}" class="cart-item-image">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-price">Rp ${item.price.toLocaleString('id-ID')}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">−</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" readonly>
                    <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
                </div>
                <button class="remove-item-btn" onclick="removeFromCart(${index})">Hapus</button>
            </div>
        </div>
    `).join('');
}

function updateQuantity(index, change) {
    const newQuantity = state.cart[index].quantity + change;
    if (newQuantity > 0) {
        state.cart[index].quantity = newQuantity;
    } else {
        removeFromCart(index);
    }
    updateCartDisplay();
}

function removeFromCart(index) {
    state.cart.splice(index, 1);
    updateCartDisplay();
}

function updateCartTotals() {
    const subtotalAmount = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = Math.round(subtotalAmount * 0.1);
    const total = subtotalAmount + tax;
    
    elements.subtotal.textContent = `Rp ${subtotalAmount.toLocaleString('id-ID')}`;
    elements.taxAmount.textContent = `Rp ${tax.toLocaleString('id-ID')}`;
    elements.cartTotal.textContent = `Rp ${total.toLocaleString('id-ID')}`;
}

function toggleCartModal() {
    elements.cartModal.classList.toggle("active");
    elements.overlay.classList.toggle("active");
}

// Make updateQuantity and removeFromCart global
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;

// =====================================================
// HAMBURGER MENU
// =====================================================

function setupHamburgerMenu() {
    elements.hamburger.addEventListener("click", () => {
        elements.hamburger.classList.toggle("active");
        elements.mobileMenu.classList.toggle("active");
    });
}

// =====================================================
// NEWSLETTER
// =====================================================

function setupNewsletter() {
    elements.newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const email = elements.newsletterForm.querySelector('input[type="email"]').value;
        
        if (!email) {
            alert("Silakan masukkan email Anda");
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Silakan masukkan email yang valid");
            return;
        }
        
        alert(`Terima kasih! Email Anda ${email} telah terdaftar untuk newsletter kami.`);
        elements.newsletterForm.reset();
    });
}

// =====================================================
// CHECKOUT
// =====================================================

function setupCheckout() {
    elements.checkout.addEventListener("click", () => {
        if (state.cart.length === 0) {
            alert("Keranjang Anda kosong. Silakan tambahkan produk terlebih dahulu.");
            return;
        }
        
        const total = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const tax = Math.round(total * 0.1);
        const finalTotal = total + tax;
        
        const orderSummary = state.cart.map(item => `${item.title} x${item.quantity}`).join("\n");
        
        alert(`Pesanan Anda:\n\n${orderSummary}\n\nSubtotal: Rp ${total.toLocaleString('id-ID')}\nPajak: Rp ${tax.toLocaleString('id-ID')}\nTotal: Rp ${finalTotal.toLocaleString('id-ID')}\n\nTerima kasih telah berbelanja!`);
        
        state.cart = [];
        updateCartDisplay();
        toggleCartModal();
    });
    
    elements.continueShopping.addEventListener("click", () => {
        toggleCartModal();
    });
}

// =====================================================
// NOTIFICATION
// =====================================================

function showNotification(message) {
    const notification = document.createElement("div");
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: linear-gradient(135deg, #D2691E 0%, #FF8C00 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 2000;
        animation: slideIn 0.3s ease;
        font-weight: bold;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = "fadeIn 0.3s ease reverse";
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// =====================================================
// EVENT LISTENERS SETUP
// =====================================================

function attachEventListeners() {
    elements.cartBtn.addEventListener("click", toggleCartModal);
    elements.closeCartBtn.addEventListener("click", toggleCartModal);
    elements.overlay.addEventListener("click", toggleCartModal);
    
    setupSearch();
    setupCategoryFilter();
    setupHeroSlider();
    setupCustomCake();
    setupTestimonials();
    setupHamburgerMenu();
    setupNewsletter();
    setupCheckout();
    
    // Close search results on escape
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            elements.searchResults.classList.remove("active");
            if (elements.cartModal.classList.contains("active")) {
                toggleCartModal();
            }
        }
    });
}

// =====================================================
// SMOOTH SCROLL ANCHOR LINKS
// =====================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// =====================================================
// START APPLICATION
// =====================================================

document.addEventListener("DOMContentLoaded", init);
