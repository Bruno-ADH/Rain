let nbDrop = 858;

function randRange(minNum, maxNum) {
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

function createRain() {
    for (let i = 0; i < nbDrop; i++) {
        let dropLeft = randRange(0, 1600);
        let dropTop = randRange(-1000, 1400);
        document.querySelector('.rain').insertAdjacentHTML('beforeend', `<div class="drop" id="drop${i}"></div>`);
        document.getElementById(`drop${i}`).style.left = `${dropLeft}px`;
        document.getElementById(`drop${i}`).style.top = `${dropTop}px`;
    }
}
createRain()

const flash = document.getElementById('flash');
const rainSound = document.getElementById('rainSound');

rainSound.addEventListener('timeupdate', () => {
    if (rainSound.currentTime >= 2 && rainSound.currentTime < 2.1) {
        flash.style.opacity = '1';
        setTimeout(() => {
            flash.style.opacity = '0';
        }, 100);
    }
});

rainSound.addEventListener('ended', () => {
    rainSound.currentTime = 0;
    rainSound.play();
});


// const audio1 = new Audio('assets/sound.mp3');
// const audio2 = new Audio('assets/sound.mp3');

// audio1.loop = false;
// audio2.loop = false;

// audio1.volume = 1.0;
// audio2.volume = 1.0;

// function playLoop() {
//     audio1.play();
//     setTimeout(() => audio2.play(), audio1.duration * 1000 - 100);
//     setTimeout(playLoop, (audio1.duration - 0.1) * 1000);
// }

// playLoop();
