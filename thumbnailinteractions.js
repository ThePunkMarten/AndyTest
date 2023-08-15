document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".thumbnail-container img");
    const overlay = document.querySelector(".large-image-overlay");
    const largeImage = document.querySelector(".large-image");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function () {
            const src = this.getAttribute("src");
            largeImage.src = src;
            overlay.style.display = "block";
        });
    });

    overlay.addEventListener("click", function () {
        overlay.style.display = "none"; // Hide the overlay when clicked
    });

    largeImage.addEventListener("click", function () {
        overlay.style.display = "none"; // Hide the overlay when the large image is clicked
    });
});