function login() {
  let username = document.getElementsByClassName("email");
  let password = document.getElementsByClassName("password");


  let user = {
    username: username,
    password: password
  };

  axios.post(`http://localhost:8080/user/login`, user).then(function (response) {
    let currentUser = response.data;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    window.location.href = "../html/home.html";
  }).catch(function (error) {
    console.log(error.response.data);
  });
}

