const bookBtns = document.getElementsByClassName('book-button');
// book buttons  click event
for (let i = 0; i < bookBtns.length; i++) {
  bookBtns[i].addEventListener('click', function () {
    window.location.href = './pages/contact-us/contact.html';
  });
}