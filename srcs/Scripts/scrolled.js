let posicaoScroll;
const whoWorks = document.getElementById("listWhoKnow");
const titleWhyPing = document.getElementById("titleWhyPingo");
const imageWhyPing = document.getElementById("imageWhyPingo");
const whyPXTH1 = document.getElementById("whyPXTH1");
const whyPTXTP = document.getElementById("whyPTXTP");
function defScroll(){
    posicaoScroll = window.scrollY;
    console.log(posicaoScroll);
    
    
    if(posicaoScroll > 250){
        whoWorks.style.transform = "translateY(0px)"
        whoWorks.style.opacity = 1
    } else{
        whoWorks.style.transform = "translateY(-30px)"
        whoWorks.style.opacity = 0
    }

    if(posicaoScroll > 570){
        titleWhyPing.style.transform = "translateY(0)"
        titleWhyPing.style.opacity = 1
    
        imageWhyPing.style.transform = "translateY(0)"
        imageWhyPing.style.opacity = 1
        whyPXTH1.style.transform = "translateY(0)"
        whyPXTH1.style.opacity = 1
        whyPTXTP.style.transform = "translateY(0)"
        whyPTXTP.style.opacity = 1
    
    } else {
        titleWhyPing.style.transform = "translateY(-30px)"
        imageWhyPing.style.transform = "translateX(-100px)"
        whyPXTH1.style.transform = "translateY(100px)"
        whyPTXTP.style.transform = "translateY(-30px)"
        titleWhyPing.style.opacity = 0
        whyPTXTP.style.opacity = 0
        whyPXTH1.style.opacity = 0
        imageWhyPing.style.opacity = 0

    }

};
window.addEventListener('scroll', defScroll)
