function showProfile(targetID) {
    axios.get(`http://localhost:8080/user/${targetID}`).then(function (response) {
        let user = response.data;
        let html = `
        <div class="contain_profile">
            <div class="contain_profile_header">
                <div class="profile_cover_photo">
                    <img src="${user.avatar}"
                         alt="">
                </div>
                <div class="profile_info">
                    <div class="profile_info_avatar">
                        <img src="${user.avatar}"
                             alt="">
                    </div>
                    <div class="profile_info_name">
                        <div class="profile_info_fullname"><span>${user.fullname}</span></div>
                        <div class="profile_info_cfriend"><span>662</span><span> bạn bè</span></div>
                    </div>
                    <div class="profile_info_manager">
                        <button><i class="fa-solid fa-pen"></i> Chỉnh sửa trang cá nhân</button>
                    </div>
                </div>
                <div class="profile_bottom">
                    <div class="profile_functions">
                        <div class="profile_fun_status profile_fun_item">Bài viết</div>
                        <div class="profile_fun_description profile_fun_item">Giới thiệu</div>
                        <div class="profile_fun_friend profile_fun_item">Bạn bè</div>
                        <div class="profile_fun_image profile_fun_item">Ảnh</div>
                        <div class="profile_fun_video profile_fun_item">Video</div>
                        <div class="profile_fun_checkin profile_fun_item">Check in</div>
                        <div class="profile_fun_more profile_fun_item">Xem thêm &nbsp<i
                                class="fa-solid fa-caret-down"></i></div>
                    </div>
                    <div class="profile_functions_more">
                        <div class="function_more"><i class="fa-solid fa-ellipsis"></i></div>
                    </div>
                </div>
            </div>
            <div class="contain_profile_main">
                <div class="profile_main_left">
                    <div class="profile_description">
                        <div class="describe_header">Giới thiệu</div>
                        <div class="describe_description">${user.description}</div>
                        <div class="describe_address describe_item"><i class="fa-solid fa-house-chimney"></i><span>Sống tại ${user.address}</span>
                        </div>
                        <div class="describe_birthday describe_item"><i class="fa-solid fa-cake-candles"></i><span>${user.birthday}</span>
                        </div>
                        <div class="describe_gender describe_item"><i class="fa-solid fa-user"></i><span>Nam</span>
                        </div>
                        <div class="describe_createAt describe_item"><i class="fa-solid fa-clock"></i><span>Tham gia vào tháng 3 năm 2018</span>
                        </div>
                    </div>
                    <div class="profile_images">
                        <div class="images_top">
                            <div class="images_header">Ảnh</div>
                            <div class="images_more">
                                <button>Xem tất cả ảnh</button>
                            </div>
                        </div>
                    </div>
                    <div class="profile_friends">
                        <div class="friends_top">
                            <div class="friends_header">
                                <span>Bạn bè</span>
                            </div>
                            <div class="friends_more">
                                <button>Xem tất cả bạn bè</button>
                            </div>
                        </div>
                        <div class="friends_count">175 người bạn</div>
                    </div>
                </div>
                <div class="profile_main_right">
                    <div class="status_create" onclick="openModalCreateStatus()">
                        <div class="create_avatar"><img
                                src="https://firebasestorage.googleapis.com/v0/b/social-network-c9f60.appspot.com/o/images%2Favatar.jpg?alt=media&token=9ee21966-aaa1-45d2-b66c-5832b2755aa6"
                                alt=""></div>
                        <div class="create_input"><span>Minh Đức ơi, bạn đang nghĩ gì thế?</span></div>
                    </div>
                    <div id="status"></div>
                </div>
            </div>
        </div>`
        document.getElementById("container").innerHTML = html;
        showStatus(targetID)
    })
}
function showStatus(targetID) {
    axios.get(`http://localhost:8080/status/user/${targetID}`).then(function (response) {
        console.log(response.data)
        let listStatus = response.data;
        let html = "";
        for (let i = 0; i < listStatus.length; i++) {
            html += `
            <div class="status" id="status_${listStatus[i].id}">
                <div class="status_header">
                    <div class="status_avatar"><img
                            src="https://firebasestorage.googleapis.com/v0/b/social-network-c9f60.appspot.com/o/images%2Favatar.jpg?alt=media&token=9ee21966-aaa1-45d2-b66c-5832b2755aa6"
                            alt=""></div>
                    <div class="status_info">
                        <div class="status_name"><span>${listStatus[i].user.fullname}</span>
                        </div>
                        <div class="status_time">
                            <span>2 giờ</span>
                        </div>
                    </div>
                    <div class="status_option">
                        <i class="fa-solid fa-ellipsis"
                           onclick="openModalOptionStatus(${listStatus[i].id})"></i>
                        <div class="option_status" id="option_status_${listStatus[i].id}">
                            <div class="edit_status"><i
                                    class="fa-regular fa-pen-to-square"></i><span>Chỉnh sửa</span></div>
                            <div class="delete_status" onclick="openModalDeleteStatus(${listStatus[i].id})"><i
                                    class="fa-regular fa-trash-can"></i><span>Xóa</span></div>
                        </div>
                    </div>
                </div>
                <div class="status_content">
                    <div class="content"><span>${listStatus[i].content}</span></div>
                    <div class="content_img" id="content_img"><img src="${listStatus[i].usedImageSet}" alt=""></div>
                </div>
                <div class="status_bottom">
                    <div class="status_detail">
                        <div class="count_like"><span id="totalLiked_${listStatus[i].id}">2</span><span> lượt thích</span>
                        </div>
                        <div class="comment_share">
                            <div class="count_comment"><span>2</span><span> bình luận</span>
                            </div>
                            <div class="count_share"><span>0 lượt chia sẻ</span></div>
                        </div>
                    </div>
                    <hr>
                    <div class="status_function">
                        <div class="function_like" id="liked_${listStatus[i].id}"
                             onclick="likePost(${listStatus[i].id})">
                            <i class="fa-regular fa-thumbs-up"></i><span>Thích</span>
                        </div>
                        <div class="function_comment"><i
                                class="fa-regular fa-comment"></i><span>Bình luận</span></div>
                        <div class="function_share"><i class="fa-solid fa-share"></i><span>Chia sẻ</span></div>
                    </div>
                    <hr>
                </div>
                <div class="contain_comment">
                    <div class="comment">
                        <div class="comment_avatar">
                            <img src="https://firebasestorage.googleapis.com/v0/b/social-network-c9f60.appspot.com/o/images%2Favatar.jpg?alt=media&token=9ee21966-aaa1-45d2-b66c-5832b2755aa6"
                                 alt="">
                        </div>
                        <div class="comment_right">
                            <div class="comment_top">
                                <div class="comment_name">Lê Minh Đức</div>
                                <div class="comment_content">Đúng</div>
                            </div>
                            <div class="comment_bottom">
                                <div class="comment_createAt">
                                    2 giờ
                                </div>
                                <div class="comment_like"><span>Thích</span></div>
                                <div class="comment_reply"><span>Phản hồi</span></div>
                                <div class="comment_delete">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="create_comment">
                    <div class="comment_avatar"><img
                            src="https://firebasestorage.googleapis.com/v0/b/social-network-c9f60.appspot.com/o/images%2Favatar.jpg?alt=media&token=9ee21966-aaa1-45d2-b66c-5832b2755aa6"
                            alt=""></div>
                    <div class="comment_input">
                        <div class="cmt_create_input"><p id="editableParagraph" class="editable"
                                                         contentEditable="true"></p></div>
                        <div>
                            <button onclick="addComment(${listStatus[i].id})"><i
                                    class="fa-solid fa-paper-plane"></i></button>
                        </div>
                        <div class="cmt_create_img"><i class="fa-regular fa-image"></i></div>
                    </div>
                </div>
            </div>`
        }
        document.getElementById("status").innerHTML = html;
    })
}