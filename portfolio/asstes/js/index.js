let menu = document.getElementById("menu");
let closee = document.getElementById("close")
let nav_2 = document.getElementById("nav_2");
menu.addEventListener("click",()=>{
    nav_2.classList.remove("d_none")
})
closee.addEventListener("click",()=>{
    nav_2.classList.add("d_none")

})