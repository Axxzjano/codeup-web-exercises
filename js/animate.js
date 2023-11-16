// Get the canvas element
var canvas = document.getElementById("myCanvas");

// Set up the drawing context
var ctx = canvas.getContext("2d");

// Define initial position
var x = 50;
var y = 50;

// Define the update function
function update() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw a rectangle at the current position
    ctx.fillRect(x, y, 30, 30);

    // Update the position for the next frame
    x += 2;
    y += 1;

    // Request the next animation frame
    requestAnimationFrame(update);
}

// Start the animation
update();


