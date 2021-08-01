// like/dislike 버튼 클릭 시 아이콘 변화
function checkLike(x) {
  x.classList.toggle("fas");
}


const searchBtn = document.getElementById("searchBtn");
const searchBar = document.getElementById("searchBar");
const subscribeBtn = document.getElementById("subscribeBtn");

// 검색 아이콘 클릭 => 검색창 나타남
searchBtn.addEventListener("click", () => {
  searchBar.classList.toggle('active');
})

// 구독 <==> 구독중 (버튼 클릭)
subscribeBtn.addEventListener("click", () => {
  if (subscribeBtn.innerText === "구독") {
    subscribeBtn.innerText = "구독중";
    subscribeBtn.style.color = "dimgrey";
  } else {
    subscribeBtn.innerText = "구독";
    subscribeBtn.style.color = "red";
  }
})
