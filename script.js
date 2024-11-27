

 let counter = document.querySelector(".counter");
 counterValue = 0;
let increment=document.querySelector(".incre")
increment.addEventListener('click',function(){
   
    
    if(counterValue>=0 || counterValue<=9999){
        counterValue++;
        counter.textContent=counterValue
    }else{
        alert("number cannot exceed 9999")
    }
})

let decrement = document.querySelector(".decre");
decrement.addEventListener("click", function () {
  if (counterValue >= 0)  {
    counterValue--;
    counter.textContent = counterValue;
  } else {
    alert("number cannot preceed than 0");
  }
});

let reset=document.querySelector(".res");
reset.addEventListener('click',function(){
    counterValue=0
    counter.textContent=counterValue
})












// let clear=document.querySelector(".clear")
// clear.addEventListener("click",handleClear);
// function handleClear(){
//   let input = document.querySelector(".input");
//   input.value="0"
// show.innerHTML=""
