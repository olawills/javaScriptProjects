
const incrementButton = document.getElementById("btnAdd");
const decrementButton = document.getElementById("btnSub");
const btn = document.getElementById('value');
const resetButton = document.getElementById("reset");
let count = 0;

btn.innerHTML = count;

// Function to Increment the Button
const toggleIncrement = ()=> {
let toggle = count++;
btn.innerHTML = toggle;
    if(count > 0){
        btn.style.color = "green"; 
    } 
    
}

// Function to Decrement the Button
const toggleDecrement =()=>{

    let toggle = count--;
    btn.innerHTML = toggle;
     if(count < 0){
        btn.style.color = "red"; 
    }
}

const toggleReset =()=>{
    
    let reset = 0;
   btn.innerHTML = reset;
    if(count === 0){
        btn.style.color = "#222";
}
}



incrementButton.addEventListener("click", toggleIncrement);
decrementButton.addEventListener("click", toggleDecrement);
resetButton.addEventListener("click",toggleReset);