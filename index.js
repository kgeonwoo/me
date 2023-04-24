$(document).ready(function () {

    $('.crs').hide()
    $('.crs_1').show()

    $('#goAboutMe').click(function () {
        var abm = $('#aboutMe').offset().top - 100
        $('html, body').animate({ scrollTop: abm}, 100)
    })

    $('#goskill').click(function () {
        var skills = $('.sul').offset().top - 100
        $('html, body').animate({ scrollTop: skills }, 100)
    })

    $('.dropdown-item, .goApp').click(function () {
        var crs = $('#crs').offset().top
        $('html, body').animate({ scrollTop: crs - 150 }, 100)
        if($(this) === $('.gc_1')){
            console.log("true")
        }else{
            console.log($(this))
            console.log($('.gc_1'))
        }
    })

    $(window).scroll(function(){
        var now = $(window).scrollTop()
        var skills = $('.sul').offset().top - 100
        var app = $('#crs').offset().top - 200
        var abm = $('#aboutMe').offset().top - 100
        if(now >= abm - 50 & now < abm + 50){
            $('.bg_img').animate($('.bg_img').attr('style', 'background-image: url("./img/bg1.jpg");') , 1000)
        }else if(now >= skills - 50 & now < skills + 50){
            $('.bg_img').animate($('.bg_img').attr('style', 'background-image: url("./img/bg2.jpg");') , 1000)
        }else if (now >= app - 50 & now < app + 50){
            $('.bg_img').animate($('.bg_img').attr('style', 'background-image: url("./img/bg3.jpg");') , 1000)
        }
    })

})