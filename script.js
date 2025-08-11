// Typing animation effect
const typingText = document.getElementById('typingText');
const text = "Hi, I’m Sai Asrith! I’m an aspiring software engineer!";

let i = 0;
function typeWriter() {
  if (i < text.length) {
    typingText.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

window.onload = typeWriter;

// Scroll to About Section on button click
function scrollToSection() {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}

// Initialize EmailJS (you’ll get these from your EmailJS dashboard)
const emailjsUserID = 'user_9vnevqh';
const emailjsServiceID = 'service_9vnevqh';
const emailjsTemplateID = 'template_9vnevqh';

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from reloading the page
  
  // Send form data using EmailJS
  emailjs.sendForm(emailjsServiceID, emailjsTemplateID, this, emailjsUserID)
    .then(function(response) {
      console.log('Message sent successfully', response);
      alert('Message sent successfully!');
    }, function(error) {
      console.log('Error sending message', error);
      alert('Error sending message. Please try again later.');
    });
});