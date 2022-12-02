const button = document.getElementById('play');
let conteggio = 0;
let gameOver = false;

button.addEventListener("click", function () {

    if(!gameOver) {
        if (conteggio <10){
            conteggio++;
            button.innerHTML = `play ${conteggio}`;
        } else {
            gameOver=true;
            
            setTimeout(() => {
                gameOver = false;
                conteggio = 0;
                button.innerHTML = `play ${conteggio}`;
            }, 4000);
        }
    }
})