const clock = document.querySelector('h2#clock');

function getClock() {
    const date = new Date();

    const month = String(date.getMonth()).padStart(2, 0);
    const day = String(date.getDate()).padStart(2, 0);    
    const hours = String(date.getHours()).padStart(2, 0);
    const minutes = String(date.getMinutes()).padStart(2, 0);
    const seconds = String(date.getSeconds()).padStart(2, 0);
    
    clock.innerText = `${month}월 ${day}일 ${hours}:${minutes}:${seconds}`;

};

// 1초 기다리고 시작하지 않고 바로✨ 시작하도록
getClock();
setInterval(getClock, 1000);
