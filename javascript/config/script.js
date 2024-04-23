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
    if (modalCreate.classList.contains("modal_create_status_open")) {
        modalCreate.classList.remove("modal_create_status_open");
    } else {
        modalCreate.classList.add("modal_create_status_open");
    }
}