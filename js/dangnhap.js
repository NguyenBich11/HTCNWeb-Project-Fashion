// Đăng nhập
const btDN = document.getElementById('bt_DN');

btDN.addEventListener('click', function(e) {
    e.preventDefault();

    checkLogin();
})

// Kiểm tra đăng nhập
function checkLogin() {
    const userName = document.getElementById('userNameDN');
    const userNuserNameDName = document.getElementById('userNameDN').value;
    const passwordDN = document.getElementById('passwordDN').value;

    const storedUserName = localStorage.getItem('userName');
    const storedPassword = localStorage.getItem('password');

    if (userNuserNameDName === storedUserName && passwordDN === storedPassword) {
        alert('Đăng nhập thành công!');
    } else {
        alert('Đăng nhập thất bại. Vui lòng kiểm tra lại tên đăng nhập và mật khẩu!');
        userName.focus();
    }
}