let currentTimeouts = [];
let isLogin = false;

function clearWriting() {
    currentTimeouts.forEach(timeout => clearTimeout(timeout));
    currentTimeouts = [];
}

function writing(txt, isLogin) {
    clearWriting();

    const h1Element = document.querySelector(".container > section:first-child div h1");
    h1Element.textContent = "";

    txt.split("").forEach((e, i) => {
        const timeout = setTimeout(() => {
            h1Element.textContent += e;
        }, 150 * i);
        currentTimeouts.push(timeout);
    });
}



function loginHover(){
    if (isLogin) return;
    writing("One step away...");
}
function loginOut(){
    if (isLogin) return;
    writing("Continue were you left off");
}
function login(){
    isLogin = true;
    if(window.screen.width < 900){
        document.querySelector(".container > section:first-child div").style.height = "665%";
    }else{
        document.querySelector(".container > section:first-child div").style.width = "200%";
    }
    writing("Welcome back");
    setTimeout(() => {
        if(window.screen.width < 900){
            document.querySelector(".container > section:first-child div").style.height = "100%";
            writing("Continue were you left off");
        }else{
            document.querySelector(".container > section:first-child div").style.width = "100%";
        }
        isLogin = false;
    }, 5000);
}