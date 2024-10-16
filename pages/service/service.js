const planButton = document.getElementById('plan-button')
const inquireBtns = document.getElementsByClassName('inquire')

// book buttons  click event
for (let i = 0; i < inquireBtns.length; i++) {
  inquireBtns[i].addEventListener('click', function () {
    window.location.href = '../contact-us/contact.html';
  });
}

planButton.addEventListener('click', function () {
  window.location.href = '../contact-us/contact.html';
});
