let currentUser = JSON.parse(localStorage.getItem("currentUser"))
function showHome() {
    axios.get(`http://localhost:8080/user/${currentUser.id}`).then(function (response) {
        let user = response.data;
        let html= `
        <div>
            <img style="height: 200px; width: 200px" src="${user.avatar}" alt="">
            <p>${user.fullname}</p>
            <p>${user.hobby}</p>
            <p>${user.address}</p>
            <p>${user.birthday}</p>
        </div>
        <div id="status"></div>
        `;
        document.getElementById("main").innerHTML = html;
        showStatus()
    })
}
showHome()

function showStatus() {
    axios.get(`http://localhost:8080/status/${currentUser.id}`).then(function (response) {
        let status = response.data;
        let html = `<div>
            <p>${status.content}</p>`;
        for (let i = 0; i < status.usedImageSet.length; i++) {
            html += `<img style="height: 200px; width: 200px" src="${status.usedImageSet[i]}">`
        }
        html += `</div>`;
        document.getElementById("status").innerHTML = html;
    })
}