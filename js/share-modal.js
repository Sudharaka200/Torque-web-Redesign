document.addEventListener('DOMContentLoaded', function () {
    const shareButton = document.getElementById('share-button');
    
    if (shareButton) {
        shareButton.addEventListener('click', function () {
            console.log('Share button clicked!');
            // Add your share functionality here
        });
    } else {
        console.error("Share button not found.");
    }
});
