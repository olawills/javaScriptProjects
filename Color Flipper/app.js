const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "#6E07F3", "#F2F2F2", "#FACF0F", "#232331"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}
