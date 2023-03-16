
const boom = document.querySelector('.hidden')
const boomOptions = {
    threshold:0.2,
    rootMargin:'0px 0px -50px 0px '
}

const boomObserver = new IntersectionObserver(function(entries , boomObserver){
    entries.forEach(entry=>{
        if(entry.isIntersecting){ 
            entry.target.classList.add('show') 
        
        }
    })
},boomOptions)
boomObserver.observe(boom)
// =================== for boom 2 ==================

const boom2 = document.querySelector('.hidden2')
const boomOptions2 = {
    threshold:0.2,
    rootMargin:'0px 0px 10px 0px '
}

const boomObserver2 = new IntersectionObserver(function(entries , boomObserver2){
    entries.forEach(entry=>{
        if(entry.isIntersecting){ 
            entry.target.classList.add('show2') 
            
        }
    })
},boomOptions2)

boomObserver2.observe(boom2);

// ================== contact card ======================================

const contactImage = document.querySelector('.hidden3')
const contactOptions = {
    threshold:0.4,
    rootMargin:'0px 0px 0px 0px '
}

const contactimage = new IntersectionObserver(function(entries , contactimage){
    entries.forEach(entry=>{
        if(entry.isIntersecting){ 
            entry.target.classList.add('show3')    
        }
    })
},contactOptions)

contactimage.observe(contactImage);

// =================contact form =====================

const contactImage2 = document.querySelector('.hidden4')
const contactOptions2 = {
    threshold:0.3,
    rootMargin:'0px 0px 0px 0px '
}

const contactimage2 = new IntersectionObserver(function(entries , contactimage){
    entries.forEach(entry=>{
        if(entry.isIntersecting){ 
            entry.target.classList.add('show4')   
             
        }
    })
},contactOptions2)

contactimage2.observe(contactImage2);