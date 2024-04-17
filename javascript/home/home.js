function showHome() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let html = `    <div class="navbar">
        <div class="nav_left">
            <div class="nav_logo">
                <i class="fa-brands fa-facebook" style="color: #005eff;"></i>
            </div>
            
            <div class="nav_search">
                <div class="search_container">
                    <i class="fa-solid fa-magnifying-glass" style="color: #6e6e6e;"></i>
                    <button onclick="searchByNameStatus()">Tìm kiem</button>
                    <input type="text" name="" id="searchname" placeholder="Tìm kiếm trên Facebook">
                </div>
            </div>
        </div>
        <div class="nav_middle">
            <div class="nav_home">
                <i class="fa-solid fa-house nav_item"></i>
            </div>
            <div class="nav_group">
                <i class="fa-solid fa-user-group nav_item"></i>
            </div>
            <div class="nav_video">
                <i class="fa-solid fa-film nav_item"></i>
            </div>
            <div class="nav_market">
                <i class="fa-solid fa-shop nav_item"></i>
            </div>

        </div>
        <div class="nav_right">
            <div class="nav_menu nav_right_item"><i class="fa-solid fa-bars"></i></div>
            <div class="nav_message nav_right_item"><i class="fa-brands fa-facebook-messenger"></i></div>
            <div class="nav_noti nav_right_item"><i class="fa-solid fa-bell"></i></div>
            <div class="nav_avatar nav_right_item"><img
                    src="${currentUser.avatar}"
                    alt=""></div>
        </div>
    </div>
    <div id="container">
        <div class="container_shortcut"></div>
        <div class="container_status" id="container_status"></div>
        <div class="container_friend"></div>
    </div>`
    document.getElementById("wrapper").innerHTML = html;
    showAllStatus()

}

function searchByNameStatus() {
    let inSearch = document.getElementById("searchname").value;
    axios.get(`http://localhost:8080/status/search?name=${inSearch}`)
        .then(function (response) {
            let listStatus = response.data;
            let html =`<div class="status_create">
                <div class="create_avatar"><img src="https://firebasestorage.googleapis.com/v0/b/social-network-c9f60.appspot.com/o/images%2Favatar-default.png?alt=media&token=5d1fe836-096e-45b8-a2ea-a2028072305c" alt=""></div>
                <div class="create_input"><span>Minh Đức ơi, bạn đang nghĩ chóa gì thế?</span></div>
                <div class="modal_create_status"></div>
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
                            <div class="delete_status"><i class="fa-regular fa-trash-can"></i><button onclick="deleteStatus(${listStatus[i].id})">Xóa</button></div>
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
                // for (let j = 0; j < listStatus[i].likedSet.length; j++) {
                //     if (currentUser.id === listStatus[i].likedSet[j].user.id) {
                //         isLiked = true;
                //         break;
                //
                //     }
                // }
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
                    <div class="comment_avatar"><img src="${''}" alt=""></div>
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
        })
}

showAllStatus()
