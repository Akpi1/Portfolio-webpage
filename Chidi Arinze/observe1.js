const hide = document.querySelector('.hidden')
const hide2 = document.querySelector('.hidden2')
const hide3 = document.querySelector('.hidden3')
const hide4 = document.querySelector('.hidden4')
// const hide5 = document.querySelector('.hidden5')
const hide6 = document.querySelector('.hidden6')
const hide7 = document.querySelector('.hidden7')
const hide8 = document.querySelector('.hidden8')
const hide9 = document.querySelector('.hidden9')

const show1Options ={
    threshold:1,
    rootMargin:'0px 0px 0px 0px '
}
const show1Observer = new IntersectionObserver(function(entries , show1Observer){
    entries.forEach(entry=>{
        if(entry.isIntersecting){ 
            entry.target.classList.add('show1') 
        
        }
    })
},show1Options)
show1Observer.observe(hide)
show1Observer.observe(hide4)
show1Observer.observe(hide8)


// ========================================
const show2Options ={
    threshold:0.6,
    rootMargin:'0px 0px 0px 0px '
}
const show2Observer = new IntersectionObserver(function(entries , show2Observer){
    entries.forEach(entry=>{
        if(entry.isIntersecting){ 
            entry.target.classList.add('show2') 
        
        }
    })
},show2Options)
show2Observer.observe(hide2)

// ===============================

const show3Observer = new IntersectionObserver(function(entries , show3Observer){
    entries.forEach(entry=>{
        if(entry.isIntersecting){ 
            entry.target.classList.add('show3') 
        
        }
    })
},show2Options)
show3Observer.observe(hide3)

// =============================
const show3Options ={
    threshold:0.9,
    rootMargin:'-90px 0px 0px 0px '
}

const show5Observer = new IntersectionObserver(function(entries , show5Observer){
    entries.forEach(entry=>{
        if(entry.isIntersecting){ 
            entry.target.classList.add('show3') 
        
        }
    })
},show3Options)
// show3Observer.observe(hide5)
show3Observer.observe(hide6)
show3Observer.observe(hide7)
// ===================================================
const show4Options ={
    threshold:0.6,
    rootMargin:'0px 0px 0px 0px '
}
const show6Observer = new IntersectionObserver(function(entries , show6Observer){
    entries.forEach(entry=>{
        if(entry.isIntersecting){ 
            entry.target.classList.add('show4') 
        
        }
    })
},show4Options)
show6Observer.observe(hide9)



// ======================Nav bar ================
const nav = document.querySelector('.sdNav')
const nav1 = document.querySelector('.nav3')
const close = document.querySelectorAll('.sda')


nav1.style.display = 'none'
nav.addEventListener('click' ,function(){
    if (nav1.style.display == 'none'){
        nav1.style.display = 'flex';
    }else{
        nav1.style.display = 'none';
    }
})

for(i=0 ; i < close.length ; i++ ){
    close[i].addEventListener('click', function(){
        nav1.style.display = 'none';
    })
}