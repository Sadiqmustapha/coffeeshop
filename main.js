const menu = document.getElementById('nav');
const open = document.getElementById('menu-btn');
const close = document.getElementById('close');

function openmenu(){
    menu.style.left = "0";
    open.style.display = "none";
    close.style.display = "block"
}

function closemenu(){
    menu.style.left = "-100%";
    open.style.display ="block"
    close.style.display = ""
}

//nav bg color change

function change(){
    let nav = document.getElementById('navbar');
    let value = window.screenY;
    if(value > 30){
        nav.classList.add('nav-change')
    }else{
        nav.classList.remove('nav-change')
    }
}

window.addEventListener('scroll', change)