// public/js/search.js
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('search-results');

    const debounce = (func, delay) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), delay);
        };
    };

    const performSearch = async (query) => {
        try {
            const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
            const results = await response.json();

            resultsContainer.innerHTML = '';
            results.forEach(product => {
                const div = document.createElement('div');
                div.className = 'search-result-item';
                div.innerHTML = `
          <a href="/products/${product._id}">
            <h5>${product.name}</h5>
            <p>$${product.price.toFixed(2)}</p>
          </a>
        `;
                resultsContainer.appendChild(div);
            });
        } catch (err) {
            console.error('Search error:', err);
        }
    };

    if (searchInput) {
        searchInput.addEventListener('input', debounce((e) => {
            const query = e.target.value.trim();
            if (query.length > 2) {
                performSearch(query);
            }
        }, 300));
    }
});