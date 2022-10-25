'use-strict'
let caja1 = document.getElementById('firt-image');
let caja2 = document.getElementById('second-image');
let caja3 = document.getElementById('third-image');
let caja4 = document.getElementById('fourth-image');
let caja5 = document.getElementById('five-image');
let imagen = document.querySelectorAll('img');
let titulos = document.querySelectorAll('h2');

window.addEventListener('load',()=>{
    for (let  hola in imagen){
        if(hola != 0){
            imagen[hola].style.width ='76px';
            imagen[hola].style.height ='400px';
            imagen[hola].style.objectFit ='cover';
            imagen[hola].style.borderRadius='140px';
            titulos[hola].style.opacity ='0';
        }
        
    }
});
caja1.addEventListener('click',()=>{
    imagen[0].style.transition  ='all 1s'
    imagen[0].style.removeProperty('width');
    imagen[0].style.removeProperty('height');
    imagen[0].style.removeProperty('objectFit');
    imagen[0].style.removeProperty('borderRadius');
    titulos[0].style.transition  ='all  1.1s';
    titulos[0].style.removeProperty('opacity');
    imagen[0].style.borderRadius='8%';
    for (let i in imagen){
        if(i != 0){
            imagen[i].style.transition  ='all 1s'
            imagen[i].style.width ='76px'
            imagen[i].style.height ='400px'
            imagen[i].style.objectFit ='cover'
            imagen[i].style.borderRadius='140px'
            titulos[i].style.opacity ='0';
            
        }
    }
  
});
caja2.addEventListener('click',()=>{
    imagen[1].style.transition  ='all 1s'
    imagen[1].style.removeProperty('width');
    imagen[1].style.removeProperty('height');
    imagen[1].style.removeProperty('objectFit');
    imagen[1].style.removeProperty('borderRadius');
    titulos[1].style.transition  ='all  1.1s';
    titulos[1].style.removeProperty('opacity');
    imagen[1].style.borderRadius='8%';
    for (let i in imagen){
        if(i != 1){
            imagen[i].style.transition  ='all 1s'
            imagen[i].style.width ='76px'
            imagen[i].style.height ='400px'
            imagen[i].style.objectFit ='cover'
            imagen[i].style.borderRadius='140px'
            titulos[i].style.opacity ='0';
        }
    }
  

});
caja3.addEventListener('click',()=>{
    imagen[2].style.transition  ='all 1s'
    imagen[2].style.removeProperty('width');
    imagen[2].style.removeProperty('height');
    imagen[2].style.removeProperty('objectFit');
    imagen[2].style.removeProperty('borderRadius');
    titulos[2].style.transition  ='all  1.1s';
    titulos[2].style.removeProperty('opacity');
    imagen[2].style.borderRadius='8%';
    for (let i in imagen){
        if(i != 2){
            imagen[i].style.transition  ='all 1s'
            imagen[i].style.width ='76px'
            imagen[i].style.height ='400px'
            imagen[i].style.objectFit ='cover'
            imagen[i].style.borderRadius='140px'
            titulos[i].style.opacity ='0';
        }
    }
  

});
caja4.addEventListener('click',()=>{
    imagen[3].style.transition  ='all 1s'
    imagen[3].style.removeProperty('width');
    imagen[3].style.removeProperty('height');
    imagen[3].style.removeProperty('objectFit');
    imagen[3].style.removeProperty('borderRadius');
    titulos[3].style.transition  ='all 1.1s';
    titulos[3].style.removeProperty('opacity');
    imagen[3].style.borderRadius='8%';
    for (let i in imagen){
        if(i != 3){
            imagen[i].style.transition  ='all 1s'
            imagen[i].style.width ='76px'
            imagen[i].style.height ='400px'
            imagen[i].style.objectFit ='cover'
            imagen[i].style.borderRadius='140px'
            titulos[i].style.opacity ='0';
        }
    }
  

});
caja5.addEventListener('click',()=>{
    imagen[4].style.transition  ='all 1s'
    imagen[4].style.removeProperty('width');
    imagen[4].style.removeProperty('height');
    imagen[4].style.removeProperty('objectFit');
    imagen[4].style.removeProperty('borderRadius');
    titulos[4].style.transition  ='all 1.1s';
    titulos[4].style.removeProperty('opacity');
    imagen[4].style.borderRadius='8%';
    for (let i in imagen){
        if(i != 4){
            imagen[i].style.transition  ='all 1s'
            imagen[i].style.width ='76px'
            imagen[i].style.height ='400px'
            imagen[i].style.objectFit ='cover'
            imagen[i].style.borderRadius='140px'
            titulos[i].style.opacity ='0';
        }
    }
  

});