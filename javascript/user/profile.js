function showProfile() {
    let html  = `<div class="banner">
    <div class="banner-title d-flex flex-column justify-content-center align-items-center">
        <img src="../element/img/avatar-dhg.png" alt="img" class="rounded-circle" width="80px" height="80px">
        <h3 class="text-light">Dave Gamache</h3>
        <p class="text-light">I wish i was a little bit taller, wish i was a baller, wish i had a girl… also.</p>

    </div>


    <div class="banner-end d-flex justify-content-center align-items-end">
        <ul class="nav text-light">
            <li class="nav-item nav-link active">Photos</li>
            <li class="nav-item nav-link">Others</li>
            <li class="nav-item nav-link">Anothers</li>

        </ul>

    </div>


</div>

<!--------------------Image Portfolio----------------->


<div class="grid-template container my-4">


    <div class="item-1">


        <a href="../element/img/img1.jpg" data-lightbox="id"><img src="../element/img/img1.jpg" alt="" class="img-fluid"
                                                                  style="width:455px; height: 255px;"></a>


    </div>

    <div class="item-2 ">
        <a href="../element/img/img2.jpg" data-lightbox="id"> <img src="../element/img/img2.jpg" alt=""
                                                                   class="img-fluid"
                                                                   style="width:217px; height: 255px;"></a>

    </div>
    <div class="item-3">
        <a href="../element/img/img3.jpg" data-lightbox="id"> <img src="../element/img/img3.jpg" alt=""
                                                                   class="img-fluid"
                                                                   style="width:217px; height: 255px;"></a>
    </div>
    <div class="item-4">
        <a href="../element/img/img4.jpg" data-lightbox="id"> <img src="../element/img/img4.jpg" alt=""
                                                                   class="img-fluid"
                                                                   style="width:217px; height: 255px;"></a>


    </div>


    <div class="item-5">

        <a href="../element/img/img5.jpg" data-lightbox="id"><img src="../element/img/img5.jpg" alt="" class="img-fluid"
                                                                  style="width:217px; height: 255px;"></a>


    </div>

    <div class="item-6">
        <a href="../element/img/img6.jpg" data-lightbox="id"> <img src="../element/img/img6.jpg" alt=""
                                                                   class="img-fluid"
                                                                   style="width:217px; height: 255px;"></a>


    </div>
    <div class="item-7">
        <a href="../element/img/img7.jpg" data-lightbox="id"> <img src="../element/img/img7.jpg" alt=""
                                                                   class="img-fluid"
                                                                   style="width:455px; height: 255px;"></a>

    </div>
    <div class="item-8">

        <a href="../element/img/img8.jpg" data-lightbox="id"> <img src="../element/img/img8.jpg" alt=""
                                                                   class="img-fluid"
                                                                   style="width:217px; height: 255px;"></a>

    </div>

    <div class="item-9">
        <a href="../element/img/img9.jpg" data-lightbox="id"><img src="../element/img/img9.jpg" alt="" class="img-fluid"
                                                                  style="width:217px; height: 255px;"></a>


    </div>

    <div class="item-10">
        <a href="../element/img/img10.jpg" data-lightbox="id"> <img src="../element/img/img10.jpg" alt=""
                                                                    class="img-fluid"
                                                                    style="width:217px; height: 255px;"></a>


    </div>
    <div class="item-11">
        <a href="../element/img/img11.jpg" data-lightbox="id"> <img src="../element/img/img11.jpg" alt=""
                                                                    class="img-fluid"
                                                                    style="width:455px; height: 255px;"></a>

    </div>
    <div class="item-12">
        <a href="../element/img/img12.jpg" data-lightbox="id"> <img src="../element/img/img12.jpg" alt=""
                                                                    class="img-fluid"
                                                                    style="width:217px; height: 255px;"></a>


    </div>


</div>`;
    document.getElementById('container').innerHTML = html;
}