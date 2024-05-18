$(document).ready(function(){
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: 1,
        speed : 800,
        autoplay : {
            delay : 3000,
            disableOnInteraction : false,
        },
    });

    $('.hambuger').click(function(){
        $(this).toggleClass('active');
        $('.side-bar').toggleClass('active');
    });

     media();
     function media(){
         let windowWidth = $(window).width();
         if(windowWidth >= 1800){

             //스크롤 위치값에 맞춰 클래스 제어
             $(window).scroll(function(){
                 const sct = $(window).scrollTop();
                 console.log(sct);

                 //섹션별 상단 위치값 변수에 저장
                 const banner = $('.banner').offset().top;
                 const sec1 = $('.sec-1').offset().top;
                 const sec2 = $('.sec-2').offset().top;
                 const sec5 = $('.sec-5').offset().top;

                 // 조건문으로 조건 걸어서 sec-1에서 .header-area 색상 변경 / sec-2 에서 다시 색상 변경 / sec-5 에서 다시 색상 변경

                 if(sct >= banner && sct < sec1){
                     $('.header-area').removeClass('active');
                     $('.header-logo svg').removeClass('active');
                     $('.header-logo').removeClass('active');
                 }else if(sct >= sec1 && sct < sec2){
                     $('.header-area').addClass('active');
                     $('.header-logo svg').addClass('active');
                     $('.header-logo').addClass('active');
                 }else if(sct >= sec2 && sct < sec5){
                     $('.header-area').removeClass('active');
                     $('.header-logo svg').removeClass('active');
                 }else if(sct >= sec5){
                     $('.header-area').addClass('active');
                     $('.header-logo svg').addClass('active');
                 }
                

             });

         }else{

         }
     }

})