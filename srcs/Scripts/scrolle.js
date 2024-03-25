const inicio = document.getElementById("inicio");
const beneficios = document.getElementById("beneficioss");
const porque = document.getElementById("porque");
const who = document.getElementById("casesH");
const plans = document.getElementById("planss");
const faq = document.getElementById("faq");


window.addEventListener("scroll", ()=>{
    let y = window.scrollY
    
    if( y >= 0 && y <= 830){
        inicio.style.color = "white";
    } else{
        inicio.style.color = "black";
    }
    
    if( y >= 830){
        beneficios.classList.add("active");      
    } else{
        beneficios.classList.remove("active");
    }
    if (y >= 1550){
        beneficios.classList.remove("active");
        porque.classList.add("active");
    } else{
        porque.classList.remove("active");
    }
    if (y >= 2200){
        porque.classList.remove("active");
        who.classList.add("active");
    } else{
        who.classList.remove("active");
    }
    if (y >= 3300){
        who.classList.remove('active');
        plans.classList.add('active');
    } else{
        plans.classList.remove('active');
    }
})