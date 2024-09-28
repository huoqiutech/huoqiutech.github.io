document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('background-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: 0, y: 0 };
    let dpr = window.devicePixelRatio || 1;

    function resizeCanvas() {
        canvas.width = window.innerWidth * dpr;
        canvas.height = document.documentElement.scrollHeight * dpr;
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = document.documentElement.scrollHeight + 'px';
        ctx.scale(dpr, dpr);
    }

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgba(${r}, ${g}, ${b}, 0.7)`;
    }

    function createParticles() {
        particles = [];
        const particleCount = Math.floor((window.innerWidth * document.documentElement.scrollHeight) / 10000);
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * document.documentElement.scrollHeight,
                radius: Math.random() * 2 + 1,
                vx: Math.random() * 2 - 1,
                vy: Math.random() * 2 - 1,
                color: getRandomColor()
            });
        }
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

        particles.forEach(particle => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();

            // 绘制连线
            particles.forEach(otherParticle => {
                const dx = particle.x - otherParticle.x;
                const dy = particle.y - otherParticle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    ctx.beginPath();
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(otherParticle.x, otherParticle.y);
                    ctx.strokeStyle = 'rgba(200, 200, 200, 0.3)';
                    ctx.stroke();
                }
            });

            // 更新粒子位置
            particle.x += particle.vx;
            particle.y += particle.vy;

            // 边界检查
            if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1;
            if (particle.y < 0 || particle.y > document.documentElement.scrollHeight) particle.vy *= -1;

            // 鼠标交互
            const dx = mouse.x - particle.x;
            const dy = mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 100) {
                particle.x += dx * 0.01;
                particle.y += dy * 0.01;
            }
        });
    }

    function animate() {
        drawParticles();
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', function() {
        resizeCanvas();
        createParticles();
    });

    document.addEventListener('mousemove', function(e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY + window.pageYOffset;
    });

    resizeCanvas();
    createParticles();
    animate();
});