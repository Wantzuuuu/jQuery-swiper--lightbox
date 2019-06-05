var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    // speed
    speed: 2000,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // auto play
    autoplay: {
        delay: 2000,
    },
    // pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },


    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
})