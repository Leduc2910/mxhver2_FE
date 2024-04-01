function showProfile() {
     let user = JSON.parse(localStorage.getItem("currentUser"));
    console.log(user)
    let html  = `<div class="banner">
    <div class="banner-title d-flex flex-column justify-content-center align-items-center">
        <img src="${user.avatar}" alt="img" class="rounded-circle" width="80px" height="80px">
    </div>
    <div class="infor">    <p>${user.fullname}</p>
    <p>${user.email}</p>
    <p>${user.birthday}</p>
    <p>${user.hobby}</p>
    <p>${user.address}</p></div>
</div>

<div class="grid-template container my-4" id="my-status">  
    
</div>`;
    document.getElementById('container').innerHTML = html;
    showStatus()
}

function showStatus() {
    axios.get('http://localhost:8080/status').then(function (response) {
        let status = response.data;
        console.log(status)
        let html = "";
        for (let i = 0; i < status.length; i++) {
            html += `
            <div>
                ${status[i].content}
                ${status[i].createAt}
            `
            for (let j = 0; j < status[i].usedImageSet.length; j++) {
                html += `<img src="${status[i].usedImageSet[j].source}}" alt="">`
            }
            html += `</div>`
        }
        document.getElementById("my-status").innerHTML = html;
    })
}