document.addEventListener('DOMContentLoaded', function() {
  fetch('products.json')
    .then(response => response.json())
    .then(data => {
      const tableBody = document.getElementById('data-output');
      data.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td><img class="product-image" src="${product.image}" alt="Product image"></td>
          <td>${product.name}</td>
          <td>$${product.price}</td>
          <td>${product.inventory}</td>
          <td>${product.productCode}</td>
        `;
        tableBody.appendChild(row);
      });
    })
    .catch(error => console.error('Error loading the JSON', error));
});
