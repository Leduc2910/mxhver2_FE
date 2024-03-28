function showStatus() {
    axios.get('http://localhost:8080/status')
        .then(function (response) {
                let statuslist = response.data;
                let html = ` <table border="1">
        <tr>
            <th>ID</th>
            <th>Content</th>
            <th>User</th>
            <th>UserImg</th>
            <th>Like</th>
            <th>Comment</th>
            <th>DateCreated</th>
            <th colspan="2">Action</th>
        </tr>`
                for (let i = 0; i < statuslist.length; i++) {
                    html += `
            <tr>
                <td>${statuslist[i].id}</td>
                <td>${statuslist[i].content}</td>
                <td>${statuslist[i].user}</td>;
           
               
                <td><button >Sửa</button</td>
                <td><button >Xóa</button></td>
            </tr>
            `
                }
                html += '</table>'
                document.getElementById("main1").innerHTML = html;
            }
        )
}

showStatus()