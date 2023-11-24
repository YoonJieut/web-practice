console.log('hi');

const mainUl = document.getElementById('mainMenu');
const mainLi = document.querySelectorAll('#mainMenu > li');
const subMenuUl = document.querySelectorAll('.subMenuUl');
console.log(mainUl, mainLi);
// 메뉴 관련 로직

mainLi.forEach((i)=>{
  i.addEventListener('mouseenter',()=>{
    i.children[1].style.height = "160px";
  });
})

mainLi.forEach((i)=>{
  i.addEventListener('mouseleave',()=>{
    i.children[1].style.height = "0px";
  }); 
})

// 슬라이드 로직
const slideUl = document.getElementById('slideUl');

// 1. 옮긴다.
setInterval(()=>{
  let temp = 0;
  const movement = setInterval(()=>{
    if( temp > -800){
      temp = temp-10;
      slideUl.style.left = temp +"px";
    } else {
      clearInterval(movement);
    }
  }, 0.5)
  
  setTimeout(()=>{
    // 2. 삭
    let remove = slideUl.removeChild(slideUl.children[0]);
    // 2-1 초
    slideUl.style.left= "0";
    // 2-2 붙
    slideUl.appendChild(remove);
  }, 2000)
},4000);



