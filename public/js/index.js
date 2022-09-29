const app = {
    init () {
        app.addListenerToActions();
    },
    addListenerToActions () {
        const menuBurger = document.getElementById('menu-burger');
        menuBurger.addEventListener('click', app.toggleMobileMenu);
        const closeButton = document.getElementById('close-button')
        closeButton.addEventListener('click', app.toggleMobileMenu);
        const navLinks = document.querySelectorAll('.nav-link');
        for (link of navLinks) {
            link.addEventListener('click',  app.toggleMobileMenu);
        }
    },
    toggleMobileMenu () {
        const menuBurger = document.getElementById('menu-burger');
        menuBurger.classList.toggle('mobile:hidden')
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.toggle('mobile:block');
    }
}

document.addEventListener('DOMContentLoaded', app.init );