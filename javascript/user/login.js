function showLoginPage() {
    let html = `<div class="container" id="container">
        <div class="form-container sign-up-container my-form">
            <h1>Tạo tài khoản</h1>
            <div class="social-container">
                <a href="#" class="social"><i class="fab fa-facebook-f"></i>Facebook</a>
            </div>
            <span>hoặc sử dụng email của bạn</span>
            <input type="text" id="username" placeholder="Tên đăng nhập" required/>
            <input type="email" id="email" placeholder="Email" required/>
            <input type="password" id="password" placeholder="Mật khẩu" required/>
            <button onclick='register()' class="login_button ">Đăng ký</button>
        </div>
        <div class="form-container sign-in-container my-form">
            <h1>Đăng nhập</h1>
            <div class="social-container">
                <a href="#" class="social"><i class="fab fa-facebook-f"></i>Facebook</a>
            </div>
            <span>hoặc sử dụng tài khoản của bạn</span>
            <input type="email" id="username_login" placeholder="Email hoặc số điện thoại" required/>
            <input type="password" id="password_login" placeholder="Mật khẩu" required/>
            <a href="#">Quên mật khẩu?</a>
            <button onclick="login()">Đăng nhập</button>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>Chào mừng trở lại!</h1>
                    <p>Để tiếp tục kết nối với chúng tôi, vui lòng đăng nhập bằng thông tin cá nhân của bạn</p>
                    <button class="ghost" id="signIn" onclick="showFormLogin()">Đăng nhập</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>Đăng ký</h1>
                    <p>Điền thông tin cá nhân của bạn và bắt đầu cuộc hành trình cùng chúng tôi</p>
                    <button class="ghost" id="signUp" onclick="showFormRegister()">Đăng ký</button>
                </div>
            </div>
        </div>
    </div>`;
    document.getElementById('wrapper').innerHTML = html;
}

showLoginPage();

function login() {
    let username = document.getElementById("username_login").value;
    let password = document.getElementById("password_login").value;
    let user = {
        username : username,
        password : password
    }
    axios.post(`http://localhost:8080/user/login`, user).then(function (response) {
        let currentUser = response.data;
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        showHome()
    }).catch(function (error) {
        console.log(error.response.data)
    })
}

function logout() {
    localStorage.clear();
    showLoginPage();
}
function register() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let email = document.getElementById("email").value;
    let user = {
        username: username,
        password: password,
        confirmPassword: confirmPassword,
        email: email
    }
    axios.post('http://localhost:8080/user', user).then(function (response) {
        showLoginPage();
    }).catch(function (error) {
        console.log(error.response.data)
    });
}


