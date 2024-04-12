function showLoginPage() {
    let html = `    <input type="text" id="username">
    <input type="text" id="password">
    <button onclick="login()">Login</button>`
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