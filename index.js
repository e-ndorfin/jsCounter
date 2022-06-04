let counter = 0; 

const btnInc = document.getElementById('btn-inc');
const btnDec = document.getElementById('btn-dec');
const val = document.querySelector('.val'); 


btnInc.addEventListener('click', function(){
    counter += 1;
    val.textContent = counter;

})

btnDec.addEventListener('click', function(){
    counter -= 1;
    val.textContent = counter;

})