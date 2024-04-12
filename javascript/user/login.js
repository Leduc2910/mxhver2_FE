function showLoginPage() {
    let html = `    <input type="text" id="username">
    <input type="text" id="password">
    <button onclick="login()">Login</button>
    <button onclick="showRegisterPage()">Register</button>`
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
function showRegisterPage() {
    let html = `    <input type="text" id="username">
    <input type="text" id="password">
    <input type="text" id="confirmPassword">
    <input type="text" id="email">
    <input type="text" id="birthday">
    <button onclick="register()">Đăng ký</button>`
    document.getElementById("wrapper").innerHTML = html;
}
function register() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let email = document.getElementById('email').value;
    let birthday = document.getElementById('birthday').value;
    let user = {
        username: username,
        password: password,
        confirmPassword: confirmPassword,
        email: email,
        birthday: birthday
    }
    axios.post(`http://localhost:8080/user`, user).then(function (response) {
        showLoginPage();
    })
}