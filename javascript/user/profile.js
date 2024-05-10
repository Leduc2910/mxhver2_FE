function showProfile(targetID) {
    axios.get(`http://localhost:8080/user/${targetID}`).then((response) => {
        let currentProfile = response.data;
        let currentUser = JSON.parse(localStorage.getItem("currentUser"));
        axios.get(`http://localhost:8080/status/user/${currentProfile.id}`).then((response) => {
            axios.get(`http://localhost:8080/relationship/rela2user?id1=${currentProfile.id}&id2=${currentUser.id}`).then((relaResponse) => {
                axios.get(`http://localhost:8080/relationship/rela2user?id1=${currentUser.id}&id2=${currentProfile.id}`).then((relaResponse2) => {
                    axios.get(`http://localhost:8080/relationship/friend/${currentProfile.id}`).then((friendResponse) => {
                        let listStatus = response.data;
                        let relationship = relaResponse.data;
                        let relationship2 = relaResponse2.data;
                        let listRela = friendResponse.data;
                        let countfriend = 0;
                        for (let i = 0; i < listRela.length; i++) {
                            if (listRela[i].status === 1) {
                                countfriend++;
                            }
                        }
                        let html = `<div class="contain_profile">
            <div class="contain_profile_header">
                <div class="profile_cover_photo">
                 <img src="${currentProfile.coverImage}" alt="">
                </div>
                <div class="profile_info">
                    <div class="profile_info_avatar">
                        <img src="${currentProfile.avatar}" alt="">
                    </div>
                    <div class="profile_info_name">
                        <div class="profile_info_fullname"><span>${currentProfile.fullname}</span></div>`
                        if (countfriend !== 0) {
                            html += ` <div class="profile_info_cfriend"><span>${countfriend}</span><span> bạn bè</span></div>`;
                        }

                        html += `</div>
                    <div class="profile_info_manager">`
                        if (relationship !== "" && relationship.status === 0 && relationship.user1.id !== currentUser.id) {
                            html += `<button class="pro_btn_acpt" onclick="acceptFriendPro(${relationship.id},${currentProfile.id})"><i class="fa-solid fa-user-check"></i> Chấp nhận lời mời</button>
                    <button class="pro_btn_mess"><i class="fa-brands fa-facebook-messenger"></i> Nhắn tin</button>`
                        } else if (currentProfile.id === currentUser.id) {
                            html += `<button class="pro_btn_edit" onclick="openModalEditProfile()"><i class="fa-solid fa-pen"></i> Chỉnh sửa trang cá nhân</button>`;
                        } else if (relationship !== "" && relationship.status === 1) {
                            html += `<button class="pro_btn_fr"><i class="fa-solid fa-user-check"></i> Bạn bè</button>
                    <button class="pro_btn_mess2"><i class="fa-brands fa-facebook-messenger"></i> Nhắn tin</button>`
                        } else if (relationship === "" && relationship2 === "") {
                            html += `<button class="pro_btn_acpt" onclick="addFriendPro(${currentProfile.id})"><i class="fa-solid fa-user-plus"></i> Thêm bạn bè</button>
                    <button class="pro_btn_mess"><i class="fa-brands fa-facebook-messenger"></i> Nhắn tin</button>`
                        } else if (relationship2 !== "" && relationship2.user1.id === currentUser.id && relationship2.status === 0) {
                            html += `<button class="pro_btn_acpt" onclick="delRequestPro(${relationship2.id}, ${currentProfile.id})"><i class="fa-solid fa-user-xmark"></i> Hủy lời mời</button>
                    <button class="pro_btn_mess"><i class="fa-brands fa-facebook-messenger"></i> Nhắn tin</button>`

                        }
                        html += `</div>
                </div>`
                        if (relationship !== "" && relationship.status === 0) {
                            html += `<div class="profile_acpt_friend">
                <div class="pro_acpt_title">${currentProfile.fullname} đã gửi lời mời cho bạn</div>
                <div class="pro_acpt_buttons">
                <button class="pro_btn_acpt" onclick="acceptFriendPro(${relationship.id},${currentProfile.id})">Chấp nhận lời mời</button>
                <button class="pro_btn_mess" onclick="delRequestPro(${relationship.id}, ${currentProfile.id})">Xóa lời mời</button>
                </div></div>`
                        }
                        html += `<div class="profile_bottom">
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
                        <div class="describe_description">${currentProfile.description}</div>`
                        if (currentProfile.address != null) {
                            html += `<div class="describe_address describe_item"><i class="fa-solid fa-house-chimney"></i><span>Sống tại ${currentProfile.address}</span>
                        </div>`
                        }
                        html += `<div class="describe_birthday describe_item"><i class="fa-solid fa-cake-candles"></i><span>${currentProfile.birthday}</span>
                        </div>`
                        if (currentProfile.gender == 0) {
                            html += `<div class="describe_gender describe_item"><i class="fa-solid fa-user"></i><span>Nam</span>
                        </div>`
                        } else {
                            html += `<div class="describe_gender describe_item"><i class="fa-solid fa-user"></i><span>Nữ</span>
                        </div>`
                        }

                        html += `
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
                <div class="profile_main_right">`
                        if (currentProfile.id == currentUser.id) {
                            html += `<div class="status_create" onclick="openModalCreateStatusPro()">
                        <div class="create_avatar"><img src="${currentUser.avatar}" alt=""></div>
                        <div class="create_input"><span>${currentUser.fullname} ơi, bạn đang nghĩ gì thế?</span></div>
                    </div>`
                        }
                        for (let i = 0; i < listStatus.length; i++) {
                            let timeDiffStatus = getTimeDiff(listStatus[i].createAt)
                            html += `<div class="status" id="status_${listStatus[i].id}">
                        <div class="status_header">
                            <div class="status_avatar"><img src="${currentProfile.avatar}" alt=""></div>
                            <div class="status_info">
                                <div class="status_name"><span>${currentProfile.fullname}</span>
                                </div>
                                <div class="status_time">
                                    <span>${timeDiffStatus}</span>&nbsp;<span>&#8226;</span>&nbsp;`
                            if (listStatus[i].authorization === 0) {
                                html += `<span><i class="fa-solid fa-earth-asia"></i></span>`
                            } else if (listStatus[i].authorization === 1) {
                                html += `<span><i class="fa-solid fa-user-group"></i></span>`
                            } else if (listStatus[i].authorization === 2) {
                                html += `<span><i class="fa-solid fa-lock"></i></span>`
                            }
                                html += `</div>
                            </div>`
                            if (currentProfile.id === currentUser.id) {
                                html += `<div class="status_option">
                                <i class="fa-solid fa-ellipsis"
                                   onclick="openModalOptionStatus(${listStatus[i].id})"></i>
                                <div class="option_status" id="option_status_${listStatus[i].id}">
                                    <div class="edit_status" onclick="openModalEditStatusPro(${listStatus[i].id})"><i
                                            class="fa-regular fa-pen-to-square"></i><span>Chỉnh sửa</span></div>
                                    <div class="delete_status" onclick="openModalDeleteStatusPro(${listStatus[i].id})"><i
                                            class="fa-regular fa-trash-can"></i><span>Xóa</span></div>
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
                                <div class="count_like"><span id="totalLiked_${listStatus[i].id}">${listStatus[i].likedSet.length}</span><span> lượt thích</span>
                                </div>
                                <div class="comment_share">
                                    <div class="count_comment"><span>${listStatus[i].commentSet.length}</span><span> bình luận</span>
                                    </div>
                                    <div class="count_share"><span>0 lượt chia sẻ</span></div>
                                </div>
                            </div>
                            <hr>
                            <div class="status_function">
                                <div class="function_like" id="liked_${listStatus[i].id}"
                                     onclick="likePost(${listStatus[i].id})">`
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
                            html += `</div>
                                <div class="function_comment"><i
                                        class="fa-regular fa-comment"></i><span>Bình luận</span></div>
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
                                    html += `<div class="comment_more" onclick="commentDeletePro(${listStatus[i].commentSet[j].id}, ${currentProfile.id})">
                        <i class="fa-solid fa-trash-can" ></i>
                        </div>`
                                }

                                html += `</div>
                `
                            }
                            html += `</div>
                        <div class="create_comment">
                            <div class="comment_avatar"><img src="${currentUser.avatar}" alt=""></div>
                            <div class="comment_input">
                                <div class="cmt_create_input"><p id="postComment2_${listStatus[i].id}" class="editable"
                                                                 contentEditable="true"></p></div>
                                <div>
                                    <button class="create_comt_btnsent" onclick="addCommentPro(${listStatus[i].id}, ${targetID})"><i
                                            class="fa-solid fa-paper-plane"></i></button>
                                </div>
                                <!--<div class="cmt_create_img"><i class="fa-regular fa-image"></i></div>-->
                            </div>
                        </div>
                    </div>`
                        }
                        html += `</div>
            </div>
        </div>`;
                        document.getElementById("container").innerHTML = html;
                    })
                })
            })
        })
    })
}

function acceptFriendPro(targetRela, targetPro) {
    axios.get(`http://localhost:8080/relationship/${targetRela}`).then((relaResponse) => {
        let rela = relaResponse.data;
        rela.status = 1;
        axios.put(`http://localhost:8080/relationship/${rela.id}`, rela).then((response) => {
            showProfile(targetPro);
        })
    })
}

function delRequestPro(targetRela, targetPro) {
    axios.delete(`http://localhost:8080/relationship/${targetRela}`).then((response) => {
        showProfile(targetPro);
    })
}

function addFriendPro(targetUserID) {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let targetUser = {
        id: targetUserID
    }
    let relationship = {
        user1: currentUser,
        user2: targetUser
    }
    axios.post(`http://localhost:8080/relationship`, relationship).then((response) => {
        showProfile(targetUserID)
    })
}

function postStatusPro() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let content = document.getElementById("createContent2").innerHTML;
    let srcImage = null;
    if (document.getElementById('create_img2') != null) {
        srcImage = document.getElementById('create_img2').src;
    }
    let status;
    if (content.trim() !== '') {
        if (srcImage !== null) {
            status = {
                user: {
                    id: currentUser.id
                }, content: content, usedImageSet: [{
                    source: srcImage
                }]
            }
        } else {
            status = {
                user: {
                    id: currentUser.id
                }, content: content
            }
        }
    } else if (srcImage != null) {
        status = {
            user: {
                id: currentUser.id
            }, content: content, usedImageSet: [{
                source: srcImage
            }]
        }

    }
    axios.post('http://localhost:8080/status', status).then((response) => {
        document.getElementById('createContent2').textContent = '';
        let img = document.getElementById('create_img2');
        if (img != null) {
            img.remove();
        }
        document.getElementById('create_delete_image2').style.visibility = 'hidden';
        document.getElementById('contain_create_img2').style.border = 'none';
        document.getElementById('postStatus2').style.backgroundColor = '#ced0d4';
        document.getElementById('postStatus2').disabled = true;
        showProfile(currentUser.id)
        openModalCreateStatusPro()
    })
}

function deleteStatusPro() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let statusID = +(document.getElementById("remove_status2").value);
    axios.delete(`http://localhost:8080/status/${statusID}`).then((response) => {
        openModalDeleteStatusPro();
        showProfile(currentUser.id)
    })
}

function addCommentPro(idStatus, targetID) {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let content = document.getElementById(`postComment2_${idStatus}`).innerHTML;
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
            showProfile(targetID)
        }).catch((e) => {
            console.log(e)
        })
    })
}

function updateInformation() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let newAvatar = document.getElementById("edit_avatar").src;
    let newCoverImage = document.getElementById("edit_cover_image").src;
    let newDescription = document.getElementById("edit_description").value;
    let newAddress = document.getElementById("edit_address").value;
    if (newAddress.trim() === "") {
        newAddress = null;
    }
    let newBirthday = document.getElementById("edit_birthday").value;
    let selectedGender;
    let genderInputs = document.getElementsByName("edit_gender");
    for (let i = 0; i < genderInputs.length; i++) {
        if (genderInputs[i].checked) {
            selectedGender = +(genderInputs[i].value);
            break;
        }
    }
    if (!isValidDate(newBirthday) || newBirthday === "") {
        return alert("Định dạng ngày sinh không hợp lệ. Vui lòng nhập lại theo định dạng dd/MM/yyyy.");

    }
    currentUser.avatar = newAvatar;
    currentUser.coverImage = newCoverImage;
    currentUser.address = newAddress;
    currentUser.description = newDescription;
    currentUser.birthday = newBirthday;
    currentUser.gender = selectedGender;
    axios.put(`http://localhost:8080/user/${currentUser.id}`, currentUser).then((response) => {
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        openModalEditProfile()
        showHome()
        showProfile(currentUser.id)
    })
}

function editStatusPro() {
    let targetStatus = +(document.getElementById("editStatus2").value);
    if (targetStatus !== 0) {
        axios.get(`http://localhost:8080/status/${targetStatus}`).then((response) => {
            let status = response.data;
            let content = document.getElementById("editContent2").innerHTML;
            let srcImage = null;
            if (document.getElementById('edit_img2') != null) {
                srcImage = document.getElementById('edit_img2').src;
            }
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
            axios.put(`http://localhost:8080/status/${status.id}`, status).then((response) => {
                document.getElementById('editContent2').textContent = '';
                let img = document.getElementById('edit_img2');
                if (img != null) {
                    img.remove();
                }
                document.getElementById('create_deledit_image2').style.visibility = 'hidden';
                document.getElementById('contain_edit_img2').style.border = 'none';
                document.getElementById('editStatus2').style.backgroundColor = '#ced0d4';
                document.getElementById('editStatus2').disabled = true;
                showProfile(status.user.id)
                closeModalEditStatusPro()
            })
        })
    }
}

function commentDeletePro(id, targetID) {
    let isConfirm = confirm("Bạn có muốn xóa không?")
    if (isConfirm) {
        axios.delete(`http://localhost:8080/comment/${id}`).then((response) => {
            alert("Xóa thành công");
            showProfile(targetID);
        })
    }
}