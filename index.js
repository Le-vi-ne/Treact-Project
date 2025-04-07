// Function to open the modal (mobile menu)
function openMenu() {
    document.body.classList.add("menu--open"); // Add class to body to display the menu
}

// Function to close the modal (mobile menu)
function closeMenu() {
    document.body.classList.remove("menu--open"); // Remove class from body to hide the menu
}

// Add event listener to each modal link to close the modal after clicking
const modalLinks = document.querySelectorAll('.modal__link');
modalLinks.forEach(link => { 
    link.addEventListener('click', function(event) {
        closeMenu(".modal__link"); // Close the menu when a link is clicked

        // Optionally scroll to the section smoothly
        const target = document.querySelector(this.getAttribute('href')); // Get the target section
        if (target) {
            window.scrollTo({
                top: target.offsetTop, // Scroll to the top of the target section
                behavior: 'smooth' // Enable smooth scrolling
            });
        }
    });
});

// Close the menu when clicking outside of it (optional)
document.addEventListener('click', function(event) {
    const modal = document.querySelector('.modal');
    const menuButton = document.querySelector('.btn__menu');
    if (!modal.contains(event.target) && !menuButton.contains(event.target)) {
        closeMenu(); // Close the menu if the click is outside the modal or button
    }
});
