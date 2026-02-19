// This helper function ensures the code runs ONLY after the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript is successfully linked!");

    // 1. Select the elements
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
    const donateBtn = document.getElementById('donateBtn');

    // 2. Hamburger Logic
    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            console.log("Hamburger clicked!"); 
            navLinks.classLists.toggle('active');
        });
    }

    // 3. Donate Button Logic
    if (donateBtn) {
        donateBtn.addEventListener('click', () => {
            alert("Thank you for your support!");
        });
    }
});