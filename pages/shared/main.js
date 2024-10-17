/**
 * main.js - Common Header, Footer Component
 * 
 * Description:
 * This file contains the logic and structure of the common header section and footer section for the website or application, 
 * such as the navigation bar, logo,  etc.
 * This component is typically reused across all pages, serving as a fixed header.

 * Usage Instructions:
 * - After importing this file, ensure there are corresponding DOM elements in the HTML structure
 * - Can be used globally across the application or customized for specific pages
 * 
 * Author: LIN
 */


const header = document.createElement('header');
const footer = document.createElement('footer');
header.classList.add = "global-header";
header.innerHTML = `<div class="top-nav light-bgcolor">
        <div class="header-logo" id="header-logo">
          <img src="${getImagePath("./image/logo.jpg")}" alt="Melb-travel logo" class="logo">
        </div>
        <ul class="header-nav">
          <li>Home</li>
          <li>Tours</li>
          <li>Service</li>
          <li>About Us</li>
          <li class="contact-btn"><button class="color-button">Contact Us</button></li>
        </ul>
        <div class="hamburger-menu" id="burger-menu">
          <img src="${getImagePath("./image/menu.png")}" alt="hamburger menu">
        </div>
        <div class="close-menu" id="close-menu">
          <img src="${getImagePath("./image/close.png")}" alt="hamburger menu">
        </div>
      </div>
      <aside class="side-menu light-bgcolor" id="side-menu">
        <ul class="menu-item-list">
          <li><span class="material-symbols-outlined">home</span>Home</li>
          <li><span class="material-symbols-outlined">subway</span>Tours</li>
          <li><span class="material-symbols-outlined">keyboard_command_key</span>Service</li>
          <li><span class="material-symbols-outlined">flight_takeoff</span>About Us</li>
          <li><span class="material-symbols-outlined">import_contacts</span>Contact Us</li>
        </ul>
      </aside>`;
footer.classList.add("footer-container", "dark-bgcolor");
footer.innerHTML = `<img src="${getImagePath("./image/map.png")}" class="footer-map">
      <div class="company-info">
        <div class="contact-container">
          <img src="${getImagePath("./image/logo.jpg")}" class="footer-log">
          <div class="contact-info">
            <p>adress: 834 Bourke St, Docklands VIC 3008</p>
            <p>email:hellomelbtravel@gmail.com</p>
            <p>mobile:043498854</p>
          </div>
        </div>
        <p class="Office-hour">Office Hours: <br>
          Monday: 8am – 7pm<br>
          Tuesday: 8am – 5pm<br>
          Wednesday: 8am – 5pm<br>
          Thursday: 8am – 7pm<br>
          Friday: 8am – 5pm<br>
        </p>
        <div class="touch">
          <i>Want To Know More About Our Melbourne Travel?</p>
            <button class="color-button" id="touch-button">GET IN TOUCH</button>
        </div>
      </div>`;
document.body.prepend(header);
document.body.append(footer);


const hamburgerMenu = document.getElementById('burger-menu');
const closeMenu = document.getElementById('close-menu');
const siderMenu = document.getElementById('side-menu');
const headerLogo = document.getElementById('header-logo');
const touchButton = document.getElementById('touch-button');
const menubtns = document.querySelectorAll('.header-nav li');
const downMenubtns = document.querySelectorAll('#side-menu li');
let isSideMenu = false;
// Gets the path to the current page
let path = window.location.pathname;
// Use the split() method to split the path by a slash
let segments = path.split('/');
// Gets the last non-empty string (filename or last path segment)
let lastSegment = segments.pop() || segments[segments.length - 1];
let filename = lastSegment.replace(/\.html$/, '');

// headerLogo click event
headerLogo.addEventListener('click', function () {
  redirectTo('Home');
});
// header get in touch button
touchButton.addEventListener('click', function () {
  redirectTo('Contact Us');
});
// menu buttons  click event
for (let i = 0; i < menubtns.length; i++) {
  // add classlist to current page
  if (menubtns[i].innerHTML === capitalizeFirstLetter(filename)) {
    menubtns[i].classList.add('page-active');
  } else {
    menubtns[i].classList.remove = "page-active";
  }
  menubtns[i].addEventListener('click', redirectTo);
}

// downdrops menu buttons  click event
for (let i = 0; i < downMenubtns.length; i++) {
  // add classlist to current page
  let currentName = getNodeText(downMenubtns[i]);
  if (currentName === capitalizeFirstLetter(filename)) {
    downMenubtns[i].classList.add('side-menu-active');
  } else {
    downMenubtns[i].classList.remove = "side-menu-active";
  }
  downMenubtns[i].addEventListener('click', redirectTo);
}

// Click menu, navigation
function redirectTo(param) {
  let page = param.target && getNodeText(param.target) || param;
  let pathname = capitalizeFirstLetter(filename);
  const basePath = pathname === "Home" ? './pages/' : '../';
  if (page === pathname) {
    isSideMenu && closeSideMenu();
    return
  }
  switch (page) {
    case 'Home':
      window.location.href = '../../index.html';
      break;
    case 'Tours':
      window.location.href = `${basePath}tours/tours.html`;
      break;
    case 'Service':
      window.location.href = `${basePath}service/service.html`;
      break;
    case 'About Us':
      window.location.href = `${basePath}about-us/about.html`;
      break;
    default:
      window.location.href = `${basePath}contact-us/contact.html`;
      break;
  }
}

// hamburgeMenu click event
hamburgerMenu.addEventListener('click', () => {
  siderMenu.classList.toggle('show-menu');
  closeMenu.classList.toggle('show-menu');
  hamburgerMenu.classList.toggle('hide-menu');
  isSideMenu = true;

});

// closeMenu click event
closeMenu.addEventListener('click', () => {
  closeSideMenu();
});

// close sideMenu function
function closeSideMenu() {
  siderMenu.classList.remove('show-menu');
  closeMenu.classList.remove('show-menu');
  hamburgerMenu.classList.remove('hide-menu');
  isSideMenu = false;
}

// Gets the node text function
function getNodeText(param) {
  let nodeText = "";
  if (!param || !param.childNodes) {
    return '';
  }
  param.childNodes.forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      const trimmedText = node.textContent.trim();
      if (trimmedText) {
        nodeText = trimmedText;
      }
    }
  });

  return nodeText;
}

// Get picture path function
function getImagePath(path) {
  if (document.title !== "MEL TRAVEL") {
    return path.replace("./", "../../");
  } else {
    return path
  }
}

// Capital function
function capitalizeFirstLetter(str) {
  if (str.length === 0) return str;
  if (str === 'index') return 'Home'
  if (str === 'about') return 'About Us'
  if (str === 'contact') return 'Contact Us'
  return str.charAt(0).toUpperCase() + str.slice(1);
}


