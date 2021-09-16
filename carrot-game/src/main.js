const playBtn = document.querySelector('.playBtn');
const stopBtn = document.querySelector('.stopBtn');
const retryBtn = document.querySelector('.retryBtn');

const timerElement = document.querySelector('.timer');
const counterElement = document.querySelector('.counter');
const images = document.querySelector('.images');

const popup = document.querySelector('.popup');
const message = document.querySelector('.message');

let interval;
let counter;


// 요소에 해당 속성이 없다면 추가하는 함수
const setAttribute = (element, attribute) => {
  if (!element.classList.contains(attribute)) {
    element.classList.add(attribute);
  }
}

// 요소에 해당 속성이 있다면 제거하는 함수
const removeAttribute = (element, attribute) => {
  if (element.classList.contains(attribute)) {
    element.classList.remove(attribute);
  }
}

// 1. 당근 & 곤충

images.addEventListener('click', event => {
  // 1) 당근을 클릭한 경우 => 해당 당근을 지우고, 카운터 숫자를 1 뺀다.
  const id = event.target.dataset.id;
  if (id) {
    const clickedCarrot = document.querySelector(`.carrot[data-id="${id}"]`);
    clickedCarrot.remove();

    counter--;
    counterElement.innerText = counter;
    (counter === 0) && endGame();
  }

  // 2) 곤충을 클릭한 경우 => 게임을 종료한다.
  if (event.target.classList[0] === 'bug') {
    endGame();
  }
})

// min 이상 max 미만의 임의의 난수를 생성하는 함수
const getRandomValue = (min, max) => {
  return Math.random() * (max - min) + min;
}

// 당근 n개를 임의의 위치에 배치하는 함수
const showCarrots = (n) => {
  for (let i = 0; i < n; i++) {
    let randomX = getRandomValue(window.innerWidth / 2 - 375, window.innerWidth / 2 + 325);
    let randomY = getRandomValue(250, 425);

    images.innerHTML += `<img src="img/carrot.png" alt="carrot" class="carrot absolute larger-on-hover" 
      data-id=${i} style="top: ${randomY}px; left: ${randomX}px;"
    >`;
  }
}

// 곤충 n마리를 임의의 위치에 배치하는 함수
const showBugs = (n) => {
  for (let i = 0; i < n; i++) {
    let randomX = getRandomValue(window.innerWidth / 2 - 375, window.innerWidth / 2 + 325);
    let randomY = getRandomValue(250, 425);

    images.innerHTML += `<img src="img/bug.png" alt="bug" class="bug absolute larger-on-hover"
      style="top: ${randomY}px; left: ${randomX}px;"
    >`;
  }
}

// 화면에 당근과 곤충을 보여주는 함수
const setCarrotsandBugs = () => {
  images.innerHTML = "";
  showCarrots(10);
  showBugs(10);
}

// 2. 타이머

class Timer {
  constructor() {
    this.second = 10;
  }

  decrease() {
    (this.second === 0) ? endGame() : this.second--;
  }
}

const runTimer = (timer) => {
  timerElement.innerHTML = `00:${timer.second.toString().padStart(2, '0')}`;
  timer.decrease();
}

const startTimer = () => {
  const timer = new Timer();
  runTimer(timer);
  interval = setInterval(runTimer, 1000, timer);
}

// 3. 게임 시작 / 중지 / 종료

// 게임 시작 => 시작버튼 X / 중지버튼 O / 팝업창 X
const setToStart = () => {
  setAttribute(playBtn, 'display-none');
  removeAttribute(stopBtn, 'display-none');
  removeAttribute(stopBtn, 'hidden');  // setToEnd에서 설정한 hidden을 제거함. 
  setAttribute(popup, 'hidden');
}

// 게임 중지 or 종료 => 중지버튼 X / 팝업창 O
const setToEnd = () => {
  setAttribute(stopBtn, 'hidden');   
  removeAttribute(popup, 'hidden');
}

// 게임을 시작할 때 실행되는 함수
const startGame = () => {
  setToStart();
  setCarrotsandBugs();
  startTimer();
  counter = 10;
  counterElement.innerText = counter;
}

// 게임을 멈출 때 실행되는 함수
const stopGame = () => {
  setToEnd();
  clearInterval(interval);
  message.innerText = 'RETRY ❓';
}

// 게임에서 이기거나 져서 게임이 끝날 때 실행되는 함수
const endGame = () => {
  setToEnd();
  clearInterval(interval);

  (counter === 0) ? message.innerText = 'YOU WON 🎉' : message.innerText = 'YOU LOST 🤷🏽‍♀️';
}

playBtn.addEventListener('click', startGame);
retryBtn.addEventListener('click', startGame);
stopBtn.addEventListener('click', stopGame);
