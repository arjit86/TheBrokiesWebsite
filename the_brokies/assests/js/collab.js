document.addEventListener("DOMContentLoaded", function () {
    const scrollImages = document.querySelector(".scroll-images");
    const circles = document.querySelectorAll(".circle");
  
    let currentIndex = 0;
  
    function showCards(index) {
        scrollImages.style.transform = `translateX(-${scrollImages.clientWidth * index}px)`;
  
        circles.forEach((circle, i) => {
            circle.classList.toggle("active", i === index);
        });
    }
  
    circles.forEach((circle, i) => {
        circle.addEventListener("click", () => {
            currentIndex = i;
            showCards(currentIndex);
        });
    });
  
    // Auto scroll logic
    setInterval(() => {
        currentIndex = (currentIndex + 1) % circles.length;
        showCards(currentIndex);
    }, 8000); // Change cards every 5 seconds
});
