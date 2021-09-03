const addBtn = document.querySelector('.addBtn');
const userInput = document.querySelector('#new-item');
const items = document.querySelector('.shopping-list');

const deleteBtns = document.querySelectorAll('.deleteBtn');

for (const deleteBtn of deleteBtns) {
  deleteBtn.addEventListener('click', () => {
    const node = deleteBtn.parentNode;
    items.removeChild(node);
  })
}


function addItem() {
  const value = userInput.value.trim();

  if (value) {
    const item = createItem(value);
    items.appendChild(item);
  }

  userInput.value = "";
  userInput.focus();
}

function createItem(value) {
  const node = document.createElement('li');
  node.className = "item";

  const name = document.createTextNode(value);

  const deleteBtn = document.createElement('i');
  deleteBtn.className = "fas fa-trash-alt deleteBtn";
  deleteBtn.addEventListener('click', () => {
    items.removeChild(node);
  })

  node.appendChild(name);
  node.appendChild(deleteBtn);

  return node;
}

addBtn.addEventListener('click', () => addItem());

userInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    addItem();
  }
})
