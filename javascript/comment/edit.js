function showFormEdit(id) {
    axios.put('http://localhost:8080/comment')
        .then(function (response) {
            let comment = {};
            let commentList = response.data;
            for (let i = 0; i < commentList.length; i++) {
                if (commentList[i].id === id) {
                    comment  = commentList[i]
                }
            }
            axios.put('http://localhost:8080/comment').then(function (response) {
                let comments = response.data;
                let html = ` <div>
                    <input type="text" id="content" value="${comments.content}" placeholder="Content"><br>
                    <button onclick="edit()">Sửa Comment</button>
                    </div>`
                document.getElementById("main").innerHTML = html;
            })
        })
}
function edit() {
    let content = document.getElementById("content").value;
    let newComment = {
        content : content
    }
    axios.put(`http://localhost:8080/comment/${id}`, newComment).then(function (response) {
        showHomeCommmet();
    })
}