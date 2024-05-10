function showHome() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let html = `    <div class="navbar">
        <div class="nav_left">
            <div class="nav_logo">
                <i class="fa-brands fa-facebook" style="color: #005eff;" onclick="showHome()"></i>
            </div>
            <div class="nav_search">
                <div class="search_container">
                    <input type="text" name="" id="searchStatus" placeholder="Tìm kiếm trên Facebook">
                    <i class="fa-solid fa-magnifying-glass" style="color: #6e6e6e;" onclick="checkValue()"></i>
                </div>
            </div>
        </div>
        <div class="nav_middle">
            <div class="nav_home">
                <i class="fa-solid fa-house nav_item" onclick="showHome()"></i>
            </div>
            <div class="nav_group">
                <i class="fa-solid fa-user-group nav_item" onclick="showFriendPage()"></i>
            </div>
            <div class="nav_video">
                <i class="fa-solid fa-film nav_item"></i>
            </div>
            <div class="nav_market">
                <i class="fa-solid fa-shop nav_item"></i>
            </div>

        </div>
        <div class="nav_right">
            <div class="nav_menu nav_right_item" onclick="logout()"><i class="fa-solid fa-right-from-bracket"></i></div>
            <div class="nav_menu nav_right_item"><i class="fa-solid fa-bars"></i></div>
            <div class="nav_message nav_right_item"><i class="fa-brands fa-facebook-messenger"></i></div>
            <div class="nav_noti nav_right_item"><i class="fa-solid fa-bell"></i></div>
            <div class="nav_avatar nav_right_item"><img onclick="showProfile(${currentUser.id})"
                    src="${currentUser.avatar}"
                    alt=""></div>
        </div>
    </div>
    <div id="container">
        <div class="container_shortcut">
                    <div class="shortcut_function">
                <div class="shortcut_profile shortcut_item" onclick="showProfile(${currentUser.id})">
                    <div class="sc_profile_avatar"><img src="${currentUser.avatar}"/></div>
                    <div class="sc_profile_fullname sc_item_label">${currentUser.fullname}</div>
                </div>
                <div class="shortcut_friend shortcut_item" onclick="showFriendPage()">
                    <div class="sc_friend_icon sc_item_icon"><img src="https://firebasestorage.googleapis.com/v0/b/social-network-c9f60.appspot.com/o/images%2Fteam.png?alt=media&token=135f6ded-4c5b-44e8-a2f6-2c18a203b31e"/></div>
                    <div class="sc_friend_label sc_item_label" >Bạn bè</div>
                </div>
                <div class="shortcut_saved shortcut_item">
                    <div class="sc_saved_icon sc_item_icon"><img src="https://firebasestorage.googleapis.com/v0/b/social-network-c9f60.appspot.com/o/images%2Fsaved.png?alt=media&token=744d9294-37be-4731-89b1-5943770755f3" /></div>
                    <div class="sc_saved_label sc_item_label">Đã lưu</div>
                </div>
                <div class="shortcut_memory shortcut_item">
                    <div class="sc_memory_icon sc_item_icon"><img src="https://firebasestorage.googleapis.com/v0/b/social-network-c9f60.appspot.com/o/images%2Fmemories.png?alt=media&token=dead3503-2057-47fb-9427-0e456d2bf362"/></div>
                    <div class="sc_memory_label sc_item_label">Kỷ niệm</div>
                </div>
                <div class="shortcut_group shortcut_item">
                    <div class="sc_group_icon sc_item_icon"><img src="https://firebasestorage.googleapis.com/v0/b/social-network-c9f60.appspot.com/o/images%2Fgroup.png?alt=media&token=bd4e8bb8-f62a-4db0-b638-c4b3b0042f68"/></div>
                    <div class="sc_group_label sc_item_label">Nhóm</div>
                </div>
                <div class="shortcut_video shortcut_item">
                    <div class="sc_video_icon sc_item_icon"><img src="https://firebasestorage.googleapis.com/v0/b/social-network-c9f60.appspot.com/o/images%2Fvideo.png?alt=media&token=2446af1b-b247-489d-93b1-c4abc2397189"/></div>
                    <div class="sc_video_label sc_item_label">Video</div>
                </div>
                <div class="shortcut_more shortcut_item">
                    <div class="sc_more_icon sc_item_icon"><i class="fa-solid fa-caret-down"></i></div>
                    <div class="sc_more_label sc_item_label">Xem thêm</div>
                </div>
            </div>
        </div>
        <div class="container_status" id="container_status"></div>
        <div class="container_friend">
            <div class="friend_header">
                <div class="friend_header_title">Người liên hệ</div>
                <div class="friend_header_search">
                    <i class="fa-solid fa-magnifying-glass"></i></div>
                <div class="friend_header_more"><i class="fa-solid fa-ellipsis"></i></div>
            </div>
            <div class="contain_list_friend" id="contain_list_friend">
                
                </div>
            </div>
        </div>
    </div>
                <div class="modal_create_status" id="modal_create_status">
                    <div class="form_create_status">
                        <div class="create_header"><span>Tạo bài viết</span>
                        <div class="create_close" onclick="openModalCreateStatus()"><i class="fa-solid fa-xmark"></i></div></div>
                        <div class="create_user">
                            <div class="create_user_avatar"><img src="${currentUser.avatar}" alt=""></div>
                            <div class="create_user_right">
                                <div class="create_user_username"><span>${currentUser.fullname}</span></div>
                                <div class="create_user_author" style="margin-top: 5px">
                                    <select name="" id="author">
                                        <option value="0">Công khai</option>
                                        <option value="1">Bạn bè</option>
                                        <option value="2">Chỉ mình tôi</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="create_content">
                        <div class="create_main_content">
                        <div class="create_status_input"><p id="createContent" class="editable2"
                                                                                 contentEditable="true" oninput="isInputContent()"></p></div>
                        <div class="create_image" id="contain_create_img">
                        <div class="create_delete_image" id="create_delete_image" onclick="delSelectedImage()"><i class="fa-solid fa-xmark"></i></div>
                        </div>
</div>
                       
                        <div class="create_function">
                            <span>Thêm vào bài viết của bạn</span>
                            <label for="file-upload" class="custom-file-upload">
                             <i class="fa-regular fa-images" style="color: #7fbb20"></i></label>
                             <input type="file" multiple id="file-upload" onchange="uploadImage(event)">
                        </div>
                        <div class="create_post">
                            <button onclick="postStatus()" id="postStatus" disabled>Đăng</button></div>
                    </div>
                </div>
               </div>
<div class="modal_create_status" id="modal_create_status2">
                    <div class="form_create_status">
                        <div class="create_header"><span>Tạo bài viết</span>
                        <div class="create_close" onclick="openModalCreateStatusPro()"><i class="fa-solid fa-xmark"></i></div></div>
                        <div class="create_user">
                            <div class="create_user_avatar"><img src="${currentUser.avatar}" alt=""></div>
                            <div class="create_user_right">
                                <div class="create_user_username"><span>${currentUser.fullname}</span></div>
                                <div class="create_user_author" style="margin-top: 5px">
                                    <select name="" id="author2">
                                        <option value="0">Công khai</option>
                                        <option value="1">Bạn bè</option>
                                        <option value="2">Chỉ mình tôi</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="create_content">
                        <div class="create_main_content">
                        <div class="create_status_input"><p id="createContent2" class="editable2"
                                                                                 contentEditable="true" oninput="isInputContentPro()"></p></div>
                        <div class="create_image" id="contain_create_img2">
                        <div class="create_delete_image" id="create_delete_image2" onclick="delSelectedImagePro()"><i class="fa-solid fa-xmark"></i></div>
                        </div>
</div>
                        <div class="create_function">
                            <span>Thêm vào bài viết của bạn</span>
                            <label for="file-upload2" class="custom-file-upload">
                             <i class="fa-regular fa-images" style="color: #7fbb20"></i></label>
                             <input type="file" multiple id="file-upload2" onchange="uploadImagePro(event)">
                        </div>
                        <div class="create_post">
                            <button onclick="postStatusPro()" id="postStatus2" disabled>Đăng</button></div>
                    </div>
                </div>
               </div>
               <div class="modal_delete_status" id="modal_delete_status2">
            <div class="form_delete_status">
                <div class="delete_header"><span>Xóa bài viết?</span>
                    <div class="delete_close" onclick="openModalDeleteStatus()"><i class="fa-solid fa-xmark"></i></div>
                </div>
                <div class="delete_content">
                    <div class="delete_alert"><span>Bạn có chắc chắn muốn xóa bài viết này không?</span></div>
                    <div class="delete_buttons">
                        <div class="delete_btn_cancel">
                            <button onclick="openModalDeleteStatus()">Hủy</button>
                        </div>
                        <div class="delete_btn_confirm">
                            <button id="remove_status2" onclick="deleteStatusPro()">Xóa</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                <div class="modal_delete_status" id="modal_delete_status">
            <div class="form_delete_status">
                <div class="delete_header"><span>Xóa bài viết?</span>
                    <div class="delete_close" onclick="openModalDeleteStatus()"><i class="fa-solid fa-xmark"></i></div>
                </div>
                <div class="delete_content">
                    <div class="delete_alert"><span>Bạn có chắc chắn muốn xóa bài viết này không?</span></div>
                    <div class="delete_buttons">
                        <div class="delete_btn_cancel">
                            <button>Hủy</button>
                        </div>
                        <div class="delete_btn_confirm">
                            <button id="remove_status" onclick="deleteStatus()">Xóa</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
</div>
<div class="modal_edit_profile" id="modal_edit_profile">
        <div class="form_edit_profile">
            <div class="edit_profile_header"><span>Chỉnh sửa trang cá nhân</span>
                <div class="edit_profile_close" onclick="openModalEditProfile()"><i class="fa-solid fa-xmark"></i>
                </div>
            </div>
            <div class="edit_profile_content">
                <div class="edit_pro_avatar">
                    <div class="edit_ava_header">
                        <div class="edit_ava_title">Ảnh đại diện</div>
                        <div class="edit_ava_upload"><label for="changeAvatar" class="custom-file-upload">
                            Tải lên</label>
                            <input type="file" class="file-upload" id="changeAvatar" onchange="changeAvatar(event)">
                        </div>
                    </div>
                    <div class="edit_ava_avatar"><img
                            src="${currentUser.avatar}"
                            alt="" id="edit_avatar"></div>
                </div>
                <div class="edit_pro_avatar">
                    <div class="edit_ava_header">
                        <div class="edit_ava_title">Ảnh bìa</div>
                        <div class="edit_ava_upload"><label for="changeCoverImage" class="custom-file-upload">
                            Tải lên</label>
                            <input type="file" class="file-upload" id="changeCoverImage"
                                   onchange="changeCoverImage(event)"></div>
                    </div>
                    <div class="edit_cover_image"><img
                            src="${currentUser.coverImage}"
                            alt="" id="edit_cover_image"></div>
                </div>
                <div class="edit_pro_avatar">
                    <div class="edit_ava_header">
                        <div class="edit_ava_title">Tiểu sử</div>
                    </div>
                    <div class="edit_input_description"><textarea name="" id="edit_description" placeholder="Mô tả về bạn..." oninput="countWordRemain()">${currentUser.description}</textarea>
                        <div class="edit_input_remain">Còn&nbsp;<span id="word_remain">50</span>&nbsp;ký tự</div>
                    </div>
                </div>
                <div class="edit_pro_avatar">
                    <div class="edit_ava_header">
                        <div class="edit_ava_title">Chỉnh sửa phần giới thiệu</div>
                    </div>
                    <div class="edit_information">
                        <div class="edit_info_item"><i class="fa-solid fa-house-chimney"></i><span>Sống tại </span>
                            <input type="text" name="" id="edit_address" value="${currentUser.address}" placeholder="Nhập địa chỉ">
                        </div>
                        <div class="edit_info_item"><i class="fa-solid fa-cake-candles"></i><span>Sinh nhật </span>
                            <input type="text" name="" id="edit_birthday" value="${currentUser.birthday}" placeholder="Nhập ngày sinh dd/MM/yyyy">
                        </div>
                        <div class="edit_info_item"><i class="fa-solid fa-user"></i><span>Giới tính</span>`
                            if(currentUser.gender == 0) {
                             html += `<div class="describe_male">Nam <input type="radio" name="edit_gender" id="" value="0" checked></div>
                            <div class="describe_female">Nữ <input type="radio" name="edit_gender" id="" value="1"></div>`
                            } else {
                                html += `<div class="describe_male">Nam <input type="radio" name="edit_gender" id="" value="0" ></div>
                            <div class="describe_female">Nữ <input type="radio" name="edit_gender" id="" value="1" checked></div>`
                            }

                        html += `</div>
                    </div>
                </div>
                <div class="edit_btn_save">
                    <button id="edit_pro_btn" onclick="updateInformation()">Lưu thông tin chỉnh sửa</button></div>
            </div>
        </div>
    </div>
    <div class="modal_create_status" id="modal_edit_status">
        <div class="form_create_status">
            <div class="create_header"><span>Chỉnh sửa bài viết</span>
                <div class="create_close" onclick="closeModalEditStatus()"><i class="fa-solid fa-x"></i></div>
            </div>
            <div class="create_user">
                <div class="create_user_avatar"><img src="${currentUser.avatar}" alt=""></div>
                <div class="create_user_right">
                    <div class="create_user_username"><span>${currentUser.fullname}</span></div>
                    <div class="create_user_author" style="margin-top: 5px">
                        <select name="" id="editAuthor">
                            <option value="0">Công khai</option>
                            <option value="1">Bạn bè</option>
                            <option value="2">Riêng tư</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="create_content">
            <div class="create_main_content"><div class="create_status_input"><p id="editContent" class="editable2"
                                                    contentEditable="true" oninput="isInputContentEdit()"></p></div>
                <div class="create_image" id="contain_edit_img">
                <div class="create_delete_image" id="create_deledit_image" onclick="delSelectedImageEdit()"><i class="fa-solid fa-xmark"></i></div>
                </div></div>
                

                <div class="create_function">
                    <span>Thêm vào bài viết của bạn</span>
                    <label for="edit-file-upload" class="custom-file-upload">
                        <i class="fa-regular fa-images" style="color: #7fbb20"></i>
                        <input type="file" multiple class="file-upload" id="edit-file-upload" onchange="uploadImageEdit(event)"></label>

                </div>
                <div class="create_post">
                    <button onclick="editStatus()" id="editStatus" style="background-color: #0861f2">Đăng</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal_create_status" id="modal_edit_status2">
        <div class="form_create_status">
            <div class="create_header"><span>Chỉnh sửa bài viết</span>
                <div class="create_close" onclick="closeModalEditStatusPro()"><i class="fa-solid fa-x"></i></div>
            </div>
            <div class="create_user">
                <div class="create_user_avatar"><img src="${currentUser.avatar}" alt=""></div>
                <div class="create_user_right">
                    <div class="create_user_username"><span>${currentUser.fullname}</span></div>
                    <div class="create_user_author" style="margin-top: 5px">
                        <select name="" id="editAuthor2">
                            <option value="0">Công khai</option>
                            <option value="1">Bạn bè</option>
                            <option value="2">Riêng tư</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="create_content">
            <div class="create_main_content"><div class="create_status_input"><p id="editContent2" class="editable2"
                                                    contentEditable="true" oninput="isInputContentEditPro()"></p></div>
                <div class="create_image" id="contain_edit_img2">
                <div class="create_delete_image" id="create_deledit_image2" onclick="delSelectedImageEditPro()"><i class="fa-solid fa-xmark"></i></div>
                </div></div>
                

                <div class="create_function">
                    <span>Thêm vào bài viết của bạn</span>
                    <label for="edit-file-upload2" class="custom-file-upload">
                        <i class="fa-regular fa-images" style="color: #7fbb20"></i>
                        <input type="file" multiple class="file-upload" id="edit-file-upload2" onchange="uploadImageEditPro(event)"></label>

                </div>
                <div class="create_post">
                    <button onclick="editStatusPro()" id="editStatus2" style="background-color: #0861f2">Đăng</button>
                </div>
            </div>
        </div>
    </div>
`
    document.getElementById("wrapper").innerHTML = html;
    showAllStatus()
    showListFriendHome()
}
