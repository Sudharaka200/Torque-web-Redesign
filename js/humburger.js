document.addEventListener('DOMContentLoaded', function () {
    function addShareButtonListener() {
        const shareButton = document.getElementById('share-button');
        
        if (shareButton) {
            shareButton.addEventListener('click', function () {
                console.log('Share button clicked!');
            });
        } else {
            console.error("Share button not found.");
        }
    }

    function addHamburgerMenuListener() {
        const burgerMenu = document.getElementById('burger-menu');
        const menu = document.getElementById('menu');

        if (burgerMenu && menu) {
            burgerMenu.addEventListener('click', function () {
                menu.classList.toggle('active');
            });
        } else {
            console.error("Burger menu or navigation menu not found.");
        }
    }

    addShareButtonListener();
    addHamburgerMenuListener();
});
