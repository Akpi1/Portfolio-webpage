const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.smallNav')



hamburger.addEventListener('click' , function(){

    const slider = nav.getAttribute('data-visible')

    if (slider == 'false'){
        nav.setAttribute('data-visible', true) 
    }else{
        nav.setAttribute('data-visible' , false)
        // nav.setAttribute('data-visible' , false)  
    }
    
})
// ============= close navbar on click==========================================
const closeBtn = document.querySelectorAll('.close-btn')
closeBtn.forEach(close=>{
     const slider = nav.getAttribute('data-visible')

    close.addEventListener('click',function(){
      
        nav.setAttribute('data-visible', false) 
    
    })
})
// ================================================



// ============

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

