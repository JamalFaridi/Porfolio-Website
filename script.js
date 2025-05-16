ScrollReveal({
    reset: true,
    distance: '40px',
    duration: 500,
    delay: 10
});

ScrollReveal().reveal('.main-profile', { origin: "top" });
ScrollReveal().reveal('.main-info', { origin: "bottom" });


ScrollReveal({
    reset: true,
    distance: '40px',
    duration: 500,
    delay: 10
});

// ScrollReveal().reveal('.projects-box', { origin: "left" });


// ScrollReveal({
//     reset: true,
//     distance: '40px',
//     duration: 500,
//     delay: 10
// });

ScrollReveal().reveal('.resume-info', { origin: "left" });
ScrollReveal().reveal('.tenure-box', { origin: "right" });

ScrollReveal({
    reset: true,
    distance: '40px',
    duration: 500,
    delay: 100
});

ScrollReveal().reveal('.content-box', { origin: "right" });

ScrollReveal({
    reset: true,
    distance: '40px',
    duration: 500,
    delay: 10
});

ScrollReveal().reveal('.other-skills', { origin: "right" });

ScrollReveal({
    reset: true,
    distance: '40px',
    duration: 500,
    delay: 100
});


// Contact Animation

ScrollReveal().reveal(".contact-box", { origin: "left" });

ScrollReveal({
    reset: true,
    distance: '40px',
    duration: 500,
    delay: 100
});

ScrollReveal().reveal(".contact-form-box", { origin: "right" });

ScrollReveal({
    reset: true,
    distance: '40px',
    duration: 500,
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




// // Select DOM elements
// const hamMenu = document.getElementById('hamBurger-menu');
// const hamb = document.querySelector('.hamburger');

// // Check if elements exist to avoid errors
// if (!hamMenu || !hamb) {
//   console.error('Hamburger menu or button not found in the DOM');
// } else {
//   // Menu items configuration (aligned with HTML)
//   const menuItems = [
//       { text: 'Services', href: 'services.html' },
//       { text: 'Work', href: 'projects.html' }, // Changed from "Projects" to match HTML
//       { text: 'About', href: 'about.html' },
//       { text: 'Home', href: 'index.html' }
//   ];

//   // Function to create a single menu item
//   function createMenuItem(text, href) {
//     const li = document.createElement('li');
//     const a = document.createElement('a');
//     a.setAttribute('href', href);
//     a.textContent = text;
//     li.appendChild(a);
//     li.classList.add('dynamic-item'); // Add class to identify dynamic items
//     return li;
//   }

//   // Function to update the hamburger menu
//   function updateMenu() {
//     // Remove only dynamically added items (not Contact)
//     const dynamicItems = hamMenu.querySelectorAll('.dynamic-item');
//     dynamicItems.forEach(item => item.remove());

//     // Add menu items only if screen width <= 500px
//     if (window.innerWidth <= 500) {
//       menuItems.forEach(item => {
//         const menuItem = createMenuItem(item.text, item.href);
//         hamMenu.insertBefore(menuItem, hamMenu.firstChild); // Add before Contact
//       });
//     }
//   }

//   // Toggle hamburger menu on click
//   hamb.addEventListener('click', () => {
//     hamb.classList.toggle('ham-active');
//     hamMenu.classList.toggle('ham-menu');
//   });

//   // Update menu on resize
//   window.addEventListener('resize', updateMenu);

//   // Run on page load to handle initial state
//   updateMenu();
// }

// Select DOM elements
const hamMenu = document.getElementById('hamBurger-menu');
const hamb = document.querySelector('.hamburger');
const body = document.body;

// Check if elements exist to avoid errors
if (!hamMenu || !hamb) {
  console.error('Hamburger menu or button not found in the DOM');
} else {
  // Menu items configuration (aligned with HTML)
  const menuItems = [
      { text: 'Services', href: 'services.html' },
      { text: 'Work', href: 'work.html' },
      { text: 'About', href: 'about.html' },
      { text: 'Home', href: 'index.html' }
  ];

  // Function to create a single menu item
  function createMenuItem(text, href) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.setAttribute('href', href);
    a.textContent = text;
    if (window.location.pathname.endsWith(href)) {
      a.classList.add('active-page'); // Add active class for current page
    }
    li.appendChild(a);
    li.classList.add('dynamic-item'); // Add class to identify dynamic items
    return li;
  }

  // Function to toggle scroll lock
  function toggleScrollLock(isMenuOpen) {
    if (isMenuOpen) {
      body.style.overflow = 'hidden'; // Disable scroll
    } else {
      body.style.overflow = ''; // Re-enable scroll
    }
  }

  // Function to update the hamburger menu
  function updateMenu() {
    // Remove only dynamically added items (not Contact)
    const dynamicItems = hamMenu.querySelectorAll('.dynamic-item');
    dynamicItems.forEach(item => item.remove());

    // Add menu items only if screen width <= 500px
    if (window.innerWidth <= 500) {
      menuItems.forEach(item => {
        const menuItem = createMenuItem(item.text, item.href);
        hamMenu.insertBefore(menuItem, hamMenu.firstChild); // Add before Contact
      });
    }

    // If menu is open during resize to > 500px, close it and unlock scroll
    if (window.innerWidth > 500 && hamMenu.classList.contains('ham-menu')) {
      hamMenu.classList.remove('ham-menu');
      hamb.classList.remove('ham-active');
      hamb.setAttribute('aria-expanded', 'false');
      toggleScrollLock(false);
    }
  }

  // Toggle hamburger menu on click
  hamb.addEventListener('click', () => {
    const isActive = hamb.classList.toggle('ham-active');
    hamMenu.classList.toggle('ham-menu');
    hamb.setAttribute('aria-expanded', isActive);
    toggleScrollLock(isActive); // Lock/unlock scroll based on menu state
  });

  // Close menu and unlock scroll when a link is clicked
  hamMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      hamb.classList.remove('ham-active');
      hamMenu.classList.remove('ham-menu');
      hamb.setAttribute('aria-expanded', 'false');
      toggleScrollLock(false); // Unlock scroll
    }
  });

  // Update menu on resize
  window.addEventListener('resize', updateMenu);

  // Run on page load to handle initial state
  updateMenu();
}