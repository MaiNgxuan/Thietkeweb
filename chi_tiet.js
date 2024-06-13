document.getElementById('decrease-quantity').addEventListener('click', function() {
    var quantityInput = document.getElementById('quantity');
    var currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
    }
});

document.getElementById('increase-quantity').addEventListener('click', function() {
    var quantityInput = document.getElementById('quantity');
    var currentQuantity = parseInt(quantityInput.value);
    quantityInput.value = currentQuantity + 1;
});

document.getElementById('add-to-cart-button').addEventListener('click', function(event) {
    var quantity = document.getElementById('quantity').value;
    alert('Bạn đã thêm ' + quantity + ' sản phẩm vào giỏ hàng!');
});