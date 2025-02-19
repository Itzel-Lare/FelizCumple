function createSparkles() {
    const container = document.querySelector('.sparkles');
    for (let i = 0; i < 100; i++) {
        let sparkle = document.createElement('div');
        sparkle.style.top = Math.random() * 100 + 'vh';
        sparkle.style.left = Math.random() * 100 + 'vw';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(sparkle);
    }
}

function createBalloons() {
    const container = document.querySelector('.balloon-container');
    for (let i = 0; i < 10; i++) {
        let balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(balloon);
    }
}

function createFireworks() {
    const canvas = document.getElementById("fireworks");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function explode(x, y) {
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
                ctx.beginPath();
                ctx.arc(x + Math.random() * 50 - 25, y + Math.random() * 50 - 25, Math.random() * 5 + 2, 0, Math.PI * 2);
                ctx.fill();
            }, i * 50);
        }
    }

    setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        explode(Math.random() * canvas.width, Math.random() * canvas.height / 2);
    }, 1000);
}

createSparkles();
createBalloons();
createFireworks();
