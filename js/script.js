document.addEventListener("DOMContentLoaded", function() {
  const questionItems = document.querySelectorAll(".question__item");

  questionItems.forEach(item => {
    const questionBox = item.querySelector(".question__item-box");
    questionBox.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const questionItems = document.querySelectorAll(".question__item");
  
  questionItems.forEach(item => {
    const itemThings = item.querySelectorAll(".question__item-thing");
    
    itemThings.forEach((thing, index) => {
      const numberElement = document.createElement("span");
      numberElement.className = "question__item-number";
      numberElement.textContent = (index + 1) + ")";
      
      thing.insertBefore(numberElement, thing.firstChild);
    });
  });
});

const btnBurger = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.header__nav');
const body = document.querySelector('body');

btnBurger.addEventListener('click', function(){
  btnBurger.classList.toggle('active');
  navMenu.classList.toggle('active');
  body.classList.toggle('lock');
});