const socket = io();

const nicknameForm = document.querySelector("#nickname");
const welcome = document.querySelector("#welcome");
const room = document.querySelector("#room");
const enterForm = welcome.querySelector("#enter");

room.hidden = true;
let roomName = "";

// 채팅창에 메시지 추가
const addMessage = (message) => {
  const ul = room.querySelector("ul");
  const li = document.createElement("li");
  li.innerHTML = message;
  ul.appendChild(li);
};

// 채팅창에 내 메시지 추가
const addMyMessage = (message) => {
  const ul = room.querySelector("ul");
  const li = document.createElement("li");
  li.innerHTML = message;
  li.classList.add('red');
  ul.appendChild(li);
}

// 채팅방 목록 비우기
const emptyMessage = () => {
  const ul = room.querySelector("ul");
  ul.innerHTML = "";
}

// 닉네임 입력시 실행되는 함수
const onNicknameSubmit = (event) => {
  event.preventDefault();
  const input = nicknameForm.querySelector("input");
  const nickname = input.value;
  input.value = "";

  const myNickname = nicknameForm.querySelector("#my-nickname");
  myNickname.innerHTML = `내 닉네임 : ${nickname}`;

  socket.emit("change_nickname", nickname);
};

// 메시지 전송시 실행되는 함수
const onMessageSubmit = (event) => {
  event.preventDefault();
  const input = room.querySelector("#message input");
  const message = input.value;
  input.value = "";

  socket.emit("send_message", message, roomName);
  addMyMessage(`나: ${message}`);
};

// 채팅방 화면을 보여주는 함수
const showRoom = () => {
  room.hidden = false;

  const roomTitle = welcome.querySelector("#room-title");
  roomTitle.innerHTML = `현재 방 : ${roomName}`;

  const messageForm = room.querySelector("#message");
  messageForm.addEventListener("submit", onMessageSubmit);
};

// 채팅방 입장시 실행되는 함수
const onRoomSubmit = (event) => {
  event.preventDefault();

  const input = enterForm.querySelector("input");

  // 입력한 채팅방 이름이 현재 입장한 채팅방과 같은 경우, 바로 리턴한다.
  if (roomName === input.value) {
    input.value = "";
    return;
  }

  // 기존에 접속해 있던 채팅방이 있는 경우, 해당 채팅방에서 나간다.
  if (roomName) {
    socket.emit("leave_room", roomName);
    emptyMessage();
  }

  roomName = input.value;
  input.value = "";

  if (roomName) {
    socket.emit("enter_room", roomName);
  }

  showRoom();
};

nicknameForm.addEventListener("submit", onNicknameSubmit);
enterForm.addEventListener("submit", onRoomSubmit);

socket.on("send_message", (message) => {
  addMessage(message);
});

socket.on("welcome", (nickname) => {
  addMessage(`${nickname} 님이 입장했습니다.`);
});

socket.on("bye", (nickname) => {
  addMessage(`${nickname} 님이 나갔습니다.`);
});
