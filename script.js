window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#111'; // Change background color when scrolled
    } else {
        navbar.style.backgroundColor = '#888'; // Original background color
    }
});
