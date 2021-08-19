const topBtn = document.getElementById("top");
const pantsBtn = document.getElementById("pants");
const skirtBtn = document.getElementById("skirt");
const yellowBtn = document.getElementById("yellow");
const pinkBtn = document.getElementById("pink");
const blueBtn = document.getElementById("blue");


const changeOpacity = button => {
  if (button.classList.contains('unactive')) {
    button.classList.remove('unactive');
  } else {
    button.classList.add('unactive');
  }
}

const changeTypeState = articles => {
  for (let article of articles) {
    if (article.classList.contains('type-hidden')) {
      article.classList.remove('type-hidden');
    } else {
      article.classList.add('type-hidden');
    }
  }
}

const changeColorState = articles => {
  for (let article of articles) {
    if (article.classList.contains('color-hidden')) {
      article.classList.remove('color-hidden');
    } else {
      article.classList.add('color-hidden');
    }
  }
}

topBtn.addEventListener('click', () => {
  changeOpacity(topBtn);
  changeTypeState(document.querySelectorAll(".top"));
})

pantsBtn.addEventListener('click', () => {
  changeOpacity(pantsBtn);
  changeTypeState(document.querySelectorAll(".pants"));
})

skirtBtn.addEventListener('click', () => {
  changeOpacity(skirtBtn);
  changeTypeState(document.querySelectorAll(".skirt"));
})

yellowBtn.addEventListener('click', () => {
  changeOpacity(yellowBtn);
  changeColorState(document.querySelectorAll(".yellow"));
})

pinkBtn.addEventListener('click', () => {
  changeOpacity(pinkBtn);
  changeColorState(document.querySelectorAll(".pink"));
})

blueBtn.addEventListener('click', () => {
  changeOpacity(blueBtn);
  changeColorState(document.querySelectorAll(".blue"));
})
