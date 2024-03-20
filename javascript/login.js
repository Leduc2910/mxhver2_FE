function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let user = {
        username : username,
        password : password
    }
    axios.post(`http://localhost:8080/user/login`, user).then(function (response) {
        let currentUser = response.data;
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        // showHome()
    }).catch(function (error) {
        console.log(error.response.data)
    })
}
