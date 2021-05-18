function computerplay() {
    var a = Math.floor(Math.random() * 3)
    if (a == 0)
        console.log("Computer Chooses Rock");
    else if (a == 1)
        console.log("Computer Chooses Paper");
    else
        console.log("Computer CHooses Scissors");
    return a;
}
let click = 0;
function getPlayerNo() {


    let PlayerNo;
    document.getElementById("Img1").onclick = function () {
        PlayerNo = 1;
        click++;
        let cp;
        if (click < 5) {
            cp = computerplay();
            switch (playround(cp, PlayerNo)) {
                case 1:
                    document.getElementById("score").innerHTML = ++count
            }
        }


        else
            document.getElementById("score").innerHTML = "END";


    };


    const play = document.getElementById("Img2").onclick = function () {
        PlayerNo = 0;
        click++;
        let cp;
        if (click < 5) {
            cp = computerplay();
            switch (playround(cp, PlayerNo)) {
                case 1:
                    document.getElementById("score").innerHTML = ++count
            }
        }


        else
            document.getElementById("score").innerHTML = "END";


    };

    document.getElementById("Img3").onclick = function () {
        PlayerNo = 2;
        click++;
        let cp;
        if (click < 5) {
            cp = computerplay();
            switch (playround(cp, PlayerNo)) {
                case 1:
                    document.getElementById("score").innerHTML = ++count
            }
        }


        else
            document.getElementById("score").innerHTML = "END";


    };



}


function playround(cp, ppno) {
    if (cp == ppno) {
        console.log("Draw");
        return 0;
    }
    else if ((cp == 0 && ppno == 1) || (cp == 1 && ppno == 2) || (cp == 2 && ppno == 0)) {

        console.log("Win");
        return 1;
    }
    else {

        console.log("Lose");
        return - 1;
    }
}
let count = 0;
function game() {
    let i;

    getPlayerNo();

    console.log(count);
}
game();