
/*
window.addEventListener("scroll", ()=>{
    let y = window.scrollY
    console.log(y)

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
})*/
const inicio = document.getElementById("inicio");
const beneficios = document.getElementById("beneficioss");
const porque = document.getElementById("porque");
const who = document.getElementById("casesH");
const plans = document.getElementById("planss");
const faq = document.getElementById("faq");

window.addEventListener("scroll", ()=>{
    var secoes = document.querySelectorAll('section');
    
    secoes.forEach((sec)=>{
        var rect = sec.getBoundingClientRect();
        
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            console.log('Section: ' + sec.id + 'is visible')
            
            if(sec.id == "main"){
                inicio.style.color = 'white';
            } else if (sec.id == 'beneficios'){
                inicio.style.color = 'black';
                beneficios.classList.add('active');
            } else if (sec.id == 'nossosClientes') {
                beneficios.classList.remove('active');
                porque.classList.add('active');
            } else if (sec.id == 'casesSucesso'){
                porque.classList.remove('active');
                who.classList.add('active');
            } else if (sec.id == 'planos'){
                who.classList.remove('active');
                plans.classList.add('active');
            }

        }
    })
})