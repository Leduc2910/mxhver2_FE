function showHome() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let html = `    <div class="navbar">
        <div class="nav_left">
            <div class="nav_logo">
                <i class="fa-brands fa-facebook" style="color: #005eff;" onclick="showHome()"></i>
            </div>
            
            <div class="nav_search">
                <div class="search_container">
                    <i class="fa-solid fa-magnifying-glass" style="color: #6e6e6e;"></i>
                    <input type="text" name="" id="" placeholder="Tìm kiếm trên Facebook">
                </div>
            </div>
        </div>
        <div class="nav_middle">
            <div class="nav_home">
                <i class="fa-solid fa-house nav_item" onclick="showHome()"></i>
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
        <div class="container_shortcut"></div>
        <div class="container_status" id="container_status"></div>
        <div class="container_friend"></div>
    </div>
                <div class="modal_create_status" id="modal_create_status">
                    <div class="form_create_status">
                        <div class="create_header"><span>Tạo bài viết</span>
                        <div class="create_close" onclick="openModalCreateStatus()"><i class="fa-solid fa-x"></i></div></div>
                        <div class="create_user">
                            <div class="create_user_avatar"><img src="${currentUser.avatar}" alt=""></div>
                            <div class="create_user_right">
                                <div class="create_user_username"><span>${currentUser.fullname}</span></div>
                                <div class="create_user_author" style="margin-top: 5px">
                                    <select name="" id="">
                                        <option value="">Công khai</option>
                                        <option value="">Bạn bè</option>
                                        <option value="">Riêng tư</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="create_content"><div class="create_status_input"><p id="createContent" class="editable2"
                                                                                 contentEditable="true" oninput="isInputContent()"></p></div>
                        <div class="create_image" id="contain_create_img">
                        </div>

                        <div class="create_function">
                            <span>Thêm vào bài viết của bạn</span>
                            <label for="file-upload" class="custom-file-upload">
                             <i class="fa-regular fa-images" style="color: #7fbb20"></i>
                             <input type="file" multiple id="file-upload" onchange="uploadImage(event)">

                        </div>
                        <div class="create_post">
                            <button onclick="postStatus()" id="postStatus" disabled>Đăng</button></div>
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
`
    document.getElementById("wrapper").innerHTML = html;
    showAllStatus()
}
