ScrollReveal({
    reset: true,
    distance: '40px',
    duration: 1200,
    delay: 10
});

ScrollReveal().reveal('.main-profile', { origin: "top" });
ScrollReveal().reveal('.main-info', { origin: "bottom" });


ScrollReveal({
    reset: true,
    distance: '40px',
    duration: 1200,
    delay: 10
});

ScrollReveal().reveal('.project-info', { origin: "left" });
ScrollReveal().reveal('.project-img-box', { origin: "right" });


ScrollReveal({
    reset: true,
    distance: '40px',
    duration: 1200,
    delay: 10
});

ScrollReveal().reveal('.resume-info', { origin: "left" });
ScrollReveal().reveal('.tenure-box', { origin: "right" });

ScrollReveal({
    reset: true,
    distance: '40px',
    duration: 1500,
    delay: 100
});

ScrollReveal().reveal('.content-box', { origin: "right" });

ScrollReveal({
    reset: true,
    distance: '40px',
    duration: 1500,
    delay: 10
});

ScrollReveal().reveal('.other-skills', { origin: "right" });

ScrollReveal({
    reset: true,
    distance: '40px',
    duration: 1500,
    delay: 100
});


// Contact Animation

ScrollReveal().reveal(".contact-box", { origin: "left" });

ScrollReveal({
    reset: true,
    distance: '40px',
    duration: 1500,
    delay: 100
});

ScrollReveal().reveal(".contact-form-box", { origin: "right" });

ScrollReveal({
    reset: true,
    distance: '40px',
    duration: 1200,
    delay: 10
});



// Sticky Navbad


// let header = document.getElementsByTagName("header")[0];

// header.addEventListener("click", () => {
//     console.log("Hi I have been clicked")
// })

// window.addEventListener("scroll", () => {


//     if (window.scrollY > 40) {
//         console.log("I'm scrolling")
//         header.classList.add("active")
//     }
//     else {
//         header.classList.remove("active")
//     }
// })


// GOTOTOP ICON

let gototop = document.getElementsByTagName("footer")[0].lastElementChild


window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        gototop.classList.add("active")
    }
    else {
        gototop.classList.remove("active")
    }
})

gototop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // This will animate the scroll
    });
    console.log("Clicked")
})



// HAMBURGER MENU

// let hamMenu = document.body.children[0].children[0].children[1].children[1]; // ul tag



let hamMenu = document.getElementById("hamBurger-menu")
let hamb = document.querySelector(".hamburger");

hamb.addEventListener("click", () => {
    hamb.classList.toggle("ham-active");
    hamMenu.classList.toggle("ham-menu")
});


// let listItem = document.body.children[0].children[0].children[1].children[0].children[1].children;

// for (let i = 0; i < listItem.length; i++) {
//     listItem[i].addEventListener('click', () => {
//         let current = listItem[i].classList.add('active-page');
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//     })
// }


// let listItem = hamMenu.querySelectorAll('li');

// for (let i = 0; i < listItem.length; i++) {
//     listItem[i].addEventListener('click', function (event) {
//         event.preventDefault();

//         let current = document.querySelector(".active-page");

//         if (current) {
//             current.classList.remove("active-page");
//         }

//         this.className += "active-page";
//         console.log("clicked")
//     })
// }

// This is used to find out the current page of the HTML.

// let activePage = window.location.pathname;
// let navLinks = hamMenu.querySelectorAll('a');

// navLinks.forEach(link =>{

//     // This line checks if any <a> tag includes activePage (current page).
//     if(link.href.includes(`${activePage}`)){
//         link.classList.add('active-page');
//     }
// })