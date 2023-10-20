let startbtn = document.getElementById("startbtn");
let pousebtn = document.getElementById("pousebtn");
let resetbtn = document.getElementById("resetbtn");

let display = document.getElementById("container1");
let starttime = 0;
let leptime = 0;
let pousetime = true;
let hrs;
let min;
let sec ;

startbtn.onclick = starttime1;
pousebtn.addEventListener("click" , ()=>{});
resetbtn.addEventListener("click" , ()=>{});

function starttime1(){
     if(pousetime);
     pousetime = false;
    starttime = Date.now() - leptime;
    setInterval(changetime , 1000);
    changetime()
    
}
function changetime(){

    leptime = Date.now() - starttime;
    hrs = Math.floor((leptime  /1000));
    min = Math.floor((leptime  /(1000 * 60)));
    sec = Math.floor((leptime  /(1000 * 60 * 60)));
    display.textContent = `${sec} : ${min} : ${hrs}`;

}