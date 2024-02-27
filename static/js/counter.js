let increment = document.querySelector('.increment-btn')
let decrement = document.querySelector('.decrement-btn')
let inp = document.querySelector('.inp-val')

increment.addEventListener('click',()=>{
    if(inp.value < 10){
        ++inp.value
    }
})

decrement.addEventListener('click',()=>{
    if(inp.value > 1){
       --inp.value
    }
})