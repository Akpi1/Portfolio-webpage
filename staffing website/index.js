

const open = document.querySelector('.openBtn')
const close = document.querySelector('.closeBtn')
const sdNav = document.querySelector('.sdNav')
const navActive = document.getElementsByClassName('active')

open.addEventListener('click' , function(){
    sdNav.style.display='flex';
    open.style.display='none';
    close.style.display='inline-block';
})
function Close(){
    sdNav.style.display='none';
    open.style.display='inline-block';
    close.style.display='none';
    
}

close.addEventListener('click' ,Close)

 for (let i=0 ; i < navActive.length ; i++){
                navActive[i].addEventListener('click' , Close)
 }
