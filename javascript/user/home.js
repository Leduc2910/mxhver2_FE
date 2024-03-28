function showHome() {
    axios.get('http://localhost:8080/user')
        .then(function (response) {
                let userlist = response.data;
                let html = ` <table border="1">
        <tr>
            <th>ID</th>
            <th>UserName</th>
            <th>PassWord</th>
            <th>ConfirmPassword </th>
            <th>Email</th>
            <th>Phone</th>
            <th>Birthday </th>
            <th>Avatar </th>
            <th>FullName </th>
            <th>Address </th>
            <th>Hobby </th>
            <th colspan="2">Action</th>
        </tr>`
                for (let i = 0; i < userlist.length; i++) {
                    html += `
            <tr>
                <td>${userlist[i].id}</td>
                <td>${userlist[i].username}</td>
                <td>${userlist[i].password}</td>
                <td>${userlist[i].confirmPassword}</td>
                <td>${userlist[i].email}</td>
                <td>${userlist[i].phone}</td>
                <td>${userlist[i].birthday}</td>
                <td>${userlist[i].avatar}</td>
                <td>${userlist[i].fullname}</td>
                <td>${userlist[i].address}</td>
                <td>${userlist[i].hobby}</td>
                <td><button >Sửa</button</td>
                <td><button >Xóa</button></td>
            </tr>
            `
                }
                html += '</table>'
                document.getElementById("main").innerHTML = html;
            }
        )
}

showHome()