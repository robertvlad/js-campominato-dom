//Crere la struttura della singola box e poi replicarle per a tutto il container seconda la struttura data

function create_grid() {

    document.querySelector(".grid").innerHTML = " "

    for (let i = 0; i < 100; i++){

        const box = document.createElement("div")
        box.classList.add("square")
        box.innerText = i+1
        box.addEventListener("click" , function(){
            this.classList.toggle("clicked")
            console.log(this.innerText)
        })
        document.querySelector(".grid").appendChild(box)
    }    

}


//Da inizio al gioco al premere del pulsante

document.getElementById("play-btn").addEventListener("click", function(){
    create_grid()
})