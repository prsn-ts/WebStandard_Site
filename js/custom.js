//라이트 박스
$(".lightgallery").lightGallery();

//윈도우 팝업
$(".window").click(function(e){
    e.preventDefault();
    //window.open("파일명", "팝업이름", "옵션설정");
    //옵션 : left, top, width, height, status, toolbar, location, menubar, scrollbars, fullscreen
    window.open("sample_popup.html", "popup01", "width=800, height=590, left=50, top=50, scrollbar=0, toolbar=0, menubar=0");
})

//레이어 팝업
$(".layer").click(function(e){
    e.preventDefault();
    // $("#layer").css("display", "block");
    // $("#layer").show();
    // $("#layer").fadeIn();
    $("#layer").slideDown(300);
})
$("#layer>a").click(function(e){
    e.preventDefault();
    // $("#layer").css("display", "block");
    // $("#layer").show();
    // $("#layer").fadeOut();
    $("#layer").slideUp(300);
})

//탭메뉴
var $tab_list = $(".tab_menu");

$tab_list.find("ul ul").hide();
$tab_list.find("ul li.active > ul").show();

function tabMenu(e) {
    e.preventDefault();
    var $this = $(this);
    $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
}
$tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);

//배너
//html 마크업 셋팅 -> css 연동 -> jquery 연동 -> 제이쿼리 호출
$(".ban").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
});

//갤러리
$(".gallery_img").slick({
    arrows: false,
    fade: true,
    pauseOnHover: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 1
});
$(".play").click(function(){
    $(".gallery_img").slick("slickPlay");
});
$(".pause").click(function(){
    $(".gallery_img").slick("slickPause");
});
$(".prev").click(function(){
    $(".gallery_img").slick("slickPrev");
});
$(".next").click(function(){
    $(".gallery_img").slick("slickNext");
});

//버튼을 클릭하면 전체 메뉴를 보이게 한다.
//var count=0; 내가 생각한 방법1 (메뉴 열고 닫는 스크립트 짜기)
$(".tit .btn").click(function(e){
    e.preventDefault();
    //$("#cont_nav").css("display","block");
    //$("#cont_nav").show();
    //$("#cont_nav").fadeIn();
    //$("#cont_nav").slideDown();
    //$("#cont_nav").toggle();
    //$("#cont_nav").fadeToggle();
    $("#cont_nav").slideToggle(300); //메뉴 열고 닫는 스크립트 짜기 2 (따라한 것)
    $(this).toggleClass("on"); //메뉴 열고 닫는 스크립트 짜기 2 (따라한 것)

    /* 내가 생각한 방법1(메뉴 열고 닫는 스크립트 짜기)
    if(count%2===0){
        $(".tit .btn").addClass("on");
        $("#cont_nav").slideDown(300);
        count+=1;
    }
    else if(count%2!==0){
        $(".tit .btn").removeClass("on");
        $("#cont_nav").slideUp(300);
        count+=1;
    }
    */
});
