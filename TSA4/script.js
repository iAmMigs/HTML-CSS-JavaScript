function moveNoButton() {
    const noBtn = document.querySelector('.no');
    const positions = [
        { x: 150, y: 50 },
        { x: 25, y: 100 },
        { x: 250, y: 150 },
        { x: 350, y: 200 },
        { x: 200, y: 250 },
        { x: -550, y: -310 },
        { x: 100, y: 350 },
        { x: -400, y: 400 },
        { x: 850, y: 450 },
        { x: 150, y: 310 }
    ];
    const randomIndex = Math.floor(Math.random() * positions.length);
    const randomPos = positions[randomIndex];
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${randomPos.x}px`;
    noBtn.style.top = `${randomPos.y}px`;
}

document.querySelector('.no').addEventListener('mouseover', moveNoButton);
document.querySelector('.no').addEventListener('click', moveNoButton);

document.querySelector('.yes').addEventListener('click', () => {
    document.querySelector('.question').textContent = 'Yayyy Thank youuu I love you my bebi!';
});
function showConfetti() {
    const container = document.querySelector('.container');
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.animationDelay = Math.random() * 4 + 's';
        container.appendChild(confetti);
        setTimeout(() => {
            container.removeChild(confetti);
        }, 4000);
    }
}



