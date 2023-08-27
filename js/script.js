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