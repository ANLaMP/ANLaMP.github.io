/*********************************************************************
***
*Original Author:      Anthony Patterson             *
*Date Created:         02/06/2024                    *
*Version:              2                             *
*Date Last Modified:   03/02/2024                    *
*Modified by:          Anthony Patterson             *
*Modification log:     
2- scrapped the prompts and added an image carousel  *
***
******************************************************************** */
document.addEventListener('DOMContentLoaded', function () {
    const images = [
        "./images/alexanderAfterDark.jpg",
        "./images/angryMom.jpg",
        "./images/crazyEyes.jpg"
    ];

    let currentIndex = 0;
    const imageElement = document.getElementById('homeImage');

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    }

    function updateImage() {
        imageElement.src = images[currentIndex];
    }

    setInterval(showNextImage, 5000);
});