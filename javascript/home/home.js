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
