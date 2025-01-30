// public/js/cart.js
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', async (e) => {
            try {
                const response = await fetch('/api/cart', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        productId: e.target.dataset.id,
                        quantity: 1
                    })
                });

                if (response.ok) {
                    alert('Item added to cart!');
                }
            } catch (err) {
                console.error('Cart error:', err);
            }
        });
    });
});