import test from 'node:test';
import assert from 'node:assert/strict';
import { createProduct, addVariantToProduct, getProductDisplayData } from './productCatalog.js';

test('createProduct adds a product with default variant and timestamps', () => {
  const newProduct = createProduct({
    title: 'Kue Tart Matcha',
    description: 'Tart matcha premium',
    price: 175000,
    stock: 12,
    image: 'https://example.com/matcha.jpg',
    category: 'kue-tart',
    variants: [{ name: 'Classic', price: 175000, image: 'https://example.com/matcha-classic.jpg', stock: 12 }]
  });

  assert.equal(newProduct.title, 'Kue Tart Matcha');
  assert.equal(newProduct.variants.length, 1);
  assert.ok(newProduct.createdAt);
  assert.ok(newProduct.updatedAt);
});

test('addVariantToProduct appends a variant and keeps variant image and stock in sync', () => {
  const baseProduct = createProduct({
    title: 'Roti Sourdough',
    description: 'Roti sourdough',
    price: 60000,
    stock: 20,
    image: 'https://example.com/sourdough.jpg',
    category: 'roti-putih',
    variants: [{ name: 'Classic', price: 60000, image: 'https://example.com/sourdough-classic.jpg', stock: 20 }]
  });

  const updatedProduct = addVariantToProduct(baseProduct, {
    name: 'Olive',
    price: 65000,
    image: 'https://example.com/sourdough-olive.jpg',
    stock: 10
  });

  assert.equal(updatedProduct.variants.length, 2);
  assert.equal(updatedProduct.variants[1].name, 'Olive');
  assert.equal(updatedProduct.variants[1].stock, 10);
});

test('getProductDisplayData uses the selected variant image, price, and stock', () => {
  const product = createProduct({
    title: 'Croissant Butter',
    description: 'Croissant premium',
    price: 65000,
    stock: 30,
    image: 'https://example.com/croissant.jpg',
    category: 'roti-coklat',
    variants: [
      { name: 'Classic', price: 65000, image: 'https://example.com/croissant-classic.jpg', stock: 30 },
      { name: 'Almond', price: 72000, image: 'https://example.com/croissant-almond.jpg', stock: 12 }
    ]
  });

  const display = getProductDisplayData(product, 1);

  assert.equal(display.image, 'https://example.com/croissant-almond.jpg');
  assert.equal(display.price, 72000);
  assert.equal(display.stock, 12);
});
