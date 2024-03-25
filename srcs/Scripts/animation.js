const cardCont = document.querySelectorAll('#card-cont');
const case1 = document.getElementById("case1");
const case2 = document.getElementById("case2")
window.addEventListener('scroll', ()=>{
    let y = window.scrollY;

    if(y >= 800){
        cardCont.forEach((element, index)=>{
            setTimeout(() => {
                element.style.opacity = 1
                element.style.transform = "translateY(0)"
            }, index * 150)
            })
    } else {
        cardCont.forEach((element) => {
            element.style.opacity = 0
            element.style.transform = "translateY(200px)"
        })
    }

    if(y >= 2200){
        case1.style.transform = "translateX(0)"
        case1.style.opacity = 1

        setTimeout(() => {
            case2.style.transform = "translateX(0)"
            case2.style.opacity = 1                
        }, 250)

    } else {
        case1.style.transform = "translateX(-300px)" 
        case1.style.opacity = 0 
        case2.style.transform = "translateX(300px)"
        case2.style.opacity = 0

    }


})