const words = ["Coffee", "Music", "Arts", "Sport"];
let wordIndex = 0;
const typingElement = document.getElementById('word')
const bookBtns = document.getElementsByClassName('book')

// book buttons  click event
for (let i = 0; i < bookBtns.length; i++) {
  bookBtns[i].addEventListener('click', function(){
    window.location.href = '../contact-us/contact.html';
  });
}


function typeWord() {
  typingElement.innerHTML = words[wordIndex];
  typingElement.classList.add('typing');
  typingElement.addEventListener('animationend', function (event) {
    if (event.animationName === 'typing') {
      // Switch to the next word
      wordIndex = (wordIndex + 1) % words.length;
      // Remove listeners to prevent duplicate binding
      typingElement.removeEventListener('animationend', arguments.callee);
      // Reset animation
      typingElement.classList.remove('typing');
      setTimeout(() => {
        typeWord();
      })
    }
  });

}
// Start typing loop
typeWord();  