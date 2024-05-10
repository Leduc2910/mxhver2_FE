function showSearchPage() {
    let html = `
    <div class="contain_result_search">
            <div class="menu_friends">
                <div class="menu_fr_header">
                    <div class="menu_fr_title">Kết quả tìm kiếm</div>
                </div>
                <hr style="border: none;border-bottom: 1px solid #caced7">
                <div class="menu_fr_home menu_fr_item" >
                    <div class="fr_home_icon menu_fr_icon" ><i class="fa-solid fa-list"></i></div>
                    <div class="fr_home_label menu_fr_label">Bài viết</div>
                </div>
<!--                <div class="menu_fr_home menu_fr_item" >
                    <div class="fr_home_icon menu_fr_icon" ><i class="fa-solid fa-user-group"></i></div>
                    <div class="fr_home_label menu_fr_label">Mọi người</div>
                </div>-->
            </div>
            <div class="container_status" id="container_status_search">
            
            </div>
        </div>`;
    document.getElementById("container").innerHTML = html;
    searchStatus()
}
function searchStatus() {
    let q = document.getElementById("searchStatus").value;
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    axios.get(`http://localhost:8080/status/search?q=${q}`).then((response) => {
        let listStatus = response.data;
        let html = ``;
        for (let i = 0; i < listStatus.length; i++) {
            if (listStatus[i].authorization === 2) {
                continue;
            }
            let diffTimeStatus = getTimeDiff(listStatus[i].createAt);
            axios.all([axios.get(`http://localhost:8080/relationship/rela2user?id1=${listStatus[i].user.id}&id2=${currentUser.id}`), axios.get(`http://localhost:8080/relationship/rela2user?id1=${currentUser.id}&id2=${listStatus[i].user.id}`)]).then(axios.spread((rela1Response, rela2Response) => {
                let rela1 = rela1Response.data;
                let rela2 = rela2Response.data;
                if (((listStatus[i].authorization === 0) || ((rela1 != "" || rela2 != "") && (rela1.status === 1 || rela2.status === 1)) || (listStatus[i].user.id === currentUser.id)) && !(listStatus[i].authorization === 2 && listStatus[i].user.id !== currentUser.id)) {
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
                    </div></div>
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
                            html += `<div class="comment_more" onclick="commentDeleteSearch(${listStatus[i].commentSet[j].id})">
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
                        <div> <button class="create_comt_btnsent" onclick="addCommentSearch(${listStatus[i].id})"> <i class="fa-solid fa-paper-plane"></i></button> </div>                                 
                        <!--<div class="cmt_create_img"><i class="fa-regular fa-image"></i></div>-->
                    </div>
                </div>
            </div>`;
                }
                document.getElementById("container_status_search").innerHTML = html;
            }))
        }
    })
}

function commentDeleteSearch(id) {
    let isConfirm = confirm("Bạn có muốn xóa không?")
    if (isConfirm) {
        axios.delete(`http://localhost:8080/comment/${id}`).then((response) => {
            alert("Xóa thành công");
            showSearchPage();
        })
    }
}

function addCommentSearch(idStatus) {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let content = document.getElementById(`postComment_${idStatus}`).innerHTML;
    if (content != "") {
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
                showSearchPage()
            }).catch((e) => {
                console.log(e)
            })
        })
    }
}
