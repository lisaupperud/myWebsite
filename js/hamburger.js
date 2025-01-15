// Hitta hamburgar-knappen och navigationsmenyn
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Lägg till klickhändelse på hamburgarmenyn
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Växla klassen 'active'
});
