console.log('hi');

const nav = document.getElementById('nav');
const mainNav = document.getElementById('mainNav');
const subMenu = document.querySelectorAll('.submenuUl');
console.log(subMenu);

mainNav.addEventListener('mouseover',()=>{
  subMenu.forEach((submenuUl)=>{
    submenuUl.style.height = "160px";
  })
});
