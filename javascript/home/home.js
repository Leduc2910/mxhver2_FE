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
                    <input type="text" name="" id="" placeholder="Tìm kiếm trên Facebook">
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
            <div class="nav_menu nav_right_item" onclick="logout()"><i class="fa-solid fa-right-from-bracket"></i></div>
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
    </div>
                <div class="modal_create_status" id="modal_create_status">
                    <div class="form_create_status">
                        <div class="create_header"><span>Tạo bài viết</span>
                        <div class="create_close" onclick="openModalCreateStatus()"><i class="fa-solid fa-x"></i></div></div>
                        <div class="create_user">
                            <div class="create_user_avatar"><img src="https://firebasestorage.googleapis.com/v0/b/social-network-c9f60.appspot.com/o/images%2Favatar-default.png?alt=media&token=5d1fe836-096e-45b8-a2ea-a2028072305c" alt=""></div>
                            <div class="create_user_right">
                                <div class="create_user_username"><span>Le Minh Duc</span></div>
                                <div class="create_user_author">
                                    <select name="" id="">
                                        <option value="">Công khai</option>
                                        <option value="">Bạn bè</option>
                                        <option value="">Riêng tư</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="create_content"><div class="create_status_input"><p id="createContent" class="editable2"
                                                                                 contentEditable="true"></p></div>
                        <div class="create_image"><img src="https://firebasestorage.googleapis.com/v0/b/social-network-c9f60.appspot.com/o/images%2Favatar-default.png?alt=media&token=5d1fe836-096e-45b8-a2ea-a2028072305c" alt=""></div>

                        <div class="create_function">
                            <span>Thêm vào bài viết của bạn</span>
                            <i class="fa-regular fa-images" style="color: #7fbb20"></i>
                        </div>
                        <div class="create_post">
                            <button>Đăng</button></div>
                    </div>
                </div>`
    document.getElementById("wrapper").innerHTML = html;
    showAllStatus()
}
