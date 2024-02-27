let decrement = document.querySelector('.decrement-btn');
let increment = document.querySelector('.increment-btn');
let inp_value = document.querySelector('.inp_val');

decrement.addEventListener('click',()=>{
    if(inp_value.value > 1){
        --inp_value.value
    }
})

increment.addEventListener('click',()=>{
    if(inp_value.value < 10){
        ++inp_value.value
    }
})