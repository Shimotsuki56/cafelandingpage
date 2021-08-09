const ham=document.querySelector('.ham');
const header=document.querySelector('header');
const text=document.querySelector('.text');
const cross=document.querySelector('.cross');
const centerHam=document.querySelector('.centerHam');
const form=document.querySelector('form');
const ul=document.querySelector('ul');
const h1=document.querySelector('h1');


ham.addEventListener('click',()=>{
    header.className='headerDim';
    
    if(text){
    text.style.display='none';}
    else if(form){
        form.style.display='none';
    }
    ham.style.display='none';
    cross.style.display='inline-block';
    centerHam.style.display='flex';
    
    
})


cross.addEventListener('click',()=>{
    cross.style.display='none';
    ham.style.display='inline-block';
    centerHam.style.display='none';
    header.removeAttribute('class','headerDim');
    if (text){
    text.style.display='flex';}
    else if(form){
        form.style.display='flex';
        

    }

})