"use strict"
// CREO UN CONTENITORE PER LA GRIGLIA NELL'HTML
let container = document.createElement("div")
container.setAttribute('class', 'container mt-5')
document.body.appendChild(container);

// CREO UNA TABELLA NEL CONTENITORE PER LA GRIGLIA
let table = document.createElement("table")
container.appendChild(table)
    
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
   else{
    grid(10)
   }
})

// CREO L'EVENTO CHE RESETTA LA GRIGLIA 
let reset = document.querySelector(".reset")
reset.addEventListener('click', function(){
  table.innerHTML = ''
})

// CREO LA FUNZIONE CHE GENERA LA GRIGLIA NEL CONTENITORE
    function grid(caselle){
        table.innerHTML = ''
        let cnt = 1;
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
                box.style.width = `calc(100% / ${numberGrid})`
                box.style.height = box.style.width
                box.style.padding = `35px 0`
                box.addEventListener('click', function(){
                    this.classList.toggle("bg-color")
                    console.log(this.innerText)
                })
                cnt++  
            }
        }
    }

    grid(10)