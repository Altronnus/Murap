async function loadProducts() {
  const res = await fetch('data.json');
  const products = await res.json();

  const list = document.getElementById('product-list');
  list.innerHTML = '';

  products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';

    div.innerHTML = `
      <img src="${product.photo}" alt="${product.name}" />
      <div class="product-name">${product.name}</div>
      <div class="product-price">💰 Опт: ${product.opt_price} сом</div>
      <div class="product-price">🏷 Розница: ${product.retail_price} сом</div>
      <div class="product-category">📁 ${product.category}</div>
    `;

    list.appendChild(div);
  });
}

loadProducts();
