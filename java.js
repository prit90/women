// nav bar
    const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

// js code to toggle dark and light mode
    //   modeToggle.addEventListener("click" , () =>{
    //     modeToggle.classList.toggle("active");
    //     body.classList.toggle("dark");

    //     // js code to keep user selected mode even page refresh or file reopen
    //     if(!body.classList.contains("dark")){
    //         localStorage.setItem("mode" , "light-mode");
    //     }else{
    //         localStorage.setItem("mode" , "dark-mode");
    //     }
    //   });

// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});

// nav bar closed




// user 

  const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')


// this is  a open button
openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})




// this is a screen to tuch closed
    overlay.addEventListener('click', () => {
      const modals = document.querySelectorAll('.modal.active')
      modals.forEach(modal => {
        closeModal(modal)
      })
    })

// this is a closed button
closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

// user closed


// slider main page 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    // grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  


  // slider 

  const productContainers = [...document.querySelectorAll('.product-container')];
  const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
  const preBtn = [...document.querySelectorAll('.pre-btn')];
  
  productContainers.forEach((item, i) => {
      let containerDimensions = item.getBoundingClientRect();
      let containerWidth = containerDimensions.width;
  
      nxtBtn[i].addEventListener('click', () => {
          item.scrollLeft += containerWidth;
      })
  
      preBtn[i].addEventListener('click', () => {
          item.scrollLeft -= containerWidth;
      })
  })

  //  slider images hover 
  $(document).ready(function(){
    $('#sli1').hover(function(){
        $('#sli1').attr('src','1-1s.webp');
    },
    function(){
        $('#sli1').attr('src','1st.webp');
    })
});
$(document).ready(function(){
    $('#sli2').hover(function(){
        $('#sli2').attr('src','2-2nd.webp');
    },
    function(){
        $('#sli2').attr('src','2nd.webp');
    })
});
$(document).ready(function(){
    $('#sli3').hover(function(){
        $('#sli3').attr('src','3-3rd.webp');
    },
    function(){
        $('#sli3').attr('src','3rd.webp');
    })
});
$(document).ready(function(){
    $('#sli4').hover(function(){
        $('#sli4').attr('src','4-4th.webp');
    },
    function(){
        $('#sli4').attr('src','4th.webp');
    })
});
$(document).ready(function(){
    $('#sli5').hover(function(){
        $('#sli5').attr('src','5-5th.webp');
    },
    function(){
        $('#sli5').attr('src','5-5s.webp');
    })
});
$(document).ready(function(){
    $('#sli6').hover(function(){
        $('#sli6').attr('src','9-9th.webp');
    },
    function(){
        $('#sli6').attr('src','9-9s.webp');
    })
});
$(document).ready(function(){
    $('#sli7').hover(function(){
        $('#sli7').attr('src','6-6th.webp');
    },
    function(){
        $('#sli7').attr('src','6-6s.webp');
    })
});
$(document).ready(function(){
    $('#sli8').hover(function(){
        $('#sli8').attr('src','8-8th.webp');
    },
    function(){
        $('#sli8').attr('src','8-8s.webp');
    })
});
$(document).ready(function(){
    $('#sli9').hover(function(){
        $('#sli9').attr('src','18-18th.webp');
    },
    function(){
        $('#sli9').attr('src','18-18s.webp');
    })
});
$(document).ready(function(){
    $('#sli10').hover(function(){
        $('#sli10').attr('src','12-12th.webp');
    },
    function(){
        $('#sli10').attr('src','12-12s.webp');
    })
});
$(document).ready(function(){
    $('#sli11').hover(function(){
        $('#sli11').attr('src','7-7th.webp');
    },
    function(){
        $('#sli11').attr('src','7-7s.webp');
    })
});
$(document).ready(function(){
    $('#sli12').hover(function(){
        $('#sli12').attr('src','10-10th.webp');
    },
    function(){
        $('#sli12').attr('src','10-10s.webp');
    })
});
$(document).ready(function(){
    $('#sli13').hover(function(){
        $('#sli13').attr('src','11-11th.webp');
    },
    function(){
        $('#sli13').attr('src','11-11s.webp');
    })
});
$(document).ready(function(){
    $('#sli14').hover(function(){
        $('#sli14').attr('src','13-13th.webp');
    },
    function(){
        $('#sli14').attr('src','13-13s.webp');
    })
});
$(document).ready(function(){
    $('#sli15').hover(function(){
        $('#sli15').attr('src','15-15th.webp');
    },
    function(){
        $('#sli15').attr('src','15-15s.webp');
    })
});
$(document).ready(function(){
    $('#sli16').hover(function(){
        $('#sli16').attr('src','14-14th.webp');
    },
    function(){
        $('#sli16').attr('src','14-14s.webp');
    })
});
$(document).ready(function(){
    $('#sli17').hover(function(){
        $('#sli17').attr('src','16-16th.webp');
    },
    function(){
        $('#sli17').attr('src','16-16s.webp');
    })
});
$(document).ready(function(){
    $('#sli18').hover(function(){
        $('#sli18').attr('src','17-17th.webp');
    },
    function(){
        $('#sli18').attr('src','17-17s.webp');
    })
});