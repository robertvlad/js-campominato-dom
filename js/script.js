//Bonus creare elemtenti di dificoltà

function new_game(){
    let difficulty = parseInt(document.getElementById("levels").value)

    let box_num;
    let box_in_a_row;

    switch (difficulty){
        case 1:
            box_num = 100
            box_in_a_row = 10
            break;
        case 2:
            box_num = 81
            box_in_a_row = 9
            break;
        case 3:
            box_num = 49
            box_in_a_row = 7
            break;
        default:
            box_num = 100
            box_in_a_row = 10
            break;        
    }

    create_grid(box_num, box_in_a_row)
}


function create_single_box(num, box_in_a_row){

    const box = document.createElement("div")

    box.classList.add("square")

    let side_length = `calc(100% / ${box_in_a_row})`

    box.style.width = side_length
    box.style.height = side_length

    box.innerText = num

    return box

}

function create_grid(box_num, box_in_a_row){

    document.querySelector(".container").innerHTML = ""

    const grid = document.createElement("div")
    grid.classList.add("grid")

    for(let i=0; i<box_num; i++){

        const box = create_single_box(i+1, box_in_a_row)

        box.addEventListener("click", function(){
            this.classList.toggle("clicked")
        })

        grid.appendChild(box)

    }

    document.querySelector(".container").appendChild(grid)

}


//Da inizio al gioco al premere del pulsante

document.getElementById("play-btn").addEventListener("click", function(){
    new_game()
})