let add=document.getElementById('incriment');
let remove=document.getElementById('decrement');
let clear=document.getElementById('clear');

let int=document.getElementById('number');
let integer=0;

add.addEventListener('click',function(){
    integer +=1;
    int.innerHTML=integer;

})
remove.addEventListener('click',function(){
    integer -=1;
    int.innerHTML=integer;
})
clear.addEventListener('click',function(){
    integer =0;
    int.innerHTML=integer;
})