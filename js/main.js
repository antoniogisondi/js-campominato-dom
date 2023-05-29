"use strict"
// CREO UN CONTENITORE PER LA GRIGLIA NELL'HTML
let container = document.createElement("div")
container.setAttribute('class', 'container mt-5')
document.body.appendChild(container);

// CREO UNA TABELLA NEL CONTENITORE PER LA GRIGLIA
let table = document.createElement("table")
container.appendChild(table)

 // CREO LA FUNZIONE CHE GENERA UN NUMERO CASUALE
 function randomNumber(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}

 // CREO LA FUNZIONE CHE MI POPOLA L'ARRAY DELLE BOMBE
 function arrayBombPush(array_bomb, max){
    let check = false;
    let random_number;
    while(check === false){
        random_number = randomNumber(1, max);
        if(!array_bomb.includes(random_number)){
            check = true;
        }
    }
    return random_number;
}

// CREO LA FUNZIONE CHE GENERA LA GRIGLIA NEL CONTENITORE
function grid(caselle){
    let message = document.getElementById('score')
    const arrayBomb = []
    table.innerHTML = ''
    message.innerText = ''
    let cnt = 1;
    let game_over = false;
    let score = 0;
    for(let i = 0; i<caselle; i++){
        let row = document.createElement("tr")
        table.appendChild(row)
        for(let j = 0; cnt<=10, j<caselle; j++){
            let column = document.createElement("td")
            row.appendChild(column)
            let box = document.createElement("div")
            column.appendChild(box)
            let numberGrid = document.createTextNode(`${cnt}`)
            box.appendChild(numberGrid)
            box.classList.add('column')
            box.addEventListener('click', function(){
                  if(!arrayBomb.includes(parseInt(this.innerText))){
                      this.classList.toggle("bg-color")
                      score++
                  }
                  else{
                      this.classList.add("bomb")
                      game_over = true
                      document.getElementById('score').innerText = `Hai perso! Il tuo punteggio è di: ${score}`
                  }  
            })
            cnt++  
        }
    }
    for(let y = 0; y < 16; y++){
        let number = arrayBombPush(arrayBomb, cnt)
        arrayBomb.push(number)
    }
}
    
// CREO L'EVENTO CHE MI GENERA LA GRIGLIA IN BASE AL LIVELLO DI DIFFICOLTA' 
let button = document.querySelector(".play")
button.addEventListener('click', function(){
   let select = document.querySelector(".form-select").value
   if(select == 3){
    grid(7)
   }
   else if(select == 2){
    grid(9)
   }
   else if(select == 1){
    grid(10)
   }
})

// CREO L'EVENTO CHE RESETTA LA GRIGLIA 
let reset = document.querySelector(".reset")
reset.addEventListener('click', function(){
  table.innerHTML = ''
})



   