function showLoginPage() {
    let html = `<nav class="navbar">
    <img class="logo" src="fb.png">
    <form class="login_form">
        <div class="email">
            <div class="font">Email or Phone</div>
            <input type="text" name="">
        </div>
        <div class="password">
            <div class="font">Password</div>
            <input type="password" name="">
        </div>
        <button class="login_btn" onclick="login()">Login</button>
    </form>
</nav>

<section>
    <div class="logo_body">
        <img class="logobdy" src="fbbdy.png">
        <p class="like_font font1">Thanks for stopping by!</p>
        <p class="like_font">We hope to see you again soon.</p>
    </div>

    <div class="signup_body">
        <p class="acc_crt">Create an account</p>
        <p class="free_hint">It's free and always will be.</p>
        <form class="signup_form">
            <div>
                <input class="firstname" type="text" name="" placeholder="First name">
                <input class="lastname" type="text" name="" placeholder="Last name">
                <input class="email" type="text" name="" placeholder="Mobile number or Email">
                <input class="password" type="password" name="" placeholder="Password">
                <input class="password2" type="password" name="" placeholder="Confirm password">
            </div>
           

            <input type="radio" name="gender" value="male">
            <input type="radio" name="gender" value="female">

            <p class="font">Male</p>
            <p class="font font2">Female</p>
            <p class="agreement">By clicking Sign Up, you agree to our <a href="#">Terms, Data Policy and Cookies Policy.</a> You may receive SMS Notifications from us and can opt out any time.</p>

            <button class="signup" onclick="register()">Sign Up</button>

        </form>
    </div>

</section>
`;
    document.getElementById('wrapper').innerHTML = html;
}

showLoginPage();

function login() {
    let username = document.getElementById("username_login").value;
    let password = document.getElementById("password_login").value;
    let user = {
        username: username,
        password: password
    };
    axios.post(`http://localhost:8080/user/login`, user).then(function (response) {
        let currentUser = response.data;
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        showHome();
    }).catch(function (error) {
        console.log(error.response.data);
    });
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
    };
    axios.post('http://localhost:8080/user', user).then(function (response) {
        showLoginPage();
    }).catch(function (error) {
        console.log(error.response.data);
    });
}
