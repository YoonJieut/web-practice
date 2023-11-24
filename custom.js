console.log('hi');

const nav = document.getElementById('nav');
const mainNav = document.getElementById('mainNav');
const subMenu = document.querySelectorAll('.submenuUl');
console.log(mainNav);
console.log(subMenu);

mainNav.addEventListener('mouseover',()=>{
  subMenu.forEach((x)=>{
    console.log("mouseover");
    x.style.height = "160px";
  })
});
mainNav.addEventListener('mouseleave',()=>{
  subMenu.forEach((submenuUl)=>{
    console.log("mouseleave");
    submenuUl.style.height = "0px";
  })
});


// slide 로직
// 1. slideOut 을 옮긴다. (setinterval)
// 2. li 첫번째를 뒤로 넘긴다.
// 2-1 초기화
// 2-3 붙이기
// 3. 무한 루프

const slideOut = document.getElementById('slideOut');


setInterval(()=>{
  let temp = 0;
  const A = setInterval(()=>{
    // console.log("setinterval")
    if(temp >= -1200){
      slideOut.style.left = temp + "px"; 
      temp = temp-10;
      // console.log(temp);
    } else {
      clearInterval(A);
      // console.log('clearInterval')
}
  },0.01)  
  setTimeout(()=>{
    let remove = slideOut.removeChild(slideOut.children[0]);
    slideOut.style.left = "0px"; 
    slideOut.appendChild(remove);
  },1000)
}, 5000)


// 모달 관련 로직
const modalBtn = document.getElementById('modalButton');
const modal = document.getElementById('modal')
const first = document.getElementById('first');
modalBtn.addEventListener('click',()=>{
  modal.style.display = "none";
});
first.addEventListener('click',()=>{
  modal.style.display = "flex";
});


// 공지사항 켯다 꺼지는 로직
// 1.있는 것을 누르면 아무 반응이 일어나지 않는 if문
// 2. 없는 것을 누르면 head에는 .on body에는 display-flex가 생기는 것

const alertHead = document.getElementById('alertHead');
const contBody = document.querySelectorAll('.contBody');
// console.log(contBody);

alertHead.addEventListener('click',(e)=>{
  console.dir(e.target);
  alertHead.children[0].classList.toggle('on');
  alertHead.children[1].classList.toggle('on');
  contBody[0].classList.toggle('display-flex');
  contBody[1].classList.toggle('display-flex');
});
