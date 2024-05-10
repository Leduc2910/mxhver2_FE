function showAllStatus() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    axios.all([axios.get('http://localhost:8080/status')]).then(axios.spread((statusResponse) => {
        let listStatus = statusResponse.data;
        let html = `<div class="status_create" onclick="openModalCreateStatus()">
                <div class="create_avatar"><img src="${currentUser.avatar}" alt=""></div>
                <div class="create_input"><span>${currentUser.fullname} ơi, bạn đang nghĩ gì thế?</span></div>
            </div>`;
        for (let i = 0; i < listStatus.length; i++) {
            let diffTimeStatus = getTimeDiff(listStatus[i].createAt);
            axios.all([axios.get(`http://localhost:8080/relationship/rela2user?id1=${listStatus[i].user.id}&id2=${currentUser.id}`), axios.get(`http://localhost:8080/relationship/rela2user?id1=${currentUser.id}&id2=${listStatus[i].user.id}`)]).then(axios.spread((rela1Response, rela2Response) => {
                let rela1 = rela1Response.data;
                let rela2 = rela2Response.data;
                if ((listStatus[i].authorization === 0) || ((rela1 != "" || rela2 != "") && (rela1.status === 1 || rela2.status === 1)) || (listStatus[i].user.id === currentUser.id)) {
                    html += `<div class="status" id="status_${listStatus[i].id}">
                <div class="status_header">
                    <div class="status_avatar"><img src="${listStatus[i].user.avatar}" alt="" onclick="showProfile(${listStatus[i].user.id})"></div>
                    <div class="status_info">
                        <div class="status_name"><span onclick="showProfile(${listStatus[i].user.id})">${listStatus[i].user.fullname}</span>
                        </div>
                        <div class="status_time">
                            <span>${diffTimeStatus}</span>&nbsp;<span>&#8226;</span>&nbsp;`
                    if (listStatus[i].authorization === 0) {
                        html += `<span><i class="fa-solid fa-earth-asia"></i></span>`
                    } else if (listStatus[i].authorization === 1) {
                        html += `<span><i class="fa-solid fa-user-group"></i></span>`
                    } else if (listStatus[i].authorization === 2) {
                        html += `<span><i class="fa-solid fa-lock"></i></span>`
                    }
                    html += `</div>
                    </div>`
                    if (listStatus[i].user.id == currentUser.id) {
                        html += `<div class="status_option">
                        <i class="fa-solid fa-ellipsis" onclick="openModalOptionStatus(${listStatus[i].id})"></i>
                        <div class="option_status" id="option_status_${listStatus[i].id}" >
                            <div class="edit_status" onclick="openModalEditStatus(${listStatus[i].id})"><i class="fa-regular fa-pen-to-square"></i><span>Chỉnh sửa</span></div>
                            <div class="delete_status" onclick="openModalDeleteStatus(${listStatus[i].id})"><i class="fa-regular fa-trash-can"></i><span>Xóa</span></div>
                        </div>
                    </div>`
                    }
                    html += `</div>
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
                                
                            </div>
                        </div>`
                        if (currentUser.id === listStatus[i].commentSet[j].user.id) {
                            html += `<div class="comment_more" onclick="commentDelete(${listStatus[i].commentSet[j].id})">
                        <i class="fa-solid fa-trash-can" ></i>
                        </div>`
                        }
                        html += `</div>
                `
                    }
                    html += `</div><div class="create_comment">
                    <div class="comment_avatar"><img src="${currentUser.avatar}" alt=""></div>
                    <div class="comment_input">
                        <div class="cmt_create_input"><p id="postComment_${listStatus[i].id}" class="editable"
                                                         contentEditable="true"></p></div>
                        <div> <button class="create_comt_btnsent" onclick="addComment(${listStatus[i].id})"> <i class="fa-solid fa-paper-plane"></i></button> </div>                                 
                        <!--<div class="cmt_create_img"><i class="fa-regular fa-image"></i></div>-->
                    </div>
                </div>
            </div>`;
                }
                document.getElementById("container_status").innerHTML = html;
            }))
            }
    }))
}

function commentDelete(id) {
    let isConfirm = confirm("Bạn có muốn xóa không?")
    if (isConfirm) {
        axios.delete(`http://localhost:8080/comment/${id}`).then((response) => {
            alert("Xóa thành công");
            showAllStatus();
        })
    }
}

function addComment(idStatus) {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let content = document.getElementById(`postComment_${idStatus}`).innerHTML;
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

function postStatus() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let content = document.getElementById("createContent").innerHTML;
    let srcImage = null;
    if (document.getElementById('create_img') != null) {
        srcImage = document.getElementById('create_img').src;
    }
    let author = + document.getElementById("author").value;
    let status;
    if (content.trim() !== '') {
        if (srcImage !== null) {
            status = {
                user: {
                    id: currentUser.id
                }, content: content, usedImageSet: [{
                    source: srcImage
                }], authorization : author
            }
        } else {
            status = {
                user: {
                    id: currentUser.id
                }, content: content, authorization : author
            }
        }
    } else if (srcImage != null) {
        status = {
            user: {
                id: currentUser.id
            }, content: content, usedImageSet: [{
                source: srcImage
            }], authorization : author
        }
    }
    axios.post('http://localhost:8080/status', status).then((response) => {
        document.getElementById('createContent').textContent = '';
        let img = document.getElementById('create_img');
        if (img != null) {
            img.remove();
        }
        document.getElementById('create_delete_image').style.visibility = 'hidden';
        document.getElementById('contain_create_img').style.border = 'none';
        document.getElementById('postStatus').style.backgroundColor = '#ced0d4';
        document.getElementById('postStatus').disabled = true;
        showAllStatus()
        openModalCreateStatus()
    })
}

function deleteStatus() {
    let statusID = +(document.getElementById("remove_status").value);
    axios.delete(`http://localhost:8080/status/${statusID}`).then((response) => {
        openModalDeleteStatus();
        showAllStatus();

    })
}

function editStatus() {
    let targetStatus = +(document.getElementById("editStatus").value);
    if (targetStatus !== 0) {
        axios.get(`http://localhost:8080/status/${targetStatus}`).then((response) => {
            let status = response.data;
            let content = document.getElementById("editContent").innerHTML;
            let srcImage = null;
            if (document.getElementById('edit_img') != null) {
                srcImage = document.getElementById('edit_img').src;
            }
            let author =+ document.getElementById("editAuthor").value;
            if (content.trim() !== '') {
                if (srcImage !== null) {
                    let usedImageSet = [{source: srcImage}]
                    status.usedImageSet = usedImageSet;
                }
            } else if (srcImage != null) {
                let usedImageSet = [{source: srcImage}]
                status.usedImageSet = usedImageSet;
            }
            status.content = content;
            status.authorization = author;
            axios.put(`http://localhost:8080/status/${status.id}`, status).then((response) => {
                document.getElementById('editContent').textContent = '';
                let img = document.getElementById('edit_img');
                if (img != null) {
                    img.remove();
                }
                document.getElementById('create_deledit_image').style.visibility = 'hidden';
                document.getElementById('contain_edit_img').style.border = 'none';
                document.getElementById('editStatus').style.backgroundColor = '#ced0d4';
                document.getElementById('editStatus').disabled = true;
                showAllStatus()
                closeModalEditStatus()
            })
        })
    }
}
