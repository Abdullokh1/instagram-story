const SlideImg = document.querySelector('.slider-img');
const slideCard = document.querySelectorAll('.slider-card');
const activeSlide = document.querySelector('.slider-card-active');
const sliderList = document.querySelector('.slider-list-part');
const mainList = document.getElementById('mainList');






for (let i = 0 ; i < media.length-2; i++){

  
  let li = document.createElement('li');
  li.className = 'd-flex slider-card justify-content-center align-items-center';
  li.innerHTML = `
    <div class="slider-wrapper me-5">
    <div class="slider-img"></div>
    <div class="d-flex avatar-wrapper justify-content-center align-items-center">
      <img src="https://picsum.photos/id/55/70/70" style="border-radius: 50%;" alt="avatar">
     </div>
              
          </div>
  `;
  mainList.appendChild(li);


  let cards = mainList.querySelectorAll('li');


  media.forEach(element =>{
    cards.forEach(item =>{
      item.addEventListener('click', ()=>{
        mainList.style.transform = 'translate(-389px)';
        mainList.style.transition = 'all 0.5s ease';
        item.classList.add('active');
        item.innerHTML = `
        <div class="left-button">
            <button><i class='bx slider-icon me-3  bxs-chevron-left-circle'></i></button>
          </div>
          <div class="right-button">
            <button><i class='bx slider-icon ms-3   bxs-chevron-right-circle' ></i></button>
          </div>
  
           <img src='${element.img}' width='389' height='657'  style="border-radius: 10px;" alt="slide-img">
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
                 <p class="m-0 me-3">${element.name}</p>
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
      })
    })
  })
}
  



