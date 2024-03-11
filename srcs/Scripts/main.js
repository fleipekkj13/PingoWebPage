


const span = document.getElementById("span-main-content");
const spanArray = ["O seu sucesso", "A sua marca", "Sua história", "Posicionamento"];

const buttonShowMore = document.getElementById("showMore");

let i = 0;
setInterval(()=> {
    span.style.transform = "translateY(-20px)"
    span.innerText= spanArray[i];
    i++;
    if (i >= spanArray.length){
        i = 0;
    }    
    span.classList.add("active");

},1500)    



