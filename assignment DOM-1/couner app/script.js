const Decrement_btn =  document.getElementById("Decrement_btn");
const counter = document.getElementById("counter");
const Increment_btn = document.getElementById("Increment_btn");
const Reset_btn = document.getElementById("Reset_btn");


let value = 0;
// adding eventlistener and writting increment function.
Increment_btn.addEventListener("click", () => {
    value++;
    counter.innerText = value;
});
// adding eventlistener and writting decrement function.
Decrement_btn.addEventListener("click", () => {
    value--;
    counter.innerText = value;
});
// adding eventlistener and writting reset function to get 'zero' 

Reset_btn.addEventListener("click", () => {
    value=0;
    counter.innerText=value;
})
