document.querySelector('.login-btn').addEventListener('click', function() {
    document.getElementById('login-popup').style.display = 'flex';
});

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('login-popup').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('login-popup')) {
        document.getElementById('login-popup').style.display = 'none';
    }
});