document.addEventListener('DOMContentLoaded', () => {
    const background = document.getElementById('dynamic-background');
    const colors = ['#f0f0f0', '#e0e0e0', '#d0d0d0', '#c0c0c0', '#b0b0b0'];
    const numParticles = 50;

    for (let i = 0; i < numParticles; i++) {
        createParticle();
    }

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        background.style.setProperty('--mouse-x', x);
        background.style.setProperty('--mouse-y', y);
    });

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        background.style.transform = `translateY(-${scrollY}px)`;
    });

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.setProperty('--x', Math.random());
        particle.style.setProperty('--y', Math.random());
        particle.style.setProperty('--size', Math.random() * 10 + 5 + 'px');
        particle.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);
        background.appendChild(particle);
    }

    // 处理表单提交
    const contactForm = document.getElementById('contact-form');
    const messagePopup = document.getElementById('message-popup');
    const closeBtn = document.querySelector('.close-btn');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // 这里可以添加发送表单数据到服务器的代码

        // 显示弹出框
        messagePopup.style.display = 'block';

        // 3秒后自动关闭
        setTimeout(() => {
            messagePopup.style.display = 'none';
        }, 3000);
    });

    // 点击关闭按钮关闭弹出框
    closeBtn.addEventListener('click', () => {
        messagePopup.style.display = 'none';
    });

    // 点击弹出框外部关闭弹出框
    window.addEventListener('click', (e) => {
        if (e.target === messagePopup) {
            messagePopup.style.display = 'none';
        }
    });
});