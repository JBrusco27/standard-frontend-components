function planSelected(child){
    switch(child){
        case 1:
            document.querySelector(`.container > section > div:nth-child(3)`).style.animation = "planSelected 1s ease-in-out forwards";
            setTimeout(() => {
                document.querySelector(`.container > section > div:nth-child(2)`).style.animation = "planSelected 1s ease-in-out forwards";
                setTimeout(() => {
                    document.querySelector(`.container > section > div:nth-child(1)`).style.animation = "planSelected 1s ease-in-out forwards";
                    repeated();
                }, 300);
            }, 300);
            break;
        case 2:
            document.querySelector(`.container > section > div:nth-child(1)`).style.animation = "planSelected 1s ease-in-out forwards";
            setTimeout(() => {
                document.querySelector(`.container > section > div:nth-child(3)`).style.animation = "planSelected 1s ease-in-out forwards";
                setTimeout(() => {
                    document.querySelector(`.container > section > div:nth-child(2)`).style.animation = "planSelected 1s ease-in-out forwards";
                    repeated();
                }, 300);
            }, 300);
            break;
        case 3:
            document.querySelector(`.container > section > div:nth-child(1)`).style.animation = "planSelected 1s ease-in-out forwards";
            setTimeout(() => {
                document.querySelector(`.container > section > div:nth-child(2)`).style.animation = "planSelected 1s ease-in-out forwards";
                setTimeout(() => {
                    document.querySelector(`.container > section > div:nth-child(3)`).style.animation = "planSelected 1s ease-in-out forwards";
                    repeated();
                }, 300);
            }, 300);
            break;
    }
}

function repeated(){
    setTimeout(() => {
        document.querySelector(`.container > section > div:nth-child(1)`).style.animation = "none";
        document.querySelector(`.container > section > div:nth-child(2)`).style.animation = "none";
        document.querySelector(`.container > section > div:nth-child(3)`).style.animation = "none";
        document.querySelector(`.container > section`).style.display = "none"; 
        document.querySelector(`.container-check`).style.display = "flex";
        setTimeout(() => {
            document.querySelector(`.container-check`).style.opacity = "1";
            setTimeout(() => {
                document.querySelector(`.container-check`).style.opacity = "0";
                document.querySelector(`.container > section`).style.display = "flex"; 
                setTimeout(() => {
                    document.querySelector(`.container-check`).style.display = "none";
                }, 300);
            },2500);
        }, 100);
    }, 1000);
}