const light = document.createElement('div');
light.id = 'light';
document.body.appendChild(light);

const walls = document.querySelectorAll('.wall');
const bioElements = document.querySelectorAll('.bio');

// Track mouse movement
document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  
  // Check wall collisions (simplified AABB)
  let canPass = true;
  walls.forEach(wall => {
    const wallRect = wall.getBoundingClientRect();
    if (
      x > wallRect.left && 
      x < wallRect.right && 
      y > wallRect.top && 
      y < wallRect.bottom
    ) {
      canPass = false;
    }
  });
  
  // Move light if no wall collision
  if (canPass) {
    light.style.left = `${x}px`;
    light.style.top = `${y}px`;
    
    // Reveal bio elements near light
    bioElements.forEach(bio => {
      const bioRect = bio.getBoundingClientRect();
      const distance = Math.sqrt(
        Math.pow(x - (bioRect.left + bioRect.width / 2), 2) +
        Math.pow(y - (bioRect.top + bioRect.height / 2), 2)
      );
      
      if (distance < 100) bio.style.opacity = 1;
      else bio.style.opacity = 0;
    });
  }
});