document.addEventListener('DOMContentLoaded', (event) => {
    const bunnies = document.querySelectorAll('.bunny');
    const containerWidth = document.querySelector('.container').offsetWidth;
    let delay = 0;

    bunnies.forEach((bunny) => {
        bunny.style.left = `${containerWidth}px`; // Position outside the container
        bunny.style.animationDelay = `${delay}s, ${delay}s`;
        delay += 1; // Increase delay for the next bunny
        bunny.style.opacity = '1'; // Show bunny
    });
});
