    function getTimeDiff(createTime) {
        let currentTime = new Date().getTime();
        let postTime = new Date(createTime).getTime();
        let diffTimeInSeconds = Math.floor((currentTime - postTime) / 1000);

        if (diffTimeInSeconds >= 86400) {
            return Math.floor(diffTimeInSeconds / 86400) + ' ngày';
        } else if (diffTimeInSeconds >= 3600) {
            return Math.floor(diffTimeInSeconds / 3600) + ' giờ';
        } else if (diffTimeInSeconds >= 60) {
            return Math.floor(diffTimeInSeconds / 60) + ' phút';
        } else {
            return diffTimeInSeconds + ' giây';
        }
    }

    function openModalOptionStatus(statusID) {
        let div_option = document.getElementById(`option_status_${statusID}`);
        if (div_option.classList.contains("option_status_open")) {
            div_option.classList.remove("option_status_open");
        } else {
            div_option.classList.add("option_status_open");
        }
    }

    function openModalCreateStatus() {
        let modalCreate = document.getElementById("modal_create_status");
        let body = document.querySelector('body');
        if (modalCreate.classList.contains("modal_create_status_open")) {
            modalCreate.classList.remove("modal_create_status_open");
            body.style.overflow = 'auto';
        } else {
            modalCreate.classList.add("modal_create_status_open");
            body.style.overflow = 'hidden';
        }
    }

    function openModalCreateStatusPro() {
        let modalCreate = document.getElementById("modal_create_status2");
        let body = document.querySelector('body');
        if (modalCreate.classList.contains("modal_create_status_open")) {
            modalCreate.classList.remove("modal_create_status_open");
            body.style.overflow = 'auto';
        } else {
            modalCreate.classList.add("modal_create_status_open");
            body.style.overflow = 'hidden';
        }
    }

    function openModalDeleteStatus(id) {
        let modalDelete = document.getElementById("modal_delete_status");
        if (modalDelete.classList.contains("modal_delete_status_open")) {
            modalDelete.classList.remove("modal_delete_status_open");
            document.getElementById("remove_status").value = 0;
        } else {
            modalDelete.classList.add("modal_delete_status_open");
            document.getElementById("remove_status").value = id + "";
        }
    }

    function openModalDeleteStatusPro(id) {
        let modalDelete = document.getElementById("modal_delete_status2");
        if (modalDelete.classList.contains("modal_delete_status_open")) {
            modalDelete.classList.remove("modal_delete_status_open");
            document.getElementById("remove_status2").value = 0;
        } else {
            modalDelete.classList.add("modal_delete_status_open");
            document.getElementById("remove_status2").value = id + "";
        }
    }

    function isInputContent() {
        let postButton = document.getElementById('postStatus');
        let createContent = document.getElementById('createContent').innerHTML;
        if (createContent.trim() === '') {
            if (document.getElementById("create_img") == null) {
                postButton.style.backgroundColor = '#e4e6eb'
                postButton.disabled = true;
            }
        } else {
            postButton.style.backgroundColor = '#0861f2'
            postButton.disabled = false;
        }
    }

    function isInputContentPro() {
        let postButton = document.getElementById('postStatus2');
        let createContent = document.getElementById('createContent2').innerHTML;
        if (createContent.trim() === '') {
            if (document.getElementById("create_img") == null) {
                postButton.style.backgroundColor = '#e4e6eb'
                postButton.disabled = true;
            }
        } else {
            postButton.style.backgroundColor = '#0861f2'
            postButton.disabled = false;
        }
    }

    function delSelectedImage() {
        let img = document.getElementById("create_img");
        if (img != null) {
            img.remove();
        }
        if (document.getElementById('createContent').textContent == null) {
            document.getElementById('postStatus').style.backgroundColor = '#ced0d4';
            document.getElementById('postStatus').disabled = true;
        }
        document.getElementById("create_delete_image").style.visibility = "hidden";
        document.getElementById("contain_create_img").style.border = "none";
    }

    function delSelectedImagePro() {
        let img = document.getElementById("create_img2");
        if (img != null) {
            img.remove();
        }
        if (document.getElementById('createContent2').textContent == null) {
            document.getElementById('postStatus2').style.backgroundColor = '#ced0d4';
            document.getElementById('postStatus2').disabled = true;
        }
        document.getElementById("create_delete_image2").style.visibility = "hidden";
        document.getElementById("contain_create_img2").style.border = "none";
    }

    function openModalFunctionComment(commentID) {
        // Lấy modalFunctionComment tương ứng với commentID được truyền vào
        let modalFunctionComment = document.getElementById(`comment_function_${commentID}`);

        // Kiểm tra trạng thái hiển thị của modalFunctionComment
        if (modalFunctionComment.style.visibility === "hidden") {
            // Nếu đang ẩn, hiển thị lên
            modalFunctionComment.style.visibility = "visible";
        } else {
            // Nếu đang hiển thị, kiểm tra xem có phải đang nhấn lại cùng một comment_more hay không
            // Lấy đối tượng comment_more tương ứng
            let commentMore = document.getElementById(`comment_more_${commentID}`);

            // Kiểm tra xem comment_more đang được hover không
            if (!commentMore.matches(':hover')) {
                // Nếu không, ẩn đi
                modalFunctionComment.style.visibility = "hidden";
            }
        }
    }

    function openModalEditProfile() {
        let currentUser = JSON.parse(localStorage.getItem("currentUser"));
        let modalEditProfile = document.getElementById("modal_edit_profile");
        let body = document.querySelector('body');
        if (modalEditProfile.classList.contains("modal_edit_profile_open")) {
            modalEditProfile.classList.remove("modal_edit_profile_open");
            body.style.overflow = 'auto';
        } else {
            modalEditProfile.classList.add("modal_edit_profile_open");
            body.style.overflow = 'hidden';
        }
    }

    function countWordRemain() {
        let description = document.getElementById("edit_description").value;
        let charCount = description.length;
        let maxChar = 50;
        let remainChar = maxChar - charCount;
        document.getElementById("word_remain").innerText = remainChar;
        if (remainChar < 0) {
            document.getElementById("edit_pro_btn").disabled = true;
            document.getElementById("edit_pro_btn").style.backgroundColor = "#E6E4EB";
        } else {
            document.getElementById("edit_pro_btn").disabled = false;
            document.getElementById("edit_pro_btn").style.backgroundColor = "#EBF5FF";
        }
    }

    function isValidDate(dateString) {
        let regex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
        if (!regex.test(dateString)) {
            return false;
        }
        let parts = dateString.split("/");
        let day = parseInt(parts[0], 10);
        let month = parseInt(parts[1], 10);
        let year = parseInt(parts[2], 10);
        if (year < 1000 || year > 3000 || month === 0 || month > 12) {
            return false;
        }

        let monthLength = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
            monthLength[2] = 29;
        }

        return day > 0 && day <= monthLength[month];
    }

    function openModalEditStatus(statusID) {
        axios.get(`http://localhost:8080/status/${statusID}`).then((response) => {
            let status = response.data;
            let img = document.getElementById("edit_img");
            if (img != null) {
                img.remove()
            }
            let modalEdit = document.getElementById("modal_edit_status");
            let body = document.querySelector('body');
            if (modalEdit.classList.contains("modal_create_status_open")) {
                document.getElementById("editContent").innerHTML = "";
                modalEdit.classList.remove("modal_create_status_open");
                body.style.overflow = 'auto';
                document.getElementById("editStatus").value = 0;
            } else {
                if (status.usedImageSet.length != 0) {
                    let preImage = document.createElement("img");
                    preImage.id = 'edit_img';
                    preImage.src = status.usedImageSet[0].source;
                    document.getElementById('contain_edit_img').appendChild(preImage);
                    document.getElementById("create_deledit_image").style.visibility = "visible";
                    document.getElementById("contain_edit_img").style.border = "1px solid #ced0d4";
                }
                document.getElementById("editContent").innerHTML = status.content;
                let selectElement = document.getElementById("editAuthor");
                for (let i = 0; i < selectElement.options.length; i++) {
                    let option = selectElement.options[i];
                    if (parseInt(option.value) == status.authorization) {
                        option.selected = true;
                        break;
                    }
                }
                modalEdit.classList.add("modal_create_status_open");
                body.style.overflow = 'hidden';
                document.getElementById("editStatus").value = statusID;

            }
        })

    }

    function openModalEditStatusPro(statusID) {
        axios.get(`http://localhost:8080/status/${statusID}`).then((response) => {
            let status = response.data;
            let img = document.getElementById("edit_img2");
            if (img != null) {
                img.remove()
            }
            let modalEdit = document.getElementById("modal_edit_status2");
            let body = document.querySelector('body');
            if (modalEdit.classList.contains("modal_create_status_open")) {
                document.getElementById("editContent2").innerHTML = "";
                modalEdit.classList.remove("modal_create_status_open");
                body.style.overflow = 'auto';
                document.getElementById("editStatus2").value = 0;
            } else {
                if (status.usedImageSet.length != 0) {
                    let preImage = document.createElement("img");
                    preImage.id = 'edit_img2';
                    preImage.src = status.usedImageSet[0].source;
                    document.getElementById('contain_edit_img2').appendChild(preImage);
                    document.getElementById("create_deledit_image2").style.visibility = "visible";
                    document.getElementById("contain_edit_img2").style.border = "1px solid #ced0d4";
                }
                document.getElementById("editContent2").innerHTML = status.content;

                modalEdit.classList.add("modal_create_status_open");
                body.style.overflow = 'hidden';
                document.getElementById("editStatus2").value = statusID;

            }
        })

    }

    function closeModalEditStatus() {
        let img = document.getElementById("edit_img");
        if (img != null) {
            img.remove()
        }
        let modalEdit = document.getElementById("modal_edit_status");
        let body = document.querySelector('body');
        if (modalEdit.classList.contains("modal_create_status_open")) {
            document.getElementById("editContent").innerHTML = "";
            document.getElementById("create_deledit_image").style.visibility = "hidden";
            document.getElementById("contain_edit_img").style.border = "none";
            modalEdit.classList.remove("modal_create_status_open");
            body.style.overflow = 'auto';
            document.getElementById("editStatus").value = 0;
        } else {
            modalEdit.classList.add("modal_create_status_open");
            body.style.overflow = 'hidden';

        }
    }

    function closeModalEditStatusPro() {
        let img = document.getElementById("edit_img2");
        if (img != null) {
            img.remove()
        }
        let modalEdit = document.getElementById("modal_edit_status2");
        let body = document.querySelector('body');
        if (modalEdit.classList.contains("modal_create_status_open")) {
            document.getElementById("editContent2").innerHTML = "";
            document.getElementById("create_deledit_image2").style.visibility = "hidden";
            document.getElementById("contain_edit_img2").style.border = "none";
            modalEdit.classList.remove("modal_create_status_open");
            body.style.overflow = 'auto';
            document.getElementById("editStatus2").value = 0;
        } else {
            modalEdit.classList.add("modal_create_status_open");
            body.style.overflow = 'hidden';

        }
    }

    function isInputContentEdit() {
        let editButton = document.getElementById('editStatus');
        let editContent = document.getElementById('editContent').innerHTML;
        if (editContent.trim() === '') {
            if (document.getElementById("edit_img") == null) {
                editButton.style.backgroundColor = '#e4e6eb'
                editButton.disabled = true;
            }
        } else {
            editButton.style.backgroundColor = '#0861f2'
            editButton.disabled = false;
        }
    }

    function isInputContentEditPro() {
        let editButton = document.getElementById('editStatus2');
        let editContent = document.getElementById('editContent2').innerHTML;
        if (editContent.trim() === '') {
            if (document.getElementById("edit_img2") == null) {
                editButton.style.backgroundColor = '#e4e6eb'
                editButton.disabled = true;
            }
        } else {
            editButton.style.backgroundColor = '#0861f2'
            editButton.disabled = false;
        }
    }

    function delSelectedImageEdit() {
        let img = document.getElementById("edit_img");
        if (img != null) {
            img.remove();
        }
        if (document.getElementById('editContent').textContent == null || document.getElementById('editContent').textContent == "") {
            document.getElementById('editStatus').style.backgroundColor = '#ced0d4';
            document.getElementById('editStatus').disabled = true;
        }
        document.getElementById("create_deledit_image").style.visibility = "hidden";
        document.getElementById("contain_edit_img").style.border = "none";
    }

    function delSelectedImageEditPro() {
        let img = document.getElementById("edit_img2");
        if (img != null) {
            img.remove();
        }
        if (document.getElementById('editContent2').textContent == null || document.getElementById('editContent2').textContent == "") {
            document.getElementById('editStatus2').style.backgroundColor = '#ced0d4';
            document.getElementById('editStatus2').disabled = true;
        }
        document.getElementById("create_deledit_image2").style.visibility = "hidden";
        document.getElementById("contain_edit_img2").style.border = "none";
    }