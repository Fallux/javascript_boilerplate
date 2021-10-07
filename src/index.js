console.log("Hello world");
let htmlSpelIsActief = document.getElementById("spelIsActief");
let htmlTimeCountdown = document.getElementById("timeCountdown");
let htmlStart = document.getElementById("startknop");
let htmlTimer = document.getElementById("timer");
let htmlSpeler1Knop = document.getElementById("player1Knop");
let htmlSpeler2Knop = document.getElementById("player2Knop");
let htmlSpeler1score = document.getElementById("score_p1");
let htmlSpeler2score = document.getElementById("score_p2");

let htmlReset = document.getElementById("reset");

let countDown = 5;
let tijd = 10;
let aantalKlikken = 0;

let magJeKlikken = false;

let speler1score = 0;
let speler2score = 0;

function aftellen(){
    if(countDown == 0){
        spelBegint();
    }else{
        countDown = countDown-1; 
        htmlTimeCountdown.innerHTML = countDown;
        setTimeout(aftellen, 600)
    }
}
function spelBegint(){
    htmlTimer.innerHTML= tijd;
    htmlTimeCountdown.style.display= "none";
    magJeKlikken = true;
    setTimeout(aftellenInspel, 600);
}

function aftellenInspel(){
    
    function p1Function(){
        aantalKlikken += 0;
        htmlSpeler1score.innerHTML= aantalKlikken;

    }
}
aftellen();//HIERMEE LAAT JE DE FUNCTIE ZIE OP HET SCHERM NA HET LADEN

