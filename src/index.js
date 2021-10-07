console.log("Hello world");
let htmlSpelIsActief = document.getElementById("spelIsActief");
let htmlTimeCountdown = document.getElementById("timeCountdown");
let htmlStart = document.getElementById("startknop");
let htmlTimer = document.getElementById("timer");
let htmlWinnaar = document.getElementById("winnaar");
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
    if(tijd == 0){
        magJeKlikken = false;
        if(htmlSpeler1score>htmlSpeler2score){
            htmlWinnaar.innerHTML = "de winnaar is speler 1!!!";
        }else if(htmlSpeler1score<htmlSpeler2score){
            htmlWinnaar.innerHTML = "de winnaar is speler 2!!!";
        }
        else{
            htmlWinnaar.innerHTML = "Het is gelijkspel";
        }
    }else{
        tijd = tijd-1;
        htmlTimer.innerHTML= tijd;
        setTimeout(aftellenInspel, 600);
    }
   

}
aftellen();//HIERMEE LAAT JE DE FUNCTIE ZIE OP HET SCHERM NA HET LADEN

