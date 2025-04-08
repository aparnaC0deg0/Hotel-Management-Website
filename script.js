document.addEventListener('DOMContentLoaded', function() {
  let menu = document.querySelector('#menu-bars');
  let navbar = document.querySelector('.navbar');

  menu.onclick = () => {
      menu.classList.toggle('fa-times');
      navbar.classList.toggle('active');
  };

  let section = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header .navbar a');

  window.onscroll = () => {
    menu.classList.remove('active');
    navbar.classList.remove('active');

      section.forEach(sec => {
          let top = window.scrollY;
          let height = sec.offsetHeight;
          let offset = sec.offsetTop - 150;
          let id = sec.getAttribute('id');

          if (top >= offset && top < offset + height) {
              navLinks.forEach(links => {
                  links.classList.remove('active');
                  document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
              });
          }
      });
  };

  document.querySelector('#search-icon').onclick = () => {
      document.querySelector('#search-form').classList.toggle('active');
  };

  document.querySelector('#close').onclick = () => {
      document.querySelector('#search-form').classList.remove('active');
  };

  var swiper = new Swiper(" home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

  var homeSlider = new Swiper(".home-slider", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      loop: true,
      nested: true 
    });
    

  var reviewSlider = new Swiper(".review-slider", {
      spaceBetween: 20,
      centeredSlides: true,
      autoplay: {
          delay: 3500,
          disableOnInteraction: false
      },
      loop: true,
      breakpoints: {
          0: {
              slidesPerView: 1
          },
          640: {
              slidesPerView: 2
          },
          768: {
              slidesPerView: 2
          },
          1024: {
              slidesPerView: 3
          }
      },
      sourceMap: false
  });

  function loader() {
      let loaderContainer = document.querySelector('.loader-container');
      if (loaderContainer) {
          loaderContainer.classList.add('fade-out');
      }
  }

  function fadeOut() {
      setInterval(loader, 5500);
  }

  window.onload = fadeOut;
});



function c(){
  var a = document.getElementById("name").value;
  var b = document.getElementById("number").value;
  var c = document.getElementById("order").value;
  var d = document.getElementById("food").value;
  var e = document.getElementById("much").value;
  var f = document.getElementById("date").value;
  var g = document.getElementById("address").value;
  var h = document.getElementById("message").value;



  if (
    a === ""  ) {
    alert("Please enter name.");
    return false;
  }
  if (
    b === ""  ) {
    alert("Please enter number.");
    return false;
  }
  if (
    c === ""  ) {
    alert("Please enter order.");
    return false;
  }
  if (
    d === ""  ) {
    alert("Please enter additional food.");
    return false;
  }
  if (
    e === ""  ) {
    alert("Please enter quantity.");
    return false;
  }
  if (
    f === ""  ) {
    alert("Please enter date.");
    return false;
  }
  if (
    g === ""  ) {
    alert("Please enter address.");
    return false;
  }
  if (
    h === ""  ) {
    confirm("Please enter any message if you want to.");
  }

  
    var v = confirm("Are you sure to place order?");
    if (v == true) {
        alert("Your Order has been placed");
    }
    else {
        alert("Your order has been cancelled");
    }


}