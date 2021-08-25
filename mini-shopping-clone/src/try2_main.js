
const itemList = document.querySelector('.item-list');


// json 파일로부터 아이템 목록 배열을 가져오는 함수
function loadItems() {
  return fetch("../data/data.json")    // url에 요청을 보내 json 데이터를 가져온 뒤
  .then(response => response.json())  // 해당 데이터를 자바스크립트 객체로 변환하고,
  .then(data => data['items']);       // 'items' 키로 접근하여 아이템 목록 배열을 가져온다.
}

// 아이템 객체를 인자로 받아, HTML 문자열로 바꿔주는 함수
function createHTMLString(item) {
  return `
  <article>
    <img src="${item.image}" alt="">
    <span>${item.size} size, ${item.price}원</span>
  </article>
  `;
}

// 아이템 목록을 화면상에 보여주는 함수
function displayItems(items) {
  itemList.innerHTML = ""

  for (const item of items) {
    itemList.innerHTML += createHTMLString(item);
  }
}

// 버튼 클릭시 필터링된 아이템 목록이 보이도록 하는 함수
function onButtonClick(event, items) {
  const key = event.target.dataset.key;
  const value = event.target.dataset.value;

  if (key == null) {
    return;
  }

  displayItems(items.filter(item => item[key] === value));
}

// 이벤트 리스터들을 지정하는 함수
function setEventListeners(items) {
  const buttons = document.querySelector('.buttons');
  buttons.addEventListener('click', 
    event => onButtonClick(event, items));
}

loadItems()
  .then(items => {
    displayItems(items);
    setEventListeners(items);
  });

