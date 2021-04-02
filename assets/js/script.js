$('.popular-slider').slick({
    infinite: false,
    dots: false,
    slidesToShow: 1.15,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 3000,
            settings: "unslick"
        },
        {
            breakpoint: 800,
            settings: "slick"
        },
        {
            breakpoint: 767,
            settings:{
                slidesToShow: 1.15,
            }
        },
    ]
});
function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find(".burger-menu_button");
    let links = menu.find(".link");
    let overlay = menu.find("burger-menu_overlay");
    button.on("click",(e) => {
        e.preventDefault();
        toogleMenu();
    });
    links.on("click", () => toogleMenu());
    overlay.on("click", () => toogleMenu());
    function toogleMenu() {
        menu.toggleClass('burger-menu_active');

        if (menu.hasClass('burger-menu_active')) {
            $('body').css("overflow","hidden");
        }else  {
            $("body").css("overflow","visible")
        }
    }
}
burgerMenu('.burger-menu');
window.onscroll = function showHeader() {
    let header =    document.querySelector(".header");
    if (window.pageYOffset > 200) {
        header.classList.add("header-fixed")
    }
    else  {
        header.classList.remove("header-fixed")
    }
};
let bg = document.querySelector('.banner-parallax');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});
let bgMobile = document.querySelector('.banner-parallax');
window.addEventListener('scroll', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});
let bgSecond = document.querySelector('.banner-parallax-two');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});