const openmenu = document.querySelector('.open-btn')
const click = document.getElementsByClassName('click')
const closemenu = document.querySelector('.close-btn')
const sdNav = document.querySelector('.sdNav')
const header = document.querySelector('header')
openmenu.addEventListener('click' , function(){

        sdNav.style.display='flex'
        openmenu.style.display='none'
        closemenu.style.display='inline-block'
        header.style.background='white'
    
})
function close(){
        sdNav.style.display='none'
        closemenu.style.display='none'
        openmenu.style.display='inline-block' 
        header.style.background='inherit'  
}
closemenu.addEventListener('click' , close)

 for (let i=0 ; i < click.length ; i++){
                click[i].addEventListener('click', close)

 }
 
 783d 4897 366e 4a95 d1d0 763e 61bb ebf5 c80e 99df d4bd 26e8 d30e 2000 6a4d 8737