export function style(data) {
  const colors = data.colors;
  // 동적으로 스타일 적용
  const head = document.getElementById("head");
  // head.style.backgroundColor = colors.head;
  
  // const home = document.getElementById("home");
  head.style.backgroundColor = colors.home.title;
  
}
