document.addEventListener("DOMContentLoaded", function () {
    const rocket = document.getElementById("rocket");
    const path = document.getElementById("motionPath");
    const pathLength = path.getTotalLength();
    let maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    let lastScroll = window.scrollY;

    function updateRocketPosition() {
        let scrollY = window.scrollY;
        let direction = scrollY > lastScroll ? 1 : -1; // Detect scroll direction
        
        // Map scroll position to path length
        let percentage = scrollY / maxScroll;
        let pathPosition = percentage * pathLength;
        
        // Get current point
        let point = path.getPointAtLength(pathPosition);
        
        // Get next point for angle calculation
        let nextPoint = path.getPointAtLength(Math.min(pathPosition + 1, pathLength));
        
        // Calculate angle
        let dx = nextPoint.x - point.x;
        let dy = nextPoint.y - point.y;
        let angle = Math.atan2(dy, dx) * (180 / Math.PI);

        // Adjust rotation for scrolling direction
        if (direction === -1) {
            angle += 180; // Flip the rocket when scrolling up
        }

        // Move and rotate the rocket
        rocket.style.transform = `translate(${point.x}px, ${point.y}px) rotate(${angle}deg)`;

        lastScroll = scrollY; // Update last scroll position
    }

    // Listen to scroll events
    window.addEventListener("scroll", updateRocketPosition);
    updateRocketPosition(); // Initial position update
});