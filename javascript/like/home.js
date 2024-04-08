function showHomeLike() {
    axios.get('http://localhost:8080/like')
        .then(function (response) {
                let likelist = response.data;
                let html = ` <table border="1">
        <tr>
            <th>ID</th>
            <th>UserName</th>
            
            <th colspan="2">Action</th>
        </tr>`
                for (let i = 0; i < likelist.length; i++) {
                    html += `
            <tr>
                <td>${likelist[i].id}</td>
                <td>${likelist[i].user.username}</td>
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

showHomeLike()