function showFormCreate() {
    document.getElementById('main').innerHTML = `
<div>
<input type="text" id="content" placeholder="Content">
<input type="text" id="user" placeholder="User">
<input type="text" id="usedImageSet" placeholder="UsedImageSet">
<input type="text" id="likedSet" placeholder="LikedSet">
<input type="text" id=" commentSet" placeholder=" CommentSet">
    <button onclick="create()">Thêm mới</button>
</div>
`
}
function create() {
    let content = document.getElementById('content').value;
    let user = document.getElementById('user').value;
    let usedImageSet = document.getElementById('userImageSet').value;
    let likeSet = document.getElementById('likeSet').value;
    let commentSet = document.getElementById('commentSet').value;

    let newPostList = {


        usedImageSet: {
            id: status_id
        },
        likeSet :{
                id : status_id
        },
        commentSet: {
            id : status_id
        }
    }

    axios.post('http://localhost:8080/post/add', newPostList).then(function (response) {
        showHome();
    })
}