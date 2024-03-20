function showLoginPage() {
    let html = `<div class="container" id="container">
        <div class="form-container sign-up-container my-form">
            <div id="signup-form">
                <h1>Tạo tài khoản</h1>
                <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>hoặc đăng ký tài khoản mới</span>
                <input type="text" id="username" placeholder="Tài khoản" required/>
                <input type="email" id="email" placeholder="Email" required/>
                <input type="password" id="password" placeholder="Mật khẩu" required/>
                <input type="password" id="confirmPassword" placeholder="Xác nhận mật khẩu" required/>
                <button>Đăng ký</button>
            </div>
        </div>
        <div class="form-container sign-in-container my-form">
            <h1>Đăng nhập</h1>
            <div class="social-container">
                <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your account</span>
            <input type="email" id="username_login" placeholder="Tài khoản" required/>
            <input type="password" id="password_login" placeholder="Mật khẩu" required/>
            <a href="#">Quên mật khẩu</a>
            <button>Đăng nhập</button>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>Chào mừng trở lại</h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <button class="ghost" id="signIn">Đăng nhập</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>Đăng ký tài khoản mới</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <button class="ghost" id="signUp">Đăng ký</button>
                </div>
            </div>
        </div>
    </div>`;
    document.getElementById('wrapper').innerHTML = html;
}
showLoginPage();