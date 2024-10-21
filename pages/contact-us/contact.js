const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit');
const fnameInput = document.getElementById('fname');
const lnameInput = document.getElementById('lname');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const fnameError = document.getElementById('fnameError');
const lnameError = document.getElementById('lnameError');
const phoneError = document.getElementById('phoneError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

 // submit button click event 
submitBtn.addEventListener('click', function (event) {
  event.preventDefault(); // Block form submission

  // Clear the last error message
  fnameError.textContent = '';
  lnameError.textContent = '';
  phoneError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';

  // Get input value
  const fname = fnameInput.value.trim();
  const lname = lnameInput.value.trim();
  const phone = phoneInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  let isValid = true;

  // Verify that the fname lname phone is empty
  if (fname === '') {
    fnameError.textContent = 'fname is required';
    isValid = false;
  }

  if (lname === '') {
    lnameError.textContent = 'lname is required';
    isValid = false;
  }
  if (phone === '') {
    phoneError.textContent = 'phone is required';
    isValid = false;
  }
  // 验证电子邮件格式
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    emailError.textContent = 'Email is required';
    isValid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = 'Please enter a valid email address';
    isValid = false;
  }

  // Verify the email format
  if (message === '') {
    messageError.textContent = 'message is required';
    isValid = false;
  } else if (message.length < 6) {
    messageError.textContent = 'message must be at least 6 characters';
    isValid = false;
  }

  // If the form verification is successful, the form content is cleared and a prompt message is displayed
  if (isValid) {
    contactForm.reset();
    alert('sumbit successfully, we will touch you soon!')
  }
});