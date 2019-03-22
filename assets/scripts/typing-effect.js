let typingElement = document.querySelector(".content__title--effect");
typingElement.innerText = "";

let blinkingElement = document.querySelector(".content__title--blinking");
let professions = ["developera", "dizajnera", "kreativaca", "izumitelja", "poduzetnika", "IT profesionalaca"];

typingEffect();

function type(i, typeSpeed) {
    for (let j = 0; j < professions[i].length; j++) 
        setTimeout(function() { typingElement.innerText += professions[i][j] }, typeSpeed * j);

    setTimeout(function() { blinkingElement.style.animation = "blinking 200ms infinite alternate" }, typeSpeed * (professions[i].length - 1));
}

function erase(i, eraseSpeed, eraseDelay) {
    setTimeout(function() { 
        if (i != professions.length - 1)  {
            blinkingElement.style.animation = "none";  
    
            for (let j = 0; j < professions[i].length; j++)
                setTimeout(function() { typingElement.innerText = professions[i].substring(0, professions[i].length - 1 - j)}, eraseSpeed * j);
        }
    }, eraseDelay); 
}

function typingEffect() {
    for (let i = 0; i < professions.length; i++) {
        setTimeout(function() {     
            type(i, 150);
            erase(i, 50, 4000);
        }, 5000*i)   
    }
};