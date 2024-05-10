function showLoginPage() {
    let html = `<div class="contain_login">
        <div class="login_logo">
            <img src="https://firebasestorage.googleapis.com/v0/b/social-network-c9f60.appspot.com/o/images%2Flogo_facebook.png?alt=media&token=8d5aa29a-89bc-4b37-8e72-39325f721684"
                 alt="">
            <span>Facebook giúp bạn kết nối và chia sẻ<br>với mọi người trong cuộc sống của bạn.</span>
        </div>
        <div class="form_login">
            <input type="text" id="username" placeholder="Email hoặc số điện thoại">
            <input type="password" id="password" placeholder="Mật khẩu">
            <button class="login_button" onclick="login()">Đăng nhập</button>
            <span class="forgot_password">Quên mật khẩu?</span>
            <hr>
            <button class="regis_button" onclick="showRegisterPageModal()">Tạo tài khoản mới</button>
        </div>
    </div>
    <div class="modal_register" id="modal_register">
        <div class="form_register">
            <div class="register_header"><span class="regis_header1">Đăng ký</span>
                <span class="regis_header2">Nhanh chóng và dễ dàng</span>
                <i class="fa-solid fa-xmark" onclick="showRegisterPageModal()"></i></div>
            <div class="regis_main">
                <div class="regis_name">
                    <input type="text" name="firstname" id="firstname" placeholder="Họ">
                    <input type="text" name="lastname" id="lastname" placeholder="Tên">
                </div>
                <div class="regis_email"><input type="text" name="username" id="username_regis" placeholder="Username"></div>
                <div class="regis_confirmemail"><input type="text" name="email" id="email" placeholder="Email"></div>
                <div class="regis_password"><input type="password" name="password" id="password_regis" placeholder="Mật khẩu"></div>
                <div class="regis_password"><input type="password" name="password" id="confirmpassword" placeholder="Xác nhận mật khẩu"></div>
                <div class="regis_birthday">
                    <label>Ngày sinh <i class="fa-solid fa-circle-question"></i></label>
                    <div class="regis_birthdayinput"><input type="text" name="" id="birth_day" placeholder="Ngày">
                        <input type="text" name="" id="birth_month" placeholder="Tháng">
                        <input type="text" name="" id="birth_year" placeholder="Năm"></div>
                </div>
                <div class="regis_gender">
                    <label>Giới tính <i class="fa-solid fa-circle-question"></i></label>
                    <div class="regis_genderinput">
                        <div class="genderinput_male">
                            Nam<input type="radio" name="gender" id="" value="0">
                        </div>
                        <div class="genderinput_female">
                            Nữ<input type="radio" name="gender" id="" value="1">
                        </div>
                    </div>

                </div>
                <div class="regis_rule"><span>Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ của bạn lên Facebook. Tìm hiểu thêm.<br><br>

Bằng cách nhấp vào Đăng ký, bạn đồng ý với Điều khoản, Chính sách quyền riêng tư và Chính sách cookie của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ lúc nào.

</span></div>
                <div class="regis_confirm">
                    <button onclick="register()">Đăng ký</button>
                </div>
            </div>
        </div>
    </div>
    <div class="footer_login"><div class="footer_content"><span>Meta © 2024</span></div></div>`
    document.getElementById("wrapper").innerHTML = html;
}

function firstOpenApp() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser == null) {
        showLoginPage()
    } else {
        showHome();
    }
}

firstOpenApp();

function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let user = {
        username: username,
        password: password
    }
    axios.post(`http://localhost:8080/user/login`, user).then(function (response) {
        let currentUser = response.data;
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        showHome()
    })
}

function showRegisterPageModal() {
    let modal_register = document.getElementById("modal_register");
    console.log(modal_register)
    if (modal_register.classList.contains("open_modal_register")) {
        modal_register.classList.remove("open_modal_register")
    } else {
        modal_register.classList.add("open_modal_register")
    }
}

function register() {
    let fullname = document.getElementById("firstname").value.trim() +" " + document.getElementById("lastname").value.trim();
    let username = document.getElementById('username_regis').value;
    let password = document.getElementById('password_regis').value;
    let confirmPassword = document.getElementById('confirmpassword').value;
    let email = document.getElementById('email').value;
    let birthday = document.getElementById('birth_day').value.trim() + "/" + document.getElementById('birth_month').value.trim() + "/" + document.getElementById('birth_year').value.trim();
    let selectedGender;
    let genderInputs = document.getElementsByName("gender");
    for (let i = 0; i < genderInputs.length; i++) {
        if (genderInputs[i].checked) {
            selectedGender = +(genderInputs[i].value);
            break;
        }
    }
    let user = {
        fullname : fullname,
        username: username,
        password: password,
        confirmPassword: confirmPassword,
        email: email,
        birthday: birthday,
        gender: selectedGender
    }
    axios.post(`http://localhost:8080/user`, user).then(function (response) {
        showLoginPage();
    })
}
function logout() {
    localStorage.removeItem("currentUser");
    firstOpenApp();
}