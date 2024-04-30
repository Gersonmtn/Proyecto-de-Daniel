<!DOCTYPE html>
<html>
<head>
    <title>Just Simple Shapes</title>
    <style>
        body {
            margin: 0;
            background-color: black;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        canvas {
            border: 2px solid white;
        }
    </style>
</head>
<body>
    <canvas id="gameCanvas" width="800" height="600"></canvas>
    <script>
        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');

        // Player
        const playerRadius = 20;
        let playerX = canvas.width / 2;
        let playerY = canvas.height - 30;

        // Obstacles
        const obstacleArray = [];

        // Audio
        const musicFile = 'path/to/your/music.mp3'; // Reemplaza con la ruta de tu archivo de música
        const music = new Audio(musicFile);
        music.loop = true;

        // Game loop
        function gameLoop() {
            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw player
            ctx.beginPath();
            ctx.arc(playerX, playerY, playerRadius, 0, Math.PI * 2);
            ctx.fillStyle = 'white';
            ctx.fill();

            // Draw obstacles
            for (let i = 0; i < obstacleArray.length; i++) {
                ctx.beginPath();
                ctx.rect(obstacleArray[i].x, obstacleArray[i].y, obstacleArray[i].width, obstacleArray[i].height);
                ctx.fillStyle = obstacleArray[i].color;
                ctx.fill();

                // Move obstacles
                obstacleArray[i].y += obstacleArray[i].speed;

                // Remove obstacles that have gone off the screen
                if (obstacleArray[i].y > canvas.height) {
                    obstacleArray.splice(i, 1);
                    i--;
                }
            }

            // Generate new obstacles
            if (Math.random() < 0.01) {
                const obstacleWidth = 50;
                const obstacleHeight = 20;
                const obstacleX = Math.random() * (canvas.width - obstacleWidth);
                const obstacleY = 0;
                const obstacleSpeed = 3;
                const obstacleColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
                obstacleArray.push({ x: obstacleX, y: obstacleY, width: obstacleWidth, height: obstacleHeight, speed: obstacleSpeed, color: obstacleColor });
            }

            // Move player
            if (leftPressed && playerX > playerRadius) {
                playerX -= 5;
            } else if (rightPressed && playerX < canvas.width - playerRadius) {
                playerX += 5;
            }

            // Request next animation frame
            requestAnimationFrame(gameLoop);
        }

        // Keyboard controls
        let leftPressed = false;
        let rightPressed = false;

        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowLeft') {
                leftPressed = true;
            } else if (event.key === 'ArrowRight') {
                rightPressed = true;
            }
        });

        document.addEventListener('keyup', (event) => {
            if (event.key === 'ArrowLeft') {
                leftPressed = false;
            } else if (event.key === 'ArrowRight') {
                rightPressed = false;
            }
        });

        // Start game loop and music
        gameLoop();
        music.play();
    </script>
</body>
</html>