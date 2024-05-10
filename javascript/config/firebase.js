// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCWilJ77QC9BjNY4GNsbAIlgbAVyTslJsI",
    authDomain: "social-network-c9f60.firebaseapp.com",
    projectId: "social-network-c9f60",
    storageBucket: "social-network-c9f60.appspot.com",
    messagingSenderId: "64316972226",
    appId: "1:64316972226:web:f09b055672d5b6468def5b",
    measurementId: "G-WY8S48R23B"
};
firebase.initializeApp(firebaseConfig);

// function uploadImage(e) {
//     let fbBucketName = 'images';
//     let uploader = document.getElementById('file-upload');
//     let file = e.target.files[0];
//     let storageRef = firebase.storage().ref(`${fbBucketName}/${file.name}`);
//     let uploadTask = storageRef.put(file);
//     uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
//         function (snapshot) {
//             uploader.value = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//             switch (snapshot.state) {
//                 case firebase.storage.TaskState.PAUSED:
//                     break;
//                 case firebase.storage.TaskState.RUNNING:
//                     break;
//             }
//         }, function (error) {
//             switch (error.code) {
//                 case 'storage/unauthorized':
//                     break;
//                 case 'storage/canceled':
//                     break;
//                 case 'storage/unknown':
//                     break;
//             }
//         }, function () {
//             let downloadURL = uploadTask.snapshot.downloadURL;
//             let img = document.getElementById("create_image");
//             if (img != null) {
//                 img.remove()
//             }
//             let preImage = document.createElement("img");
//             preImage.id = 'create_img';
//             preImage.src = downloadURL;
//             document.getElementById('contain_create_img').appendChild(preImage);
//         });
// }

function uploadImage(e) {
    let fbBucketName = 'images';
    let file = e.target.files[0];
    let storageRef = firebase.storage().ref(`${fbBucketName}/${file.name}`);
    let uploadTask = storageRef.put(file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        function (snapshot) {
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED:
                    break;
                case firebase.storage.TaskState.RUNNING:
                    break;
            }
        }, function (error) {
            switch (error.code) {
                case 'storage/unauthorized':
                    break;
                case 'storage/canceled':
                    break;
                case 'storage/unknown':
                    break;
            }
        }, function () {
            let downloadURL = uploadTask.snapshot.downloadURL;
            if (downloadURL != null) {
                document.getElementById('postStatus').style.backgroundColor = '#0861f2'
                document.getElementById('postStatus').disabled = false;
            }
            let img = document.getElementById("create_img");
            if (img != null) {
                img.remove()
            }
            let preImage = document.createElement("img");
            preImage.id = 'create_img';
            preImage.src = downloadURL;
            document.getElementById('contain_create_img').appendChild(preImage);
            document.getElementById("create_delete_image").style.visibility = "visible";
            document.getElementById("contain_create_img").style.border = "1px solid #ced0d4";
        });
}
function uploadImagePro(e) {
    let fbBucketName = 'images';
    let file = e.target.files[0];
    let storageRef = firebase.storage().ref(`${fbBucketName}/${file.name}`);
    let uploadTask = storageRef.put(file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        function (snapshot) {
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED:
                    break;
                case firebase.storage.TaskState.RUNNING:
                    break;
            }
        }, function (error) {
            switch (error.code) {
                case 'storage/unauthorized':
                    break;
                case 'storage/canceled':
                    break;
                case 'storage/unknown':
                    break;
            }
        }, function () {
            let downloadURL = uploadTask.snapshot.downloadURL;
            if (downloadURL != null) {
                document.getElementById('postStatus2').style.backgroundColor = '#0861f2'
                document.getElementById('postStatus2').disabled = false;
            }
            let img = document.getElementById("create_img2");
            if (img != null) {
                img.remove()
            }
            let preImage = document.createElement("img");
            preImage.id = 'create_img2';
            preImage.src = downloadURL;
            document.getElementById('contain_create_img2').appendChild(preImage);
            document.getElementById("create_delete_image2").style.visibility = "visible";
            document.getElementById("contain_create_img2").style.border = "1px solid #ced0d4";
        });
}
function changeAvatar(e) {
    let fbBucketName = 'images';
    let file = e.target.files[0];
    let storageRef = firebase.storage().ref(`${fbBucketName}/${file.name}`);
    let uploadTask = storageRef.put(file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        function (snapshot) {
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED:
                    break;
                case firebase.storage.TaskState.RUNNING:
                    break;
            }
        }, function (error) {
            switch (error.code) {
                case 'storage/unauthorized':
                    break;
                case 'storage/canceled':
                    break;
                case 'storage/unknown':
                    break;
            }
        }, function () {
            let downloadURL = uploadTask.snapshot.downloadURL;
            let img = document.getElementById("edit_avatar");
            img.src = downloadURL;
        });
}
function changeCoverImage(e) {
    let fbBucketName = 'images';
    let file = e.target.files[0];
    let storageRef = firebase.storage().ref(`${fbBucketName}/${file.name}`);
    let uploadTask = storageRef.put(file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        function (snapshot) {
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED:
                    break;
                case firebase.storage.TaskState.RUNNING:
                    break;
            }
        }, function (error) {
            switch (error.code) {
                case 'storage/unauthorized':
                    break;
                case 'storage/canceled':
                    break;
                case 'storage/unknown':
                    break;
            }
        }, function () {
            let downloadURL = uploadTask.snapshot.downloadURL;
            let img = document.getElementById("edit_cover_image");
            img.src = downloadURL;
        });
}
function uploadImageEdit(e) {
    let fbBucketName = 'images';
    let file = e.target.files[0];
    let storageRef = firebase.storage().ref(`${fbBucketName}/${file.name}`);
    let uploadTask = storageRef.put(file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        function (snapshot) {
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED:
                    break;
                case firebase.storage.TaskState.RUNNING:
                    break;
            }
        }, function (error) {
            switch (error.code) {
                case 'storage/unauthorized':
                    break;
                case 'storage/canceled':
                    break;
                case 'storage/unknown':
                    break;
            }
        }, function () {
            let downloadURL = uploadTask.snapshot.downloadURL;
            if (downloadURL != null) {
                document.getElementById('editStatus').style.backgroundColor = '#0861f2'
                document.getElementById('editStatus').disabled = false;
            }
            let img = document.getElementById("edit_img");
            if (img != null) {
                img.remove()
            }
            let preImage = document.createElement("img");
            preImage.id = 'edit_img';
            preImage.src = downloadURL;
            document.getElementById('contain_edit_img').appendChild(preImage);
            document.getElementById("create_deledit_image").style.visibility = "visible";
            document.getElementById("contain_edit_img").style.border = "1px solid #ced0d4";
        });
}
function uploadImageEditPro(e) {
    let fbBucketName = 'images';
    let file = e.target.files[0];
    let storageRef = firebase.storage().ref(`${fbBucketName}/${file.name}`);
    let uploadTask = storageRef.put(file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        function (snapshot) {
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED:
                    break;
                case firebase.storage.TaskState.RUNNING:
                    break;
            }
        }, function (error) {
            switch (error.code) {
                case 'storage/unauthorized':
                    break;
                case 'storage/canceled':
                    break;
                case 'storage/unknown':
                    break;
            }
        }, function () {
            let downloadURL = uploadTask.snapshot.downloadURL;
            if (downloadURL != null) {
                document.getElementById('editStatus2').style.backgroundColor = '#0861f2'
                document.getElementById('editStatus2').disabled = false;
            }
            let img = document.getElementById("edit_img2");
            if (img != null) {
                img.remove()
            }
            let preImage = document.createElement("img");
            preImage.id = 'edit_img2';
            preImage.src = downloadURL;
            document.getElementById('contain_edit_img2').appendChild(preImage);
            document.getElementById("create_deledit_image2").style.visibility = "visible";
            document.getElementById("contain_edit_img2").style.border = "1px solid #ced0d4";
        });
}