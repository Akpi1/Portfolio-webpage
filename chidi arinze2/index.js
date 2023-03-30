const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.smallNav');
const bHamburger = document.querySelector('.bHamburger')



hamburger.addEventListener('click' , function(){

    const slider = nav.getAttribute('data-visible');
    const slider2 = bHamburger.getAttribute('aria-expanded');
    const slider3 = hamburger.getAttribute('isClicked')

    if (slider == 'false' && slider2 == 'false' && slider3 == 'false'){
        nav.setAttribute('data-visible', true) 
        bHamburger.setAttribute('aria-expanded', true) 
        hamburger.setAttribute('isClicked', true) 
        
    }else{
        nav.setAttribute('data-visible' , false)
        bHamburger.setAttribute('aria-expanded' , false)
        hamburger.setAttribute('isClicked', false) 
          
    }
    
})
// ============= close navbar on click==========================================
const closeBtn = document.querySelectorAll('.close-btn')

closeBtn.forEach(close => {
     const slider = nav.getAttribute('data-visible')

    close.addEventListener('click',function(){
      
        nav.setAttribute('data-visible', false) 
    
    })
})
// ================================================
//============= project toggle ==========================
const projectToggle = document.querySelector('.toggleProject')
const plusOpen = document.querySelector('.plus')
const plusClose = document.querySelector('.minus')
const landing_customWrapper = document.querySelector('.landing_customWrapper')


plusOpen.addEventListener('click' , function() {
    plusOpen.style.display = 'none'
    plusClose.style.display = 'inline'
    landing_customWrapper.style.display = 'block'
})
plusClose.addEventListener('click' , function() {
    plusClose.style.display = 'none'
    plusOpen.style.display = 'inline'
    landing_customWrapper.style.display = 'none'
})


// ============ end of project toggle ===========

// ==================== intersection observer for small devices ==================
const hide = document.querySelectorAll('.hidden1')
const show1Options = {
         threshold:0.1,
         rootMargin:'0px -3% -3% '
     }
 
     const show1Observer = new IntersectionObserver(function(entries,show1Observer){
     entries.forEach(entry=>{
        if(entry.isIntersecting){ 
            entry.target.classList.add('show') 
             show1Observer.unobserve(entry.target)
        }else{
            return;
        }
    })
},show1Options)

hide.forEach(hide =>show1Observer.observe(hide))

// ==================================================

