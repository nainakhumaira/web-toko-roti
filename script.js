// =====================================================
// PRODUCT DATA
// =====================================================

const products = [
    {
        id: 1,
        title: "Roti Tawar Gulung",
        description: "Roti tawar gulung lembut dengan isi premium yang cocok untuk sarapan dan cemilan.",
        price: 48000,
        image: "https://images.unsplash.com/photo-1576502200916-5cbd4c999f74?w=400&h=400&fit=crop",
        category: "roti-putih",
        rating: 4.8,
        reviews: 145,
        badges: ["Best Seller"],
        variants: [
            {
                name: "Original",
                price: 48000,
                image: "https://images.unsplash.com/photo-1576502200916-5cbd4c999f74?w=400&h=400&fit=crop"
            },
            {
                name: "Coklat Hazelnut",
                price: 52000,
                image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=400&fit=crop"
            },
            {
                name: "Keju Mozzarella",
                price: 53000,
                image: "https://images.unsplash.com/photo-1511415512841-9d5a9b39c7d8?w=400&h=400&fit=crop"
            }
        ]
    },
    {
        id: 2,
        title: "Baguette Perancis",
        description: "Baguette Prancis dengan tekstur renyah dan aroma gandum segar.",
        price: 50000,
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop",
        category: "roti-putih",
        rating: 4.8,
        reviews: 198,
        badges: [],
        variants: [
            {
                name: "Original",
                price: 50000,
                image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop"
            },
            {
                name: "Garlic Herb",
                price: 55000,
                image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=400&fit=crop"
            },
            {
                name: "Keju Parmesan",
                price: 58000,
                image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=400&fit=crop"
            }
        ]
    },
    {
        id: 3,
        title: "Croissant Butter",
        description: "Croissant lapis mentega Prancis renyah dan empuk di setiap gigitan.",
        price: 65000,
        image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&h=400&fit=crop",
        category: "roti-coklat",
        rating: 4.9,
        reviews: 234,
        badges: ["Best Seller"],
        variants: [
            {
                name: "Classic",
                price: 65000,
                image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&h=400&fit=crop"
            },
            {
                name: "Coklat",
                price: 70000,
                image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop"
            },
            {
                name: "Almond",
                price: 72000,
                image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=400&fit=crop"
            }
        ]
    },
    {
        id: 4,
        title: "Roti Gandum Sehat",
        description: "Roti gandum utuh penuh serat yang menyehatkan untuk keluarga.",
        price: 55000,
        image: "https://images.unsplash.com/photo-1512058564366-c9e7d33f8f86?w=400&h=400&fit=crop",
        category: "roti-putih",
        rating: 4.7,
        reviews: 89,
        badges: ["Healthy"],
        variants: [
            {
                name: "Original",
                price: 55000,
                image: "https://images.unsplash.com/photo-1512058564366-c9e7d33f8f86?w=400&h=400&fit=crop"
            },
            {
                name: "Kismis Apel",
                price: 59000,
                image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&h=400&fit=crop"
            },
            {
                name: "Oat Madu",
                price: 60000,
                image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=400&fit=crop"
            }
        ]
    },
    {
        id: 5,
        title: "Roti Sourdough",
        description: "Roti asam alami berkulit renyah dan isi empuk dengan rasa karamel alami.",
        price: 60000,
        image: "https://images.unsplash.com/photo-1548373383-8672b97f6d04?w=400&h=400&fit=crop",
        category: "roti-putih",
        rating: 4.9,
        reviews: 203,
        badges: ["Best Seller"],
        variants: [
            {
                name: "Classic",
                price: 60000,
                image: "https://images.unsplash.com/photo-1548373383-8672b97f6d04?w=400&h=400&fit=crop"
            },
            {
                name: "Olive",
                price: 65000,
                image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop"
            },
            {
                name: "Keju Cheddar",
                price: 67000,
                image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=400&fit=crop"
            }
        ]
    },
    {
        id: 6,
        title: "Roti Putih Premium",
        description: "Roti putih lembut dengan tekstur sempurna, cocok untuk sandwich dan roti isi.",
        price: 45000,
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=400&fit=crop",
        category: "roti-putih",
        rating: 4.8,
        reviews: 156,
        badges: ["Favorite"],
        variants: [
            {
                name: "Original",
                price: 45000,
                image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=400&fit=crop"
            },
            {
                name: "Coklat",
                price: 49000,
                image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop"
            },
            {
                name: "Kismis",
                price: 50000,
                image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=400&fit=crop"
            }
        ]
    },
    {
        id: 7,
        title: "Kue Lapis Legit",
        description: "Kue tradisional berlapis dengan aroma rempah dan rasa legit yang khas.",
        price: 75000,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop",
        category: "kue-kering",
        rating: 4.9,
        reviews: 167,
        badges: ["Best Seller"]
    },
    {
        id: 8,
        title: "Donat Coklat Glazur",
        description: "Donat empuk dengan glazur coklat kaya rasa, cocok untuk cemilan sore.",
        price: 35000,
        image: "https://images.unsplash.com/photo-1495003542422-01d4ec16b894?w=400&h=400&fit=crop",
        category: "kue-kering",
        rating: 4.6,
        reviews: 312,
        badges: []
    },
    {
        id: 9,
        title: "Muffin Blueberry",
        description: "Muffin lembut dengan blueberry segar yang meledak di mulut.",
        price: 40000,
        image: "https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?w=400&h=400&fit=crop",
        category: "kue-kering",
        rating: 4.8,
        reviews: 256,
        badges: []
    },
    {
        id: 10,
        title: "Kue Tart Coklat",
        description: "Tart coklat lembut dengan lapisan ganache premium dan dekorasi elegan.",
        price: 180000,
        image: "https://images.unsplash.com/photo-1601042004545-2a728a6fa9e2?w=400&h=400&fit=crop",
        category: "kue-tart",
        rating: 4.9,
        reviews: 110,
        badges: ["Custom" ]
    },
    {
        id: 11,
        title: "Kue Tart Red Velvet",
        description: "Tart red velvet lembut dengan krim keju vanilla segar.",
        price: 190000,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
        category: "kue-tart",
        rating: 4.9,
        reviews: 92,
        badges: []
    },
    {
        id: 12,
        title: "Kue Tart Buah Segar",
        description: "Tart buah segar dengan krim vanilla dan topping buah musiman.",
        price: 200000,
        image: "https://images.unsplash.com/photo-1514516870923-7a30146a0a9c?w=400&h=400&fit=crop",
        category: "kue-tart",
        rating: 4.8,
        reviews: 78,
        badges: []
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
        text: "Roti dari Bakery Naichi selalu segar dan lezat. Kualitas terjamin dan harga sangat masuk akal. Saya selalu pesan setiap minggu!",
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
    selectedVariants: {},
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
    wishlistBtn: document.getElementById("wishlistBtn"),
    wishlistCount: document.getElementById("wishlistCount"),
    wishlistModal: document.getElementById("wishlistModal"),
    closeWishlistBtn: document.getElementById("closeWishlistBtn"),
    wishlistItems: document.getElementById("wishlistItems"),
    wishlistEmptyNote: document.getElementById("wishlistEmptyNote"),
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
    checkout: document.getElementById("checkout"),    checkoutPanel: document.getElementById("checkoutPanel"),
    checkoutForm: document.getElementById("checkoutForm"),
    checkoutName: document.getElementById("checkoutName"),
    checkoutPhone: document.getElementById("checkoutPhone"),
    checkoutAddress: document.getElementById("checkoutAddress"),
    checkoutMethod: document.getElementById("checkoutMethod"),
    checkoutPayment: document.getElementById("checkoutPayment"),
    checkoutSummary: document.getElementById("checkoutSummary"),
    cancelCheckout: document.getElementById("cancelCheckout"),    overlay: document.getElementById("overlay"),
    
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
    updateWishlistCount();
}

// =====================================================
// PRODUCT MANAGEMENT
// =====================================================

function renderProducts(category = "semua") {
    const filteredProducts = category === "semua" 
        ? products 
        : products.filter(p => p.category === category);
    
    elements.productsGrid.innerHTML = filteredProducts.map(product => {
        const selectedIndex = state.selectedVariants[product.id] ?? 0;
        const variant = product.variants ? product.variants[selectedIndex] : null;
        const image = variant?.image || product.image;
        const price = variant?.price || product.price;
        const variantLabel = variant ? ` - ${variant.name}` : "";

        return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${image}" alt="${product.title} ${variantLabel}">
                <div class="product-badges">
                    ${product.badges.map(badge => `
                        <span class="badge ${badge.toLowerCase().replace(/\s/g, '-')}">${badge}</span>
                    `).join('')}
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}${variantLabel}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-rating">
                    <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
                    <span class="rating-count">${product.reviews} ulasan</span>
                </div>
                ${product.variants ? `
                <div class="product-variants">
                    ${product.variants.map((variantItem, index) => `
                        <button class="variant-btn ${selectedIndex === index ? 'active' : ''}" data-product-id="${product.id}" data-variant-index="${index}">${variantItem.name}</button>
                    `).join('')}
                </div>
                ` : ''}
                <div class="product-price">
                    <span class="price">Rp ${price.toLocaleString('id-ID')}</span>
                </div>
                <div class="product-actions">
                    <button class="add-to-cart-btn" data-product-id="${product.id}">
                        Tambah ke Keranjang
                    </button>
                    <button class="wishlist-btn ${state.wishlist.includes(product.id) ? 'active' : ''}" data-product-id="${product.id}" aria-pressed="${state.wishlist.includes(product.id)}">♡</button>
                </div>
            </div>
        </div>
    `;
    }).join('');
    
    attachProductEventListeners();
}

function attachProductEventListeners() {
    document.querySelectorAll(".variant-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const productId = parseInt(e.target.dataset.productId);
            const variantIndex = parseInt(e.target.dataset.variantIndex);
            selectVariant(productId, variantIndex);
        });
    });

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

function selectVariant(productId, variantIndex) {
    state.selectedVariants[productId] = variantIndex;
    renderProducts(state.currentCategory);
}

function getSelectedVariant(productId) {
    const product = products.find(p => p.id === productId);
    const variantIndex = state.selectedVariants[productId] ?? 0;
    return product?.variants?.[variantIndex] || null;
}

function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    const variant = getSelectedVariant(productId);
    const itemTitle = variant ? `${product.title} - ${variant.name}` : product.title;
    const itemPrice = variant ? variant.price : product.price;
    const itemImage = variant ? variant.image : product.image;

    const existingItem = state.cart.find(item => item.id === productId && item.variantName === (variant?.name || null) && !item.isCustom);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        state.cart.push({
            id: productId,
            title: itemTitle,
            description: product.description,
            price: itemPrice,
            image: itemImage,
            quantity: quantity,
            variantName: variant?.name || null,
            cartItemId: Date.now()
        });
    }
    
    updateCartDisplay();
    showNotification(`${itemTitle} ditambahkan ke keranjang`);
}

function toggleWishlist(productId, button) {
    const index = state.wishlist.indexOf(productId);
    const product = products.find(p => p.id === productId);
    if (index > -1) {
        state.wishlist.splice(index, 1);
        if (button) button.classList.remove("active");
        showNotification(`${product.title} dihapus dari wishlist`);
    } else {
        state.wishlist.push(productId);
        if (button) button.classList.add("active");
        showNotification(`${product.title} ditambahkan ke wishlist`);
    }
    updateWishlistCount();
    if (elements.wishlistModal.classList.contains("active")) {
        renderWishlist();
    }
}

function updateWishlistCount() {
    elements.wishlistCount.textContent = state.wishlist.length;
}

function renderWishlist() {
    if (state.wishlist.length === 0) {
        elements.wishlistItems.innerHTML = "";
        elements.wishlistEmptyNote.style.display = "block";
        return;
    }

    elements.wishlistEmptyNote.style.display = "none";
    elements.wishlistItems.innerHTML = state.wishlist.map(productId => {
        const product = products.find(p => p.id === productId);
        const variant = getSelectedVariant(productId);
        const image = variant?.image || product.image;
        const title = variant ? `${product.title} - ${variant.name}` : product.title;
        const price = variant ? variant.price : product.price;

        return `
            <div class="wishlist-item">
                <img src="${image}" alt="${title}">
                <div class="wishlist-item-info">
                    <h4>${title}</h4>
                    <p>Rp ${price.toLocaleString('id-ID')}</p>
                </div>
                <div class="wishlist-item-actions">
                    <button class="add-to-cart-btn" data-product-id="${product.id}">Tambah ke Keranjang</button>
                    <button class="wishlist-btn active" data-product-id="${product.id}">Hapus</button>
                </div>
            </div>
        `;
    }).join('');

    document.querySelectorAll(".wishlist-item .add-to-cart-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const productId = parseInt(e.target.dataset.productId);
            addToCart(productId);
        });
    });

    document.querySelectorAll(".wishlist-item .wishlist-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const productId = parseInt(e.target.dataset.productId);
            toggleWishlist(productId, btn);
            renderProducts(state.currentCategory);
        });
    });
}

function toggleWishlistModal() {
    const isActive = elements.wishlistModal.classList.contains("active");
    elements.wishlistModal.classList.toggle("active");
    elements.overlay.classList.toggle("active");

    if (elements.wishlistModal.classList.contains("active")) {
        renderWishlist();
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
    if (elements.checkoutPanel.classList.contains("active")) {
        renderCheckoutSummary();
    }
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
    const isActive = elements.cartModal.classList.contains("active");
    elements.cartModal.classList.toggle("active");
    elements.overlay.classList.toggle("active");

    if (isActive) {
        closeCheckoutPanel();
    }
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

function renderCheckoutSummary() {
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = Math.round(subtotal * 0.1);
    const total = subtotal + tax;

    if (state.cart.length === 0) {
        elements.checkoutSummary.innerHTML = `
            <strong>Ringkasan Pesanan</strong>
            <div>Keranjang kosong. Tambahkan produk terlebih dahulu.</div>
        `;
        return;
    }

    const itemsHtml = state.cart.map(item => `
        <div class="checkout-summary-item">
            <span>${item.title} x${item.quantity}</span>
            <span>Rp ${ (item.price * item.quantity).toLocaleString('id-ID') }</span>
        </div>
    `).join('');
    
    elements.checkoutSummary.innerHTML = `
        <strong>Ringkasan Pesanan</strong>
        <div class="checkout-summary-items">${itemsHtml}</div>
        <div class="checkout-summary-line"><span>Subtotal</span><span>Rp ${subtotal.toLocaleString('id-ID')}</span></div>
        <div class="checkout-summary-line"><span>Pajak 10%</span><span>Rp ${tax.toLocaleString('id-ID')}</span></div>
        <div class="checkout-summary-line total-line"><span><strong>Total</strong></span><span><strong>Rp ${total.toLocaleString('id-ID')}</strong></span></div>
    `;
}

function openCheckoutPanel() {
    if (!elements.cartModal.classList.contains("active")) {
        toggleCartModal();
    }
    renderCheckoutSummary();
    elements.checkoutPanel.classList.add("active");
}

function closeCheckoutPanel() {
    elements.checkoutPanel.classList.remove("active");
}

function confirmOrder() {
    const name = elements.checkoutName.value.trim();
    const phone = elements.checkoutPhone.value.trim();
    const address = elements.checkoutAddress.value.trim();
    const method = elements.checkoutMethod.value;
    const payment = elements.checkoutPayment.value;

    if (!name || !phone || !address) {
        alert("Silakan lengkapi semua data checkout sebelum melanjutkan.");
        return;
    }

    const total = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = Math.round(total * 0.1);
    const finalTotal = total + tax;
    const methodLabel = method === "pickup" ? "Pickup di Bakery" : "Delivery ke Alamat";
    const paymentLabel = payment === "cod" ? "Bayar di Tempat (COD)" : payment === "transfer" ? "Transfer Bank" : "OVO / e-Wallet";

    showNotification(`Pesanan untuk ${name} berhasil! Total pembayaran Rp ${finalTotal.toLocaleString('id-ID')} (${methodLabel}, ${paymentLabel})`);
    elements.checkoutForm.reset();
    closeCheckoutPanel();

    if (elements.cartModal.classList.contains("active")) {
        toggleCartModal();
    }

    state.cart = [];
    updateCartDisplay();
}

function setupCheckout() {
    elements.checkout.addEventListener("click", () => {
        if (state.cart.length === 0) {
            alert("Keranjang Anda kosong. Silakan tambahkan produk terlebih dahulu.");
            return;
        }
        openCheckoutPanel();
    });
    
    elements.cancelCheckout.addEventListener("click", () => {
        closeCheckoutPanel();
    });

    elements.checkoutForm.addEventListener("submit", (e) => {
        e.preventDefault();
        confirmOrder();
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
    elements.wishlistBtn.addEventListener("click", toggleWishlistModal);
    elements.closeCartBtn.addEventListener("click", toggleCartModal);
    elements.closeWishlistBtn.addEventListener("click", toggleWishlistModal);
    elements.overlay.addEventListener("click", () => {
        if (elements.cartModal.classList.contains("active")) toggleCartModal();
        if (elements.wishlistModal.classList.contains("active")) toggleWishlistModal();
    });
    
    setupSearch();
    setupCategoryFilter();
    setupHeroSlider();
    setupCustomCake();
    setupTestimonials();
    setupHamburgerMenu();
    setupNewsletter();
    setupCheckout();
    
    // Close search results and modals on escape
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            elements.searchResults.classList.remove("active");
            if (elements.cartModal.classList.contains("active")) toggleCartModal();
            if (elements.wishlistModal.classList.contains("active")) toggleWishlistModal();
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
