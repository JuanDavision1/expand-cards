'use-strict'
let fondo_box = document.getElementById('main-box');
let caja1 = document.getElementById('firt-image');
let caja2 = document.getElementById('second-image');
let caja3 = document.getElementById('third-image');
let caja4 = document.getElementById('fourth-image');
let caja5 = document.getElementById('five-image');
let titulo = document.getElementById('title_1');
let titulo2 = document.getElementById('title_2');
let titulo3 = document.getElementById('title_3');
let titulo4 = document.getElementById('title_4');
let titulo5 = document.getElementById('title_5');
window.addEventListener('load',()=>{
    caja2.style.width='100px'
    caja3.style.width='100px'
    caja4.style.width='100px'
    caja5.style.width='100px'
    if(caja1.style.width != '100px'){
        titulo2.style.opacity ='0';
        titulo3.style.opacity ='0';
        titulo4.style.opacity ='0';
        titulo5.style.opacity ='0';
    }
    
})
