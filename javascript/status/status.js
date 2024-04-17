function showAllStatus() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    axios.all([axios.get('http://localhost:8080/status'), axios.get('http://localhost:8080/comment')]).then(axios.spread((statusResponse, commentResponse) => {
        let listStatus = statusResponse.data;
        let listComment = commentResponse.data;
        let html = `<div class="status_create" onclick="openModalCreateStatus()">
                <div class="create_avatar"><img src="https://firebasestorage.googleapis.com/v0/b/social-network-c9f60.appspot.com/o/images%2Favatar-default.png?alt=media&token=5d1fe836-096e-45b8-a2ea-a2028072305c" alt=""></div>
                <div class="create_input"><span>Minh Đức ơi, bạn đang nghĩ chóa gì thế?</span></div>
            </div>`;
        for (let i = 0; i < listStatus.length; i++) {
            let diffTimeStatus = getTimeDiff(listStatus[i].createAt);
            html += `<div class="status" id="status_${listStatus[i].id}">
                <div class="status_header">
                    <div class="status_avatar"><img src="${listStatus[i].user.avatar}" alt=""></div>
                    <div class="status_info">
                        <div class="status_name"><span>${listStatus[i].user.username}</span>
                        </div>
                        <div class="status_time">
                            <span>${diffTimeStatus}</span>
                        </div>
                    </div>
                    <div class="status_option">
                        <i class="fa-solid fa-ellipsis" onclick="openModalOptionStatus(${listStatus[i].id})"></i>
                        <div class="option_status" id="option_status_${listStatus[i].id}" >
                            <div class="edit_status"><i class="fa-regular fa-pen-to-square"></i><span>Chỉnh sửa</span></div>
                            <div class="delete_status"><i class="fa-regular fa-trash-can"></i><span>Xóa</span></div>
                        </div>
                    </div>
                </div>
                <div class="status_content">
                    <div class="content"><span>${listStatus[i].content}</span></div>`
            if (listStatus[i].usedImageSet.length != 0) {
                html += `<div class="content_img">
                        <img src="${listStatus[i].usedImageSet[0].source}" alt="">
                    </div>`
            }
            html += `</div>
                <div class="status_bottom">
                    <div class="status_detail">
                        <div class="count_like"><span id="totalLiked_${listStatus[i].id}">${listStatus[i].likedSet.length}</span><span> lượt thích</span></div>
                        <div class="comment_share">
                            <div class="count_comment"><span>${listStatus[i].commentSet.length}</span><span> bình luận</span></div>
                            <div class="count_share"><span>0 lượt chia sẻ</span></div>
                        </div>
                    </div>
                    <hr>
                    <div class="status_function">
                        <div class="function_like" id="liked_${listStatus[i].id}" onclick="likePost(${listStatus[i].id})">`
            let isLiked = false;
            for (let j = 0; j < listStatus[i].likedSet.length; j++) {
                if (currentUser.id === listStatus[i].likedSet[j].user.id) {
                    isLiked = true;
                    break;

                }
            }
            if (isLiked) {
                html += `<i class="fa-regular fa-thumbs-up" style="color: dodgerblue"></i><span style="color: dodgerblue">Thích</span>`
            } else {
                html += `<i class="fa-regular fa-thumbs-up"></i><span >Thích</span>`

            }

            html += `</div><div class="function_comment"><i class="fa-regular fa-comment"></i><span>Bình luận</span></div>
                        <div class="function_share"><i class="fa-solid fa-share"></i><span>Chia sẻ</span></div>
                    </div>
                    <hr>
                </div>
                <div class="contain_comment">`
            for (let j = 0; j < listStatus[i].commentSet.length; j++) {
                let diffTimeComment = getTimeDiff(listStatus[i].commentSet[j].createAt)
                html += `<div class="comment">
                        <div class="comment_avatar">
                            <img src="${listStatus[i].commentSet[j].user.avatar}" alt="">
                        </div>
                        <div class="comment_right">
                            <div class="comment_top">
                                <div class="comment_name">${listStatus[i].commentSet[j].user.username}</div>
                                <div class="comment_content">${listStatus[i].commentSet[j].content}</div>
                            </div>
                            <div class="comment_bottom">
                                <div class="comment_createAt">
                                    ${diffTimeComment}
                                </div>
                                <div class="comment_like"><span>Thích</span></div>
                                <div class="comment_reply"><span>Phản hồi</span></div>
                                <div class="comment_delete"><button onclick="commentDelete(${listStatus[i].commentSet[j].id})">Xóa</button></div>
                            </div>
                        </div>
                    </div>
                `
            }
            html += `</div><div class="create_comment">
                    <div class="comment_avatar"><img src="${currentUser.avatar}" alt=""></div>
                    <div class="comment_input">
                        <div class="cmt_create_input"><p id="editableParagraph" class="editable"
                                                         contentEditable="true"></p></div>
                        <div> <button onclick="addComment(${listStatus[i].id})"> <i class="fa-solid fa-paper-plane"></i></button> </div>                                 
                        <div class="cmt_create_img"><i class="fa-regular fa-image"></i></div>
                    </div>
                </div>
            </div>`;
        }
        document.getElementById("container_status").innerHTML = html;
    }))
}
function commentDelete(id) {
    let isConfirm = confirm("Chắc chắn chứ?")
    if (isConfirm) {
        axios.delete(`http://localhost:8080/comment/${id}`).then((response) => {
            alert("Xóa thành công");
            showAllStatus();
        })
    } else {
        alert("Rảnh à")
    }
}
function addComment(idStatus) {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let content = document.getElementById('editableParagraph').innerHTML;
    axios.get(`http://localhost:8080/status/${idStatus}`).then((response) => {
        let status = response.data;
        let newComment = {
            user: {
                id: currentUser.id
            },
            content: content
        }
        status.commentSet.push(newComment);
        console.log(status)
        axios.put(`http://localhost:8080/status/${idStatus}`, status).then(function (response) {
            showAllStatus()
        }).catch((e) => {
            console.log(e)
        })
    })
}
function likePost(statusID) {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    axios.get(`
                http://localhost:8080/status/${statusID}`).then(function (response) {
        let status = response.data;
        let isLiked = false;
        let liked;
        for (let i = 0; i < status.likedSet.length; i++) {
            if (currentUser.id === status.likedSet[i].user.id) {
                isLiked = true;
                liked = status.likedSet[i];
                break;
            }
        }
        if (isLiked) {
            axios.delete(`http://localhost:8080/like/${liked.id}`).then(function (response) {
                document.getElementById(`totalLiked_${statusID}`).innerHTML = status.likedSet.length - 1;
                updateLikeButton(statusID, isLiked)
            })
        } else {
            let newLike = {
                user: {
                    id: currentUser.id
                }
            }
            status.likedSet.push(newLike)
            axios.put(`http://localhost:8080/status/${status.id}`, status).then(function (response) {
                document.getElementById(`totalLiked_${statusID}`).innerHTML = status.likedSet.length;
                updateLikeButton(statusID, isLiked)

            })
        }
    })
}

function updateLikeButton(statusID, isLiked) {
    const div = document.getElementById(`liked_${statusID}`);
    if (div) {
        div.innerHTML = !isLiked ? '<i class="fa-regular fa-thumbs-up" style="color: dodgerblue"></i><span style="color: dodgerblue">Thích</span>' : '<i class="fa-regular fa-thumbs-up"></i><span>Thích</span>';
    }
}