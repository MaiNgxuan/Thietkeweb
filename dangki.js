document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('passworddk').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Mật khẩu và xác nhận mật khẩu không khớp.');
        return;
    }

    // Submit the form 
    alert('Đăng ký thành công!');
});
