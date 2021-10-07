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
let toetsknop;
let magJeKlikken = false;

let speler1score = 0;
let speler2score = 0;

function aftellen(){
    if(countDown == 0){
        spelBegint();
    }else{
        countDown = countDown-1; 
        htmlTimeCountdown.innerHTML = countDown;
        setTimeout(aftellen, 100)
    }
}
function spelBegint(){
    htmlTimer.innerHTML= tijd;
    htmlTimeCountdown.style.display= "none";
    magJeKlikken = true;
    setTimeout(aftellenInspel, 100);
}
// ik had eerst onkeydown op HTML neergzet zoals bij onclick maar ik liep dezelfde plek weer vast.
// de knop is niet actief na de countdown tenzij ik op de knoppen klik
// function p1Function(event){
//  toetsknop = event.key;
//     if(toetsknop == "a"){
//         if(magJeKlikken == true){
//             speler1score = speler1score += 1;
//             htmlSpeler1score.innerHTML = speler1score;
//         }
       
//     }  
// }
// function p2Function(event){
//     toetsknop = event.key;
//        if(toetsknop == "l"){
//            if(magJeKlikken == true){
//             speler2score = speler2score += 1;
//             htmlSpeler2score.innerHTML = speler2score;
//            }
          
//        }  
//    }
   document.addEventListener("keydown", function (event){
        toetsknop = event.key;
        if(toetsknop == "a"){
            if(magJeKlikken == true){
                speler1score = speler1score += 1;
                htmlSpeler1score.innerHTML = speler1score;
            }   
        }  
        if(toetsknop == "l"){
            if(magJeKlikken == true){
             speler2score = speler2score += 1;
             htmlSpeler2score.innerHTML = speler2score;
            }
           
        }  
   });

function aftellenInspel(){
    if(tijd == 0){
        magJeKlikken = false;
        htmlWinnaar.style.display= "block";
        if(speler1score>speler2score){
            htmlWinnaar.innerHTML = "de winnaar is speler 1!";
            htmlSpeler1score.style.backgroundColor= "green";
            htmlSpeler2score.style.backgroundColor= "red";
        }else if(speler1score<speler2score){
            htmlWinnaar.innerHTML = "de winnaar is speler 2!";
            htmlSpeler1score.style.backgroundColor= "red";
            htmlSpeler2score.style.backgroundColor= "green";
        }
        else{
            htmlWinnaar.innerHTML = "Het is gelijkspel";
        }
    }else{
        tijd = tijd-1;
        htmlTimer.innerHTML= tijd;
        setTimeout(aftellenInspel, 100);
    }
   

}
aftellen();//HIERMEE LAAT JE DE FUNCTIE ZIE OP HET SCHERM NA HET LADEN

