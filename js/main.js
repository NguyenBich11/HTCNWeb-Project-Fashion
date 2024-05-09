// Đăng nhập
const btDN = document.getElementById('bt_DN');
const btnDK = document.getElementById('btn_DK');

btnDK.addEventListener('click', function (e) {
    e.preventDefault();

    // Check nếu có ít nhất 1 trường chưa nhập
    if(!checkedName() || !checkedBirthDate() || !checkedEmail() || !checkedPassword()) {
        return;
    }

    // Lưu thông tin đăng ký vào localStorage
    saveUserInfoToLocal();

    alert('Đăng ký thành công!');
    
    // Chuyển sang trang đăng nhập
    setTimeout(function() {
        window.location.href = '/html/dangnhap.html';
    }, 3000);
})

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

function navigateSitemap() {
    window.location.href = '/html/gioithieuthanhvien.html';
}

// Nhấn vào nút mua ngay -> trang đăng nhập
function redictrectLogin() {
    window.location.href = '/html/dangnhap.html'
}

// Check name
function checkedName() {
    const hovaten = document.getElementById('hovaten');
    const errorName = document.getElementById('errorName');

    if(hovaten.value.trim() == '') {
        errorName.innerText = 'Vui lòng nhập họ và tên';
        hovaten.focus();
        return false;
    }
    else {
        errorName.innerText = '';
        return true;
    }
}

// Check ngay sinh
function checkedBirthDate() {
    const birthdate = document.querySelector('input[type=date]');
    const errorBirthdate = document.getElementById('errorBirthdate');

    if(birthdate.value === '') {
        errorBirthdate.innerText = 'Vui lòng chọn ngày sinh';
        return false;
    }else {
        errorBirthdate.innerText = '';
        return true;
    }
}

// Check email
function checkedEmail() {
    const email = document.getElementById('email');
    const errorEmail = document.getElementById('errorEmail');
    const regexEmail =  
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(email.value.trim() === '') {
        errorEmail.innerText = 'Vui lòng nhập email';
        email.focus();
        return false;
    }else if(!regexEmail.test(email.value)) {
        errorEmail.innerText = 'Vui lòng nhập đúng định dạng của email';
        email.focus();
        return false;
    }else {
        errorEmail.innerText = '';
        return true;
    }
}

// Check is password
function checkedPassword() {
    const dkPassword = document.getElementById('dkPassword');
    const rePassword = document.getElementById('rePassword');
    const errorPassword = document.getElementById('errorPassword');
    const errorRePassword = document.getElementById('errorRePassword');

    if(dkPassword.value.trim() === '') {
        errorPassword.innerText = 'Vui lòng nhập mật khẩu';
        dkPassword.focus();
        return false;
    }else if(dkPassword.value!== rePassword.value) {
        errorRePassword.innerText = 'Mật khẩu nhập lại không đúng';
        rePassword.focus();
        return false;
    }else {
        errorPassword.innerText = '';
        errorRePassword.innerText = '';
        return true;
    }
}

// Lưu thông tin đăng ký vào localStorage
function saveUserInfoToLocal() {
    const hovaten = document.getElementById('hovaten').value;
    const email = document.getElementById('email').value;
    const dkPassword = document.getElementById('dkPassword').value;

    localStorage.setItem('userName', hovaten);
    localStorage.setItem('email', email);
    localStorage.setItem('password', dkPassword);
}