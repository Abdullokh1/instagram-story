const SlideImg = document.querySelector('.slider-img');
const slideCard = document.querySelectorAll('.slider-card');
const activeSlide = document.querySelector('.slider-card-active');
const sliderList = document.querySelector('.slider-list-part');
const mainList = document.getElementById('mainList');
const mainActive = document.querySelector('.main-active');
const cardImg = document.querySelector('.card-img');
const arrows = document.querySelector('.arrow-buttons');
const InnerItem = document.querySelector('.item-inner');


media.forEach((item) =>{

    let li = document.createElement('li');
    li.className = 'd-flex slide-card  justify-content-center align-items-center';
    li.innerHTML = `
     <div class="slider-wrapper me-5">
      <div class="slider-img"></div>
    <div class="d-flex avatar-wrapper justify-content-center align-items-center">
      <img src="${item.img}" width='40' height='40'; style="border-radius: 50%;" alt="avatar">
     </div>
    </div> 
    `;
    mainList.appendChild(li);
})

media.forEach((item, index) =>{
  let cards = document.querySelectorAll('.slide-card');
    cards.forEach(el =>{
      el.addEventListener('click', ()=>{
        el.className = 'd-flex slider-card active  justify-content-center align-items-center me-5';
        el.innerHTML = `
        <div class="left-button">
          <button><i class='bx slider-icon me-3  bxs-chevron-left-circle'></i></button>
        </div>
        <div class="right-button">
          <button><i class='bx slider-icon ms-3   bxs-chevron-right-circle' ></i></button>
        </div>

         <img src="${item.img}"  style="border-radius: 10px;" alt="slide-img">
         <div class="slider-input d-flex justify-content-center align-items-center">
           <input class="search-input" type="text" name="search" placeholder="Reply to">
           <i class='bx ms-3 voice-icons bxl-telegram' ></i>
         </div>
         <div class="slider-inner w-100 p-3">
           
           <div class="m-0 p-0 d-flex slide-list justify-content-center">
             <span class="slider-line me-1"></span>
             <span class="slider-line me-1"></span>
             <span class="slider-line me-1"></span>
             <span class="slider-line me-1"></span>
             <span class="slider-line me-1"></span>
             <span class="slider-line me-1"></span>
             <span class="slider-line me-1"></span>
             <span class="slider-line"></span>
          </div>
           <div class="ps-4 mt-2 d-flex align-items-center justify-content-between">
             <div class="d-flex">
               <img class="slider-avatar me-2" src="https://picsum.photos/id/55/30/30" alt="img">
               <p class="m-0 me-3">${item.name}</p>
               <p class="m-0">4d</p>
             </div>
             <div>
               <button><i class='bx voice-icons bx-pause' ></i></button>
               <button><i class='bx voice-icons bx-volume-mute'></i></button>
               <button><i class='bx voice-icons bx-dots-horizontal-rounded' ></i></button>
             </div>
           </div>
         </div>
        `;
        el.style.transition = 'all 0.4s ease';
     
      })
    })  
  })
  let cards = document.querySelectorAll('.slide-card');

let count = 0;

cards.forEach((item,index) =>{
  item.addEventListener('click', ()=>{


    mainActive.classList.add('slider-wrapper');
    arrows.remove();
    InnerItem.remove();
    mainList.style.transition = 'transform 0.5s ease';
    if (count <= index){
      count++;
      mainList.style.transform = `translate(${-count*230}px)`;
    } else if (count > index){
      count--;
      mainList.style.transform = `translate(${-count*230}px)`;
    }
    item.style.transition = 'all 0.4s ease';

    if (index == 1){
      cards[0].innerHTML = `
      <div class="slider-wrapper me-5">
      <div class="slider-img"></div>
    <div class="d-flex avatar-wrapper justify-content-center align-items-center">
      <img src="https://picsum.photos/id/72/40/40" width='40' height='40'; style="border-radius: 50%; position: relative; left:20px" alt="avatar">
     </div>
    </div> 
      `;
      cards[0].style.width = '150px'
      cards[0].style.height = '270px'

    }
    if (index == 2){
      cards[1].innerHTML = `  
      <div class="slider-wrapper me-5">
      <div class="slider-img"></div>
    <div class="d-flex avatar-wrapper justify-content-center align-items-center">
      <img src="https://picsum.photos/id/732/40/40" width='40' height='40'; style="border-radius: 50%; position: relative; left:20px" alt="avatar">
     </div>
    </div> 
      `
      cards[1].style.width = '150px'
      cards[1].style.height = '270px'

    }
    if (index == 3){
      cards[2].innerHTML = `  
      <div class="slider-wrapper me-5">
      <div class="slider-img"></div>
    <div class="d-flex avatar-wrapper justify-content-center align-items-center">
      <img src="https://picsum.photos/id/3/40/40" width='40' height='40'; style="border-radius: 50%; position: relative; left:20px" alt="avatar">
     </div>
    </div> 
      `
      cards[2].style.width = '150px'
      cards[2].style.height = '270px'

    }
    if (index == 4){
      cards[3].innerHTML = `  
      <div class="slider-wrapper me-5">
      <div class="slider-img"></div>
    <div class="d-flex avatar-wrapper justify-content-center align-items-center">
      <img src="https://picsum.photos/id/3/40/40" width='40' height='40'; style="border-radius: 50%; position: relative; left:20px" alt="avatar">
     </div>
    </div> 
      `
      cards[3].style.width = '150px'
      cards[3].style.height = '270px'

    }
    if (index == 5){
      cards[4].innerHTML = `  
      <div class="slider-wrapper me-5">
      <div class="slider-img"></div>
    <div class="d-flex avatar-wrapper justify-content-center align-items-center">
      <img src="https://picsum.photos/id/3/40/40" width='40' height='40'; style="border-radius: 50%; position: relative; left:20px" alt="avatar">
     </div>
    </div> 
      `
      cards[4].style.width = '150px'
      cards[4].style.height = '270px'
    }
  })
})


 
 
  

