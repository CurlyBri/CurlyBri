(function(){
    const sliders = [...document.querySelectorAll(".slider-cuerpo")];
    const flechaAntes = document.querySelector("#antes");
    const flechaDespues = document.querySelector("#despues");
    let value;

    flechaAntes.addEventListener("click", ()=>changePosition(-1));
    flechaDespues.addEventListener("click", ()=>changePosition(1))

    function changePosition(change){
        const currentElement = Number(document.querySelector(".slider-cuerpo--show").dataset.id);

        value = currentElement;
        value+= change;

        console.log(sliders.length)

        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[currentElement-1].classList.toggle("slider-cuerpo--show");
        sliders[value-1].classList.toggle("slider-cuerpo--show");     
    }

})()

