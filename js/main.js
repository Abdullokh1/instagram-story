const SlideImg = document.querySelector('.slider-img');
const slideCard = document.querySelectorAll('.slider-card');
const mainList = document.getElementById('mainList');
const cardImg = document.querySelector('.card-img');
const arrows = document.querySelector('.arrow-buttons');
const itemWrap = document.querySelector('.item-wrapper');


media.forEach((item,index) =>{

    let li = document.createElement('li');
      
      li.className = `d-flex card-item justify-content-center align-items-center`;
      li.innerHTML = `
            <div class="arrow-buttons">
              <div class="left-button">
                <button><i class='bx slider-icon me-3  bxs-chevron-left-circle'></i></button>
              </div>
              <div class="right-button">
                <button><i class='bx slider-icon ms-3   bxs-chevron-right-circle' ></i></button>
              </div>
            </div>
            
            
            <img class="card-img" src="${item.img}" style="border-radius: 10px;" alt="slide-img">
            
            <div class="item-hide">
              <div class="slider-input d-flex justify-content-center align-items-center">
                <input class="search-input" type="text" name="search" placeholder="Reply to ${item.name}...">
                <i class='bx ms-3 voice-icons bxl-telegram' ></i>
              </div>
              <div class="slider-inner p-3">
              <div class="m-0 p-0 d-flex slide-list justify-content-center justify-content-between">
              <div class="slider-line-wrap me-2">
                <span class="slider-line me-1"></span>
              </div>
            
             
            </div>
                <div class="ps-4 mt-3 d-flex align-items-center justify-content-between">
                  <div class="d-flex align-items-center">
                    <p class="m-0 me-3 text-white">${item.name}</p>
                    <p class="m-0 text-white">${item.date}</p>
                  </div>
                  <div>
                    <button><i class='bx voice-icons bx-pause' ></i></button>
                    <button><i class='bx voice-icons bx-volume-mute'></i></button>
                    <button><i class='bx voice-icons bx-dots-horizontal-rounded' ></i></button>
                  </div>
                </div>
              </div>
          </div>
        `;
      mainList.appendChild(li);
})

let cards = document.querySelectorAll('.card-item');

cards.forEach((item,index) =>{
  let show = cards[0].querySelector('.arrow-buttons');
  let display = cards[0].querySelector('.item-hide');
  cards[0].classList.add('active');
  display.style.display = 'block';;
  show.style.display = 'block';
  cards[0].style.filter = 'brightness(1)';
  item.style.filter = 'brightness(0.5)';
})
let count = 0;
cards.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.style.transition = 'all 0.4s ease';
    item.classList.add("test");
    if(count <= index){
      count++;
      mainList.style.transform = `translate(${-count * 300}px)`;
      item.style.filter = 'brightness(1)';
    } else if(count >= index){
      count--;
      mainList.style.transform = `translate(${-count * 300}px)`;

    }
    filter();
  });
});



function filter(){
  cards.forEach((item) => {
    if(item.classList.contains("test")){
      item.classList.add('active');
      item.classList.remove('test');
      let show = item.querySelector('.arrow-buttons');
      let display = item.querySelector('.item-hide');
      display.style.display = 'block';;
      show.style.display = 'block';
    } 
    else {
      item.classList.remove('active');
      let show = item.querySelector('.arrow-buttons');
      let display = item.querySelector('.item-hide');
      display.style.display = 'none';;
      show.style.display = 'none';
    }
  });
}




 
 
  

