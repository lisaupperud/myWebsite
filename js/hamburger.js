// hämtar hamburgar-knappen och navigationsmenyn
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// lägger till klickhändelse
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // växlar till active
});
