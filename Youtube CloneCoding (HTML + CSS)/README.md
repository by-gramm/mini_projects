# 유튜브 클론코딩

[드림코딩 님의 영상](https://www.youtube.com/watch?v=67stn7Pu7s4&ab_channel=%EB%93%9C%EB%A6%BC%EC%BD%94%EB%94%A9by%EC%97%98%EB%A6%AC)을 참고한 유튜브 클론코딩 프로젝트

<br>

> ## 🗓 프로젝트 기간

#### try 1 (영상 보기 전)

- 2021.07.28 ~ 2021.07.31

#### try 2 (영상을 본 후)

<br>

> ## 🎯 학습 목표

- HTML/CSS를 이용하여, 유튜브의 정적인 부분들을 클론코딩한다.

- 디스플레이의 크기에 따라 구성이 달라지는 반응형 웹페이지를 구현한다.

<br>

> ## 구현 내용

- CSS Flex를 활용하여 유튜브 레이아웃 구현

- 모바일 레이아웃을 먼저 구현한 뒤, 미디어 쿼리 문법으로 반응형 웹 페이지 구현

- 모바일 레이아웃의 경우, `position: sticky` 속성을 통해 스크롤을 내려도 화면이 고정되도록 함.

- 최소한의 JS를 통해 검색/좋아요/싫어요/구독 버튼 클릭시 화면상에 변화가 나타나도록 구현 

  (실제 데이터 전달 X)

<br>

> ## ✏ 기억할 만한 내용

#### try 1

<br>

<details>
  <summary>반응형 웹페이지를 만들 때, 미리 디스플레이별 레이아웃을 고려하여 구현하는 것이 좋다.</summary>

  <br>
  
  - 모바일 레이아웃에서는 `header`, `main_video`, `info`, `recommends` 구역이 나란히 배치된다. 그래서 4가지 구역을 각각 `<body>` 태그의 자식 요소로 구성했다. 그런데 이러한 구조에서는 PC 레이아웃을 구현하기 어려웠다. PC 레이아웃을 구현하기 위해서는 `(main_video + info)`와, `recommends`를 `flex`로 정렬해야 하는데, 이미 `main_video`, `info`, `recommends`를 같은 깊이로 만들었기 때문에 수정하기 어려웠던 것이다. 만약 코드를 짜기 전에 모바일 레이아웃과 PC 레이아웃을 모두 고려했다면, `main_video`와 `info`를 자식 요소로 가지는 상위 요소와 `recommends`를 같은 깊이로 구성할 수 있었을 것이다. 
</details>

<br>

<p align="center">
  <img src="README.assets/모바일 레이아웃.png" style="zoom:40%" />
  <br>
  모바일 레이아웃
</p>

<br>

<p align="center">
  <img src="README.assets/PC 레이아웃.png" alt="PC 레이아웃" style="zoom:33%;" align="center"/>
  <br>
  PC 레이아웃
</p>

<br>

#### try 2



