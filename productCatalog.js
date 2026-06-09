const categories = {
  'roti-putih': { label: 'Roti Putih', description: 'Roti lembut dan khas untuk sarapan' },
  'roti-coklat': { label: 'Roti Coklat & Croissant', description: 'Pastry premium dengan rasa kaya' },
  'kue-kering': { label: 'Kue Kering', description: 'Camilan manis dan pastry lembut' },
  'kue-tart': { label: 'Kue Tart', description: 'Kue tart elegan untuk acara spesial' }
};

const initialProducts = [
  {
    id: 1,
    title: 'Roti Tawar Gulung',
    description: 'Roti tawar gulung lembut dengan isi premium yang cocok untuk sarapan dan cemilan.',
    price: 48000,
    stock: 40,
    image: 'https://images.unsplash.com/photo-1576502200916-5cbd4c999f74?w=600&h=600&fit=crop',
    category: 'roti-putih',
    rating: 4.8,
    reviews: 145,
    badges: ['Best Seller'],
    variants: [
      { id: 101, name: 'Original', price: 48000, stock: 20, image: 'https://images.unsplash.com/photo-1576502200916-5cbd4c999f74?w=600&h=600&fit=crop' },
      { id: 102, name: 'Coklat Hazelnut', price: 52000, stock: 12, image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=600&fit=crop' },
      { id: 103, name: 'Keju Mozzarella', price: 53000, stock: 8, image: 'https://images.unsplash.com/photo-1511415512841-9d5a9b39c7d8?w=600&h=600&fit=crop' },
      { id: 104, name: 'Matcha Cream', price: 54000, stock: 10, image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=600&h=600&fit=crop' }
    ],
    createdAt: '2026-01-10T08:00:00.000Z',
    updatedAt: '2026-06-01T10:30:00.000Z'
  },
  {
    id: 2,
    title: 'Baguette Perancis',
    description: 'Baguette Prancis dengan tekstur renyah, kulit krispi, dan aroma gandum segar.',
    price: 50000,
    stock: 35,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&h=600&fit=crop',
    category: 'roti-putih',
    rating: 4.8,
    reviews: 198,
    badges: [],
    variants: [
      { id: 201, name: 'Original', price: 50000, stock: 16, image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&h=600&fit=crop' },
      { id: 202, name: 'Garlic Herb', price: 55000, stock: 10, image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&h=600&fit=crop' },
      { id: 203, name: 'Keju Parmesan', price: 58000, stock: 6, image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=600&fit=crop' },
      { id: 204, name: 'Whole Wheat', price: 56000, stock: 9, image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600&h=600&fit=crop' }
    ],
    createdAt: '2026-01-12T08:15:00.000Z',
    updatedAt: '2026-06-02T09:10:00.000Z'
  },
  {
    id: 3,
    title: 'Croissant Butter',
    description: 'Croissant lapis mentega Prancis renyah dan empuk di setiap gigitan.',
    price: 65000,
    stock: 30,
    image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=600&h=600&fit=crop',
    category: 'roti-coklat',
    rating: 4.9,
    reviews: 234,
    badges: ['Best Seller'],
    variants: [
      { id: 301, name: 'Classic', price: 65000, stock: 12, image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=600&h=600&fit=crop' },
      { id: 302, name: 'Coklat', price: 70000, stock: 8, image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&h=600&fit=crop' },
      { id: 303, name: 'Almond', price: 72000, stock: 6, image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&h=600&fit=crop' },
      { id: 304, name: 'Matcha', price: 74000, stock: 4, image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600&h=600&fit=crop' }
    ],
    createdAt: '2026-01-15T07:45:00.000Z',
    updatedAt: '2026-06-04T12:00:00.000Z'
  },
  {
    id: 4,
    title: 'Roti Gandum Sehat',
    description: 'Roti gandum utuh penuh serat yang menyehatkan untuk keluarga.',
    price: 55000,
    stock: 25,
    image: 'https://images.unsplash.com/photo-1512058564366-c9e7d33f8f86?w=600&h=600&fit=crop',
    category: 'roti-putih',
    rating: 4.7,
    reviews: 89,
    badges: ['Healthy'],
    variants: [
      { id: 401, name: 'Original', price: 55000, stock: 12, image: 'https://images.unsplash.com/photo-1512058564366-c9e7d33f8f86?w=600&h=600&fit=crop' },
      { id: 402, name: 'Kismis Apel', price: 59000, stock: 7, image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=600&h=600&fit=crop' },
      { id: 403, name: 'Oat Madu', price: 60000, stock: 6, image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=600&fit=crop' }
    ],
    createdAt: '2026-01-20T08:30:00.000Z',
    updatedAt: '2026-06-03T08:50:00.000Z'
  },
  {
    id: 5,
    title: 'Roti Sourdough',
    description: 'Roti asam alami berkulit renyah dan isi empuk dengan rasa karamel alami.',
    price: 60000,
    stock: 20,
    image: 'https://images.unsplash.com/photo-1548373383-8672b97f6d04?w=600&h=600&fit=crop',
    category: 'roti-putih',
    rating: 4.9,
    reviews: 203,
    badges: ['Best Seller'],
    variants: [
      { id: 501, name: 'Classic', price: 60000, stock: 10, image: 'https://images.unsplash.com/photo-1548373383-8672b97f6d04?w=600&h=600&fit=crop' },
      { id: 502, name: 'Olive', price: 65000, stock: 5, image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&h=600&fit=crop' },
      { id: 503, name: 'Keju Cheddar', price: 67000, stock: 5, image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&h=600&fit=crop' }
    ],
    createdAt: '2026-01-25T07:55:00.000Z',
    updatedAt: '2026-06-05T11:20:00.000Z'
  },
  {
    id: 6,
    title: 'Roti Putih Premium',
    description: 'Roti putih lembut dengan tekstur sempurna, cocok untuk sandwich dan roti isi.',
    price: 45000,
    stock: 45,
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=600&fit=crop',
    category: 'roti-putih',
    rating: 4.8,
    reviews: 156,
    badges: ['Favorite'],
    variants: [
      { id: 601, name: 'Original', price: 45000, stock: 18, image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=600&fit=crop' },
      { id: 602, name: 'Coklat', price: 49000, stock: 14, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=600&fit=crop' },
      { id: 603, name: 'Kismis', price: 50000, stock: 13, image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&h=600&fit=crop' }
    ],
    createdAt: '2026-02-01T09:15:00.000Z',
    updatedAt: '2026-06-01T08:10:00.000Z'
  },
  {
    id: 7,
    title: 'Kue Lapis Legit',
    description: 'Kue tradisional berlapis dengan aroma rempah dan rasa legit yang khas.',
    price: 75000,
    stock: 20,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop',
    category: 'kue-kering',
    rating: 4.9,
    reviews: 167,
    badges: ['Best Seller'],
    variants: [
      { id: 701, name: 'Classic', price: 75000, stock: 10, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop' },
      { id: 702, name: 'Pandan', price: 79000, stock: 5, image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=600&h=600&fit=crop' },
      { id: 703, name: 'Kacang', price: 81000, stock: 5, image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600&h=600&fit=crop' }
    ],
    createdAt: '2026-02-05T10:00:00.000Z',
    updatedAt: '2026-06-06T07:20:00.000Z'
  },
  {
    id: 8,
    title: 'Donat Coklat Glazur',
    description: 'Donat empuk dengan glazur coklat kaya rasa, cocok untuk cemilan sore.',
    price: 35000,
    stock: 50,
    image: 'https://images.unsplash.com/photo-1495003542422-01d4ec16b894?w=600&h=600&fit=crop',
    category: 'kue-kering',
    rating: 4.6,
    reviews: 312,
    badges: [],
    variants: [
      { id: 801, name: 'Classic', price: 35000, stock: 22, image: 'https://images.unsplash.com/photo-1495003542422-01d4ec16b894?w=600&h=600&fit=crop' },
      { id: 802, name: 'Vanilla', price: 37000, stock: 14, image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&h=600&fit=crop' },
      { id: 803, name: 'Caramel', price: 39000, stock: 14, image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=600&h=600&fit=crop' }
    ],
    createdAt: '2026-02-08T08:45:00.000Z',
    updatedAt: '2026-06-02T09:30:00.000Z'
  },
  {
    id: 9,
    title: 'Muffin Blueberry',
    description: 'Muffin lembut dengan blueberry segar yang meledak di mulut.',
    price: 40000,
    stock: 40,
    image: 'https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?w=600&h=600&fit=crop',
    category: 'kue-kering',
    rating: 4.8,
    reviews: 256,
    badges: [],
    variants: [
      { id: 901, name: 'Classic', price: 40000, stock: 16, image: 'https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?w=600&h=600&fit=crop' },
      { id: 902, name: 'Berry Burst', price: 43000, stock: 12, image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&h=600&fit=crop' },
      { id: 903, name: 'Double Choco', price: 45000, stock: 12, image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=600&h=600&fit=crop' }
    ],
    createdAt: '2026-02-10T09:20:00.000Z',
    updatedAt: '2026-06-03T11:35:00.000Z'
  },
  {
    id: 10,
    title: 'Kue Tart Coklat',
    description: 'Tart coklat lembut dengan lapisan ganache premium dan dekorasi elegan.',
    price: 180000,
    stock: 15,
    image: 'https://images.unsplash.com/photo-1601042004545-2a728a6fa9e2?w=600&h=600&fit=crop',
    category: 'kue-tart',
    rating: 4.9,
    reviews: 110,
    badges: ['Custom'],
    variants: [
      { id: 1001, name: 'Classic Chocolate', price: 180000, stock: 6, image: 'https://images.unsplash.com/photo-1601042004545-2a728a6fa9e2?w=600&h=600&fit=crop' },
      { id: 1002, name: 'Berry Luxe', price: 195000, stock: 4, image: 'https://images.unsplash.com/photo-1519869325930-281384150729?w=600&h=600&fit=crop' },
      { id: 1003, name: 'Gold Premium', price: 215000, stock: 5, image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=600&fit=crop' }
    ],
    createdAt: '2026-02-14T08:10:00.000Z',
    updatedAt: '2026-06-04T10:20:00.000Z'
  },
  {
    id: 11,
    title: 'Kue Tart Red Velvet',
    description: 'Tart red velvet lembut dengan krim keju vanilla segar.',
    price: 190000,
    stock: 12,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=600&fit=crop',
    category: 'kue-tart',
    rating: 4.9,
    reviews: 92,
    badges: [],
    variants: [
      { id: 1101, name: 'Classic', price: 190000, stock: 5, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=600&fit=crop' },
      { id: 1102, name: 'Cream Cheese', price: 205000, stock: 4, image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=600&fit=crop' },
      { id: 1103, name: 'Berry Crown', price: 215000, stock: 3, image: 'https://images.unsplash.com/photo-1519869325930-281384150729?w=600&h=600&fit=crop' }
    ],
    createdAt: '2026-02-16T09:25:00.000Z',
    updatedAt: '2026-06-05T09:25:00.000Z'
  },
  {
    id: 12,
    title: 'Kue Tart Buah Segar',
    description: 'Tart buah segar dengan krim vanilla dan topping buah musiman.',
    price: 200000,
    stock: 12,
    image: 'https://images.unsplash.com/photo-1514516870923-7a30146a0a9c?w=600&h=600&fit=crop',
    category: 'kue-tart',
    rating: 4.8,
    reviews: 78,
    badges: [],
    variants: [
      { id: 1201, name: 'Seasonal Fruit', price: 200000, stock: 5, image: 'https://images.unsplash.com/photo-1514516870923-7a30146a0a9c?w=600&h=600&fit=crop' },
      { id: 1202, name: 'Mango Passion', price: 215000, stock: 4, image: 'https://images.unsplash.com/photo-1519869325930-281384150729?w=600&h=600&fit=crop' },
      { id: 1203, name: 'Berry Garden', price: 225000, stock: 3, image: 'https://images.unsplash.com/photo-1527228474703-0f4d5f2c6f0d?w=600&h=600&fit=crop' }
    ],
    createdAt: '2026-02-18T10:30:00.000Z',
    updatedAt: '2026-06-06T08:15:00.000Z'
  }
];

const products = initialProducts.map((product) => ({ ...product, variants: (product.variants || []).map((variant) => ({ ...variant })) }));

function createProduct(payload) {
  const product = {
    id: Date.now(),
    title: payload.title,
    description: payload.description,
    price: Number(payload.price) || 0,
    stock: Number(payload.stock) || 0,
    image: payload.image || 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=600&fit=crop',
    category: payload.category,
    rating: 5,
    reviews: 0,
    badges: ['Baru'],
    variants: (payload.variants || []).map((variant, index) => ({
      id: Date.now() + index + 1,
      name: variant.name,
      price: Number(variant.price) || Number(payload.price) || 0,
      stock: Number(variant.stock) || Number(payload.stock) || 0,
      image: variant.image || payload.image || 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=600&fit=crop'
    })),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  products.unshift(product);
  return product;
}

function addVariantToProduct(productOrId, payload) {
  const product = typeof productOrId === 'number' ? products.find((item) => item.id === productOrId) : productOrId;

  if (!product) {
    return null;
  }

  const variant = {
    id: Date.now(),
    name: payload.name,
    price: Number(payload.price) || product.price,
    stock: Number(payload.stock) || 0,
    image: payload.image || product.image
  };

  product.variants = [...(product.variants || []), variant];
  product.updatedAt = new Date().toISOString();
  return product;
}

function getProductDisplayData(product, selectedVariantIndex = 0) {
  const variant = product?.variants?.[selectedVariantIndex] || null;

  return {
    image: variant?.image || product?.image,
    price: variant?.price ?? product?.price,
    stock: variant?.stock ?? product?.stock,
    variantName: variant?.name || null,
    variantLabel: variant ? ` - ${variant.name}` : '',
    variant
  };
}

function getInventorySummary() {
  return {
    totalProducts: products.length,
    totalVariants: products.reduce((sum, product) => sum + (product.variants?.length || 0), 0),
    lowStockProducts: products.filter((product) => product.stock < 15 || product.variants?.some((variant) => variant.stock < 5)).length,
    totalStock: products.reduce((sum, product) => sum + Number(product.stock || 0), 0)
  };
}

function formatCurrency(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(value);
}

export { products, categories, createProduct, addVariantToProduct, getProductDisplayData, getInventorySummary, formatCurrency };
