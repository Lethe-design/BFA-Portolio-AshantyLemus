let counter = 0;
        let ufoX = 250;
        let ufoY = 250;
        let ufoSpeedX = 3;
        let ufoSpeedY = 2;

        // Second UFO variables
        let ufo2X = 400;
        let ufo2Y = 150;
        let ufo2SpeedX = -3;

        let cloudX = 0;  // Starting position of the clouds
        let cloudSpeed = 1;  // Speed at which clouds move

        function setup() {
            createCanvas(500, 500);
            angleMode(DEGREES);
        }

        function draw() {
            background(143, 213, 246); // Sky blue background

            // Draw the sun
            deathstar(420, 80, counter, 0.5);
            counter += 0.1;

            // Draw the grass and buildings
            drawGrass();
            drawBuildings();

            // Move and draw the first UFO
            moveUFO();
            drawUFO(ufoX, ufoY, color(150, 150, 150)); // First UFO (default color)

            // Move and draw the second UFO (smaller)
            moveUFO2();
            drawUFO(ufo2X, ufo2Y, color(0, 255, 255), 0.5); // Second UFO (cyan color and smaller)

            // Move and draw the clouds
            moveClouds();
            drawClouds(cloudX, 50);  // Clouds position at y = 50
            drawClouds(cloudX + 200, 100); // Second cloud at y = 100
        }

        function deathstar(lx, ly, rot, sc) {
            push();
            translate(lx, ly);
            rotate(rot);
            scale(sc);
            fill(243, 255, 61);
            ellipse(0, 0, 200, 200); // Sun body
            fill(255, 204, 0);
            for (let i = 0; i < 12; i++) {
                let angle = i * 30;
                let x1 = cos(angle) * 120;
                let y1 = sin(angle) * 120;
                let x2 = cos(angle + 15) * 150;
                let y2 = sin(angle + 15) * 150;
                let x3 = cos(angle - 15) * 150;
                let y3 = sin(angle - 15) * 150;
                triangle(x1, y1, x2, y2, x3, y3);
            }
            pop();
        }

        // Function to move the first UFO
        function moveUFO() {
            ufoX += ufoSpeedX;
            ufoY += ufoSpeedY;

            // Bounce off the edges of the canvas
            if (ufoX <= 0 || ufoX >= width) {
                ufoSpeedX *= -1;
            }
            if (ufoY <= 0 || ufoY >= height) {
                ufoSpeedY *= -1;
            }
        }

        // Function to move the second UFO side to side
        function moveUFO2() {
            ufo2X += ufo2SpeedX;

            // Bounce the second UFO side to side
            if (ufo2X <= 0 || ufo2X >= width) {
                ufo2SpeedX *= -1;
            }
        }

        // Function to draw UFO
        function drawUFO(x, y, ufoColor, scaleVal = 1) {
            push();
            noStroke();
            scale(scaleVal); // Apply scaling if needed

            // UFO body (main metallic part)
            fill(ufoColor); // UFO color (passed in as parameter)
            ellipse(x, y, 120, 40); // UFO body

            // UFO dome (top part)
            fill(200, 200, 255); // Light blue for the dome
            arc(x, y - 10, 120, 60, PI, 0, CHORD); // UFO dome

            // UFO lights (glowing lights underneath)
            fill(255, 204, 0); // Yellow glow
            ellipse(x - 40, y + 15, 20, 10); // Left light
            ellipse(x, y + 15, 20, 10); // Center light
            ellipse(x + 40, y + 15, 20, 10); // Right light

            // UFO details (engines or fins on the sides)
            fill(100, 100, 100); // Darker grey for the fins
            triangle(x - 50, y + 20, x - 70, y + 30, x - 50, y + 40); // Left fin
            triangle(x + 50, y + 20, x + 70, y + 30, x + 50, y + 40); // Right fin

            pop();
        }

        // Function to draw grass at the bottom of the screen
        function drawGrass() {
            fill(34, 139, 34); // Green grass color
            noStroke();
            rect(0, height - 50, width, 50); // Grass field at the bottom
        }

        // Function to draw buildings
        function drawBuildings() {
            fill(150, 150, 150); // Building color (gray)

            // Building 1 (left)
            rect(50, height - 150, 50, 100); // Building body
            fill(100, 100, 100); // Darker shade for roof
            rect(50, height - 170, 50, 20); // Roof

            // Building 2 (middle)
            fill(150, 150, 150);
            rect(150, height - 180, 70, 130); // Building body
            fill(100, 100, 100); // Darker shade for roof
            rect(150, height - 200, 70, 20); // Roof

            // Building 3 (right)
            fill(150, 150, 150);
            rect(300, height - 120, 60, 110); // Building body
            fill(100, 100, 100); // Darker shade for roof
            rect(300, height - 140, 60, 20); // Roof
        }

        // Function to move clouds side to side
        function moveClouds() {
            cloudX += cloudSpeed;

            // Reset cloud position when it goes off-screen
            if (cloudX > width) {
                cloudX = -200; // Reset to the left side (off-screen)
            }
        }

        // Function to draw clouds
        function drawClouds(x, y) {
            fill(255); // White color for clouds
            noStroke();

            // Cloud shape: Using ellipses to create a cloud
            ellipse(x, y, 80, 40); // Main part of the cloud
            ellipse(x + 30, y - 10, 70, 40); // Left puff
            ellipse(x - 30, y - 10, 70, 40); // Right puff
            ellipse(x + 60, y + 10, 60, 30); // Bottom puff
            ellipse(x - 60, y + 10, 60, 30); // Bottom puff
        }