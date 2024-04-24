function showEditPage(){
  let html = `
  <!-- ảnh nền -->
<section class="cover-image-section">
<header class="cover-hader-site">

<img src="../../element/img/bg.jpg">

<div class="cover-image-div">
<div class="cover-image-edite-btn">
<button>
<i class="fas fa-camera"></i>
Upload photo
</button>
</div>
</div>

</header>
</section>
<!-- end ảnh nền -->

<!-- đầu trang cá nhân -->
<section class="profile-section">
<div class="profile-section-in">

<div class="profile-image-site">
<div class="profile-image-div">
<a href="#" id="profile-link">
<img id="Profile_images" src="../../element/img/profile.jpg">
</a>
<span class="fas fa-camera"></span>
</div>
</div>
<div class="profilef-name-info">
<h1>
<span class="pro-txt" id="profile_name"></span>
<span id="nik-name"></span>
</h1>
<p>
<span class="fir-count-txt">
<span id="friend_count">3.9K</span> Friends
</span>
</p>


</div>
<div class="profile-button-site">
<div class="btn-site-pro">
<span>
<i class="fas fa-plus-circle"></i>
Add to Storry
</span>
<span class="edit-profile-btn">
<i class="fas fa-pen"></i>
Edit Profile
</span>
</div>
</div>

</div>
</section>
<!-- end đầu trang cá nhân -->

<!--body trang cá nhân-->
<section class="full-navbar">
<nav class="navbar-site">

<ul compact="txt-color-c">
<a href="#">
<li class=" txt-cc activ-navbar">Posts</li>
</a>
<a href="#">
<li class=" txt-cc">About</li>
</a>
<a href="#">
<li class=" txt-cc">Friends</li>
</a>
<a href="#" id="photo-nav">
<li class=" txt-cc">Photo</li>
</a>
<a href="#" id="video-nav">
<li class=" txt-cc">Video</li>
</a>
<a href="#" id="likes-nav">
<li class=" txt-cc">Likes</li>
</a>
<a href="#">
<li class=" txt-cc">More <i class="fas fa-caret-down"></i></li>
</a>
</ul>

<div class="nav-btn">
<i class="fas fa-ellipsis-h"></i>
</div>

</nav>


</section>
<!--end body trang cá  nhân-->


<!--info trang cá nhân-->
<section class="post-section">
<div class="post-section-in">

<section class="info-section">

<div class="profile-lock-div">
<div class="icon-pld">
<i class="fab fa-keycdn"></i>
</div>
<div class="pld-text">
<h3>You locked your profile</h3>
<a href="#">Learn More</a>
</div>
</div>

<div class="about-info">
<h4>Intro</h4>

<p id="bio-text"></p>
<div class="bio-btn-click">
<input class="input-box" type="text" value="MD Mehedi Hasan">
<p class="length-count-txt">
<span id="length-count">101</span> characters remaining</p>
<div class="putlic-c-o-btn">
<div>
<p><span class="fas fa-globe-europe"></span> Public</p>
</div>
<div class="button-site-js">
<button id="cencel-btn">Cencel</button>
<button id="save-btn">Save</button></div>
</div>
</div>
<button id="bio-edit-btn" class="edit-bio btn">Edit Bio</button>

<ul>
<li><i class="fas fa-briefcase"></i> Works at
<a href="#" id="work"></a>
</li>

<li><i class="fas fa-graduation-cap"></i> Went to
<a href="#" id="school">code gym</a>
</li>

<li><i class="fas fa-home"></i> Lives in
<a href="#" id="home">HaNoi</a>
</li>

<li><i class="fas fa-map-marker-alt"></i> From
<a href="#" id="from">HaNoi</a>
</li>
<li><i class="fas fa-heart"></i> Single</li>
</ul>
<button class="edit-bio btn">Edit Details</button>
<div class="Hobbies-show">
<span><i class="fas fa-laptop-code"></i> Learning to Code</span>
<span><i class="fas fa-laptop-code"></i>Code</span>
<span><i class="fas fa-book"></i>Learning</span>
<span><i class="fas fa-camera-retro"></i>Photography</span>
</div>
<button class="edit-bio btn">Edit Hobbies</button>
<div class="Featured-site">
</div>
<button class="edit-bio btn">Edit Featured</button>
</div>
<div class="box-design images-site">
<span>Photos</span>
<div class="see-all-images"><a href="#">See All Photos</a></div>
</div>
<div class="box-design friends-site">
<span>Friends <br>
<p>
<span>
3641
</span>
Friends
</p>
</span>
<div class="see-all-images"><a href="#">See All Friends</a></div>
</div>
</section>
<section class="post-info">
<div class="box-design">
<div class="post-upload-T">
<div class="profil-ing-div">
<a href="#" id="profile-link">
<img id="Profile_images" src="images/friends/00.jpg">
</a>
</div>
<div class="text-post">
<span>What's on your mind?</span>
</div>
</div>
<div class="photo-upload">
<div class="post-upl">
<p><i class="fas fa-video"></i> Live Video</p>
</div>
<div class="post-upl">
<p><i class="fas fa-images"></i> Photo/Video</p>
</div>
<div class="post-upl">
<p><i class="fas fa-flag"></i> Life Event</p>
</div>
</div>
</div>
<div class="box-design post-filter">

<div class="filter-site">
<span>Posts</span>
<div class="fil-ter">
<button><i class="fas fa-sliders-h"></i> Filters</button>

<button><i class="fas fa-cog"></i> Manager Posts</button>
</div>
</div>
</div>
</section>

</div>
</section>
<!--end info trang cá nhân-->
  `
  document.getElementById("wrapper").innerHTML = html;
  getData()
}
function getData() {
  axios.get('http://localhost:8080/user/2')
  .then(response => {

    const { username, email, fullname, birthday, gender, avatar, description } = response.data;

    const fullnameElement = document.getElementById('profile_name');
    const birthdayElement = document.getElementById('birthday');
    const genderElement = document.getElementById('gender');
    const avatarElement = document.getElementById('avatar');
    const descriptionElement = document.getElementById('description');
    console.log(typeof response.data.fullname);
    console.log(fullnameElement);
    fullnameElement.innerHTML = fullname;
    birthdayElement.innerHTML = birthday;
    genderElement.innerHTML = gender === 0 ? 'Male' : 'Female';
    descriptionElement.innerHTML = description
    avatarElement.src = avatar;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}
