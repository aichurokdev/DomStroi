const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 4,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const slider = new Swiper('.mySwiper', {
    loop: true,
    slidesPerView: 1.6,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next_own",
        prevEl: ".swiper-button-prev_two",
    },
});