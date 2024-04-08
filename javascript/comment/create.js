function showFormCreate() {
    document.getElementById('main').innerHTML = `
    <div>
    <input type="text" id="userID" placeholder="Name">
    <input type="text" id="content" placeholder="Content">
    <input type="text" id="statusID" placeholder="StatusID">
    <button onclick="create()">Comment</button>
</div>
    `
}

function create() {
    let userId = document.getElementById('userID').value;
    let content = document.getElementById('content').value;
    let statusID = document.getElementById('statusID').value;

    let newComment = {
        user: {
            id:userId
        },
        content : content,
        status:{
            id :statusID
        },
        createAt : new Date()
    }

    axios.post('http://localhost:8080/comment', newComment).then(function (response) {
        showHomeCommmet();
    })
}