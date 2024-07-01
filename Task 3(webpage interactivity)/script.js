// Form Validation
const form = document.getElementById('myForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Validate input using regular expressions
  const nameRegex = /^[a-zA-Z ]+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!nameRegex.test(name)) {
    alert('Invalid name');
    return;
  }

  if (!emailRegex.test(email)) {
    alert('Invalid email');
    return;
  }

  // If input is valid, submit the form
  form.submit();
});

// Interactive Menu
const menu = document.getElementById('menu');
const menuItems = menu.querySelectorAll('li');

menuItems.forEach((item) => {
  item.addEventListener('mouseover', ()=> {
    item.classList.add('active');
  });

  item.addEventListener('mouseout', () => {
    item.classList.remove('active');
  });
});

// Dynamic Content Updates
const contentDiv = document.getElementById('content');
const updateButton = document.getElementById('updateButton');

updateButton.addEventListener('click', () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://example.com/api/data', true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      contentDiv.innerHTML = '';
      data.forEach((item) => {
        const paragraph = document.createElement('p');
        paragraph.textContent = item.text;
        contentDiv.appendChild(paragraph);
      });
    }
  };
  xhr.send();
});

// Secure User Input Handling
const userInput = '<script>alert("XSS");</script>';
const sanitizedInput = DOMPurify.sanitize(userInput);
document.getElementById('content').innerHTML = sanitizedInput;