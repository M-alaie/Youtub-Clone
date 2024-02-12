
const menu=document.querySelector('#menu')
const Aside=document.querySelector('aside')
const Container=document.querySelector('.container')

menu.onclick=()=>{
    Aside.classList.toggle('small_aside')
    Container.classList.toggle('small_container')
}