const grppic=document.querySelector(".closed");
const ahanpic=document.querySelector(".open");
const devpic=document.querySelector(".dev");
const saqipic=document.querySelector(".saqi");

grppic.addEventListener("click", () =>{
    if(ahanpic.classList.contains("open")){
        ahanpic.classList.add("active");
        grppic.classList.remove("active");
        devpic.classList.remove("active");
        saqipic.classList.remove("active");
    }
});

ahanpic.addEventListener('click', ()=>{
    if(saqipic.classList.contains("saqi")){
        saqipic.classList.add("active");
        ahanpic.classList.remove("active");
        devpic.classList.remove("active");
        grppic.classList.remove("active");
    }
});





devpic.addEventListener("click", ()=>{
    if(grppic.classList.contains("closed")){
        grppic.classList.add("active");
        devpic.classList.remove("active");
        ahanpic.classList.remove("active");
        saqipic.classList.remove("active");
    }
});

saqipic.addEventListener("click", ()=>{
    if(devpic.classList.contains("dev")){
        devpic.classList.add("active");
        grppic.classList.remove("active");
        ahanpic.classList.remove("active");
        saqipic.classList.remove("active");
    }
});