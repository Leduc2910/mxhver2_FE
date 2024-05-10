function showListFriendHome() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    axios.get(`http://localhost:8080/relationship`).then((response) => {
        let listRelationship = response.data;
        let html = ``;
        for (let i = 0; i < listRelationship.length; i++) {
            if (listRelationship[i].status == 1) {
                if (listRelationship[i].user1.id == currentUser.id) {
                    html += `<div class="friend_label" onclick="showProfile(${listRelationship[i].user2.id})">
                    <div class="friend_avatar"><img src="${listRelationship[i].user2.avatar}"/></div>
                    <div class="friend_fullname">${listRelationship[i].user2.fullname}</div>
                </div>`;
                } else if (listRelationship[i].user2.id == currentUser.id) {
                    html += `<div class="friend_label" onclick="showProfile(${listRelationship[i].user1.id})">
                    <div class="friend_avatar"><img src="${listRelationship[i].user1.avatar}"/></div>
                    <div class="friend_fullname">${listRelationship[i].user1.fullname}</div>
                </div>`;
                }
            }
        }
        document.getElementById("contain_list_friend").innerHTML = html;
    })
}

function showFriendPage() {
    let html = `<div class="menu_friends">
            <div class="menu_fr_header">
                <div class="menu_fr_title">Bạn bè</div>
                <div class="menu_fr_option"><i class="fa-solid fa-gear"></i></div>
            </div>
            <div class="menu_fr_home menu_fr_item">
                <div class="fr_home_icon menu_fr_icon"><i class="fa-solid fa-user-group"></i></div>
                <div class="fr_home_label menu_fr_label">Trang chủ</div>
            </div>
            <div class="menu_fr_req menu_fr_item">
                <div class="fr_req_icon menu_fr_icon"><i class="fa-solid fa-user-check"></i></div>
                <div class="fr_req_label menu_fr_label">Lời mời kết bạn</div>
            </div>
            <div class="menu_fr_sug menu_fr_item">
                <div class="fr_sug_icon menu_fr_icon"><i class="fa-solid fa-user-plus"></i></div>
                <div class="fr_sug_label menu_fr_label">Gợi ý</div>
            </div>
            <div class="menu_fr_acpt menu_fr_item">
                <div class="fr_acpt_icon menu_fr_icon"><i class="fa-solid fa-user"></i></div>
                <div class="fr_acpt_label menu_fr_label">Lời mời đã gửi</div>
            </div>
        </div>
        <div class="main_friends">
            <div class="contain_friend_req">
                <div class="friend_req_header">
                    <div class="friend_req_title">Lời mời kết bạn</div>
                    <div class="friend_req_all">Xem tất cả</div>
                </div>
                <div class="listfr_req" id="listfr_req">
                </div>
            </div>
            <hr class="lstfriend_hr">
            <div class="contain_friend_req">
                <div class="friend_req_header">
                    <div class="friend_req_title">Những người bạn có thể biết</div>
                    <div class="friend_req_all">Xem tất cả</div>
                </div>
                <div class="listfr_req" id="listfr_sug">
                </div>
            </div>
            <hr class="lstfriend_hr">
            <div class="contain_friend_req">
                <div class="friend_req_header">
                    <div class="friend_req_title">Lời mời đã gửi</div>
                    <div class="friend_req_all">Xem tất cả</div>
                </div>
                <div class="listfr_req" id="listfr_sent">
                </div>
            </div
        </div>`;
    document.getElementById("container").innerHTML = html;
    showFriendRequest()
    showFriendSuggest()
    showFriendSent()
}


function showFriendRequest() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    axios.get(`http://localhost:8080/relationship`).then((response) => {
        let listRela = response.data;
        let html = ``;
        let countReq = 0;
        for (let i = listRela.length - 1; i >= 0; i--) {
            if (listRela[i].status === 0 && currentUser.id === listRela[i].user2.id) {
                if (countReq >= 14) {
                    break;
                }
                html += `<div class="friend_req">
                        <div class="friend_req_avatar" onclick="showProfile(${listRela[i].user1.id})"><img src="${listRela[i].user1.avatar}" alt=""></div>
                        <div class="friend_req_info">
                            <div class="friend_req_fullname" onclick="showProfile(${listRela[i].user1.id})">${listRela[i].user1.fullname}</div>
                            <div class="friend_req_mutual"></div>
                            <div class="friend_req_submit">
                                <button onclick="acceptFriendPage(${listRela[i].id}, ${listRela[i].user1.id})">Xác nhận</button>
                            </div>
                            <div class="friend_req_cancel">
                                <button onclick="delRequestPage(${listRela[i].id}, ${listRela[i].user1.id})">Xóa</button>
                            </div>
                        </div>
                    </div>`
                countReq++;
            }
        }
        if (countReq >= 14) {
            html += `<div class="friend_req_more">
                    <span>Xem thêm</span><i class="fa-solid fa-caret-down"></i>
                </div>`;
        } else if (countReq === 0) {
            html += `<div class="no_friend_req">
                        Không có lời mời mới
                    </div>`;
        }
        document.getElementById("listfr_req").innerHTML = html;
    })
}

function showFriendSuggest() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    axios.get(`http://localhost:8080/relationship/friend/${currentUser.id}`).then((RelaResponse) => {
        axios.get(`http://localhost:8080/user`).then((UserResponse) => {
            let listRela = RelaResponse.data;
            let listUser = UserResponse.data
            let html = ``;
            let countSug = 0;
            for (let i = 0; i < listUser.length; i++) {
                if (countSug >= 14) {
                    break;
                }

                let checkedFriend = false;
                if (listUser[i].id !== currentUser.id) {
                for (let j = 0; j < listRela.length; j++) {
                        if (listRela[j].user1.id === listUser[i].id || listRela[j].user2.id === listUser[i].id) {
                            checkedFriend = true;
                            break;
                        }
                    }
                    if (!checkedFriend) {
                        html += `<div class="friend_req">
                        <div class="friend_req_avatar" onclick="showProfile(${listUser[i].id})"><img src="${listUser[i].avatar}" alt=""></div>
                        <div class="friend_req_info">
                            <div class="friend_req_fullname" onclick="showProfile(${listUser[i].id})">${listUser[i].fullname}</div>
                            <div class="friend_req_mutual"></div>
                            <div class="friend_req_add">
                                <button onclick="addFriendPage(${listUser[i].id})">Thêm bạn bè</button>
                            </div>
                        </div>
                    </div>`
                        countSug++;
                    }
                }
            }
            if (countSug >= 14) {
                html += `<div class="friend_req_more">
                    <span>Xem thêm</span><i class="fa-solid fa-caret-down"></i>
                </div>`;
            } else if (countSug === 0) {
                html += `<div class="no_friend_req">
                        Không có gợi ý mới
                    </div>`;
            }
            document.getElementById("listfr_sug").innerHTML = html;
        })
    })
}
function showFriendSent() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    axios.get(`http://localhost:8080/relationship`).then((response) => {
        let listRela = response.data;
        let html = ``;
        let countReq = 0;
        for (let i = listRela.length - 1; i >= 0; i--) {
            if (listRela[i].status === 0 && currentUser.id === listRela[i].user1.id) {
                if (countReq >= 14) {
                    break;
                }
                html += `<div class="friend_req">
                        <div class="friend_req_avatar" onclick="showProfile(${listRela[i].user2.id})"><img src="${listRela[i].user2.avatar}" alt=""></div>
                        <div class="friend_req_info">
                            <div class="friend_req_fullname" onclick="showProfile(${listRela[i].user2.id})">${listRela[i].user2.fullname}</div>
                            <div class="friend_req_mutual"></div>
                            <div class="friend_req_submit">
                                <button onclick="delRequestPage(${listRela[i].id}, ${listRela[i].user2.id})">Hủy lời mời</button>
                            </div>
                        </div>
                    </div>`
                countReq++;
            }
        }
        if (countReq >= 14) {
            html += `<div class="friend_req_more">
                    <span>Xem thêm</span><i class="fa-solid fa-caret-down"></i>
                </div>`;
        } else if (countReq === 0) {
            html += `<div class="no_friend_req">
                        Chưa gửi lời mời
                    </div>`;
        }
        document.getElementById("listfr_sent").innerHTML = html;
    })
}
function acceptFriendPage(targetRela, targetPro) {
    axios.get(`http://localhost:8080/relationship/${targetRela}`).then((relaResponse) => {
        let rela = relaResponse.data;
        rela.status = 1;
        axios.put(`http://localhost:8080/relationship/${rela.id}`,rela).then((response) => {
            showFriendPage();
        })
    })
}
function delRequestPage(targetRela, targetPro) {
    axios.delete(`http://localhost:8080/relationship/${targetRela}`).then((response) => {
        showFriendPage();
    })
}
function addFriendPage(targetUserID) {
    let currentUser= JSON.parse(localStorage.getItem("currentUser"));
    let targetUser = {
        id : targetUserID
    }
    let relationship = {
        user1 : currentUser,
        user2 : targetUser
    }
    axios.post(`http://localhost:8080/relationship`,relationship).then((response) => {
        showFriendPage();
    })
}