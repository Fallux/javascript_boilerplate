console.log("Hello world");
let clicks = 0;
function p1Function(event){

    let knop = event.key;

    if (knop == 'a'){
        clicks+=1;
        document.getElementById("score_p1").innerHTML=clicks;
    }
}


function p2Function(event){

    let knop = event.key;

    if (knop == 'l'){
        clicks+=1;
        document.getElementById("score_p2").innerHTML=clicks;
    }
}

