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

function uploadImage(e) {
    let fbBucketName = 'images';
    let uploader = document.getElementById('uploader');
    let file = e.target.files[0];
    let storageRef = firebase.storage().ref(`${fbBucketName}/${file.name}`);
    let uploadTask = storageRef.put(file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        function (snapshot) {
            uploader.value = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
            document.getElementById('imgDiv').innerHTML = `<img src="${downloadURL}" alt="">`
            localStorage.setItem('image', downloadURL);
        });
}