const addBtn = document.querySelector('.addBtn');
const userInput = document.querySelector('#new-item');
const items = document.querySelector('.shopping-list');

// 새로운 아이템을 추가하는 함수
function addItem() {
  const value = userInput.value.trim();

  if (value) {
    const item = createItem(value);
    items.appendChild(item);
  }

  userInput.value = "";
  userInput.focus();
}

let id=0;

// 새로운 아이템을 생성하는 함수
function createItem(value) {
  const node = document.createElement('li');
  node.className = "item";
  node.setAttribute('data-id', id);

  const name = document.createTextNode(value);

  const deleteBtn = document.createElement('i');
  deleteBtn.className = "fas fa-trash-alt deleteBtn";
  deleteBtn.setAttribute('data-delete_id', id);

  // 수정 전 : 삭제 버튼 각각에 일일이 이벤트 등록
  // deleteBtn.addEventListener('click', () => {
  //   items.removeChild(node);
  // })

  node.appendChild(name);
  node.appendChild(deleteBtn);

  id++;
  return node;
}

// Event: '+' 버튼 클릭시 아이템 추가
addBtn.addEventListener('click', () => addItem());

// Event: 엔터키 클릭시 아이템 추가
userInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    addItem();
  }
})

// Event: 삭제 버튼 클릭시 아이템 삭제
// 수정 후 : 이벤트 위임을 통해 삭제 버튼 전체에 한번에 이벤트 등록
items.addEventListener('click', event => {
  const id = event.target.dataset.delete_id;
  if (id) {
    const toBeDeleted = document.querySelector(`.item[data-id="${id}"]`);
    toBeDeleted.remove();
  }
})