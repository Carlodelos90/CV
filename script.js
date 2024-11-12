// Get the background image element
const bgImage = document.querySelector('.bg-image');

// Add a scroll event listener
window.addEventListener('scroll', () => {
    // Get the scroll amount as a percentage of the total scroll height
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // Calculate blur based on the scroll position
    const blurValue = Math.max(10 - (scrollTop / windowHeight) * 10, 0); // Reduce blur as you scroll

    // Apply the blur filter
    bgImage.style.filter = `blur(${blurValue}px)`;
});