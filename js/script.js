
//jque panggilkan class name = page-scrol dan ketika di click jalankan fungsinya
$('.page-scrol').on('click', function (e) {

    //ambil isi href
    const tujuan = $(this).attr('href');

    //mengambil elemen ybs
    const elemenTujuan = $(tujuan);

    //pindahkan scrol // animate = fungsi dari JQuery
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1250), easeInOutExpo;

    e.preventDefault();
});

//paralax fungsi Scrool
$(window).scroll(function () {
    const wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform': 'translate(0px ,' + wScroll / 4 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px ,' + wScroll / 2 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px ,' + wScroll / 1.2 + '%)'
    });

    // potfolio offset=jarak top=atas
    if (wScroll > $('.portfolio').offset().top - 200) {
        $('.portfolio .thumbnail').addClass('muncul');
    }


});

// $('.portfolio .thumbnail').addClass('muncul');