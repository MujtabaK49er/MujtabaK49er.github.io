let x = 50;   // Starting x position of the animated circle
let y = 50;   // Starting y position of the animated circle
let speedX = 3;  // Speed of the circle movement in the x direction
let speedY = 2;  // Speed of the circle movement in the y direction

function setup() {
    createCanvas(500, 400);
    background(220);  // Light gray background
}

function draw() {
    // Clear the canvas for each frame to create animation effect
    clear();
    
    // Draw the interactive line (mouse drawing)
    if (mouseIsPressed) {
        stroke(0); // Black stroke color
        strokeWeight(4); // Line thickness
        line(mouseX, mouseY, pmouseX, pmouseY); // Draw line based on mouse movement
    }

    // Draw animated circle
    fill(255, 0, 0);  // Red fill color
    noStroke();
    ellipse(x, y, 50, 50);  // Draw circle

    // Update the circle's position for animation
    x += speedX;
    y += speedY;

    // Reverse direction when it hits the edge of the canvas
    if (x > width || x < 0) {
        speedX *= -1;
    }
    if (y > height || y < 0) {
        speedY *= -1;
    }
}

// Optional: Clear the canvas when 'c' key is pressed
function keyPressed() {
    if (key === 'c') {
        background(220); // Reset the background to clear the canvas
    }
}