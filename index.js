const bookBtns = document.getElementsByClassName('book-button');
const tourMoreBtn = document.getElementById('tour-more');

// book buttons  click event
for (let i = 0; i < bookBtns.length; i++) {
  bookBtns[i].addEventListener('click', function(){
    window.location.href = './pages/contact-us/contact.html';
  });
}

// SEE MORE button click event
tourMoreBtn.addEventListener('click', function(){
  window.location.href = './pages/tours/tours.html';
});