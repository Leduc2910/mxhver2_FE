function showHomeCommmet() {
    axios.get('http://localhost:8080/comment')
        .then(function (response) {
                let commentlist = response.data;
                let html = ` <table border="1">
        <tr>
            <th>ID</th>
            <th>User</th>
            <th>Content</th>
            <th>Ngày Comment</th>
          
            <th colspan="2">Action</th>
        </tr>`
                for (let i = 0; i < commentlist.length; i++) {
                 console.log(commentlist[i]);
                    html += `
            <tr>
                <td>${commentlist[i].id}</td>
                <td>${commentlist[i].user.username}</td>
                <td>${commentlist[i].content}</td>
                <td>${commentlist[i].createAt}</td>
              
                <td><button onclick="edit(${commentlist[i].id})">Sửa</button</td>
                <td><button onclick="remove(${commentlist[i].id})">Xóa</button></td>
            </tr>
            `
                }
                html += '</table>'
                document.getElementById("main").innerHTML = html;
            }
        )
}
function remove(id) {
    let isConfirm = confirm("Chắc chắn chứ?")
    if (isConfirm) {
        axios.delete(`http://localhost:8080/comment/${id}`).then((response) => {
            alert("Xóa thành công");
            showHomeCommmet();
        })
    } else {
        alert("Rảnh à")
    }
}

showHomeCommmet()