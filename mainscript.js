let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".room-slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".gallery-slider", {
    spaceBetween: 10,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 10,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

let accordions = document.querySelectorAll('.faqs .row .content .box');

accordions.forEach(acco =>{
    acco.onclick = () =>{
        accordions.forEach(subAcco => {subAcco.classList.remove('active')});
        acco.classList.add('active');
    }
})

function checka(){

    var a = document.getElementById('date1').value;
    var b = document.getElementById('date2').value;

    if(a==''){
        alert('Please fill in the Checkin dates');
        return false;
    }
    if(b==''){
        alert('Please fill in Checkout dates');
        return false;
    }
    alert('Rooms are not available at the moment. You wil be informed when they are available');
}

function checkb(){

    var c = document.getElementById('date3').value;
    var d = document.getElementById('date4').value;

    var e = document.getElementById('name').value;
    var f = document.getElementById('email').value;

    if(e==''){
        alert('Please enter the Name of Booking');
        return false;
    }

    if(f==''){
        alert('Please enter an E-mail');
        return false;
    }
    
    var emailadd = /\S+@\S+\.com+/;
    if (!f.match(emailadd)) {
        alert('Invalid email');
        return false;
    }

    if(c==''){
        alert('Please fill in the Checkin dates');
        return false;
    }
    if(d==''){
        alert('Please fill in Checkout dates');
        return false;
    }

    alert('Rooms are not available at the moment. You wil be informed when they are available');

    window.open("index.html");
} 