function create_bombs_array(min,max){

    let bombs = []

    let i = 0

    while(i < 16){
        let number = Math.floor(Math.random() * (max - min + 1)) + min

        if(!bombs.includes(number)){
            bombs.push(number)
            i++
        }
    }

    return bombs

}

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

    let bombs_array = create_bombs_array(1, box_num)
    console.log(bombs_array)

    create_grid(box_num, box_in_a_row, bombs_array)
}

function create_grid(box_num, box_in_a_row, bombs_array){

    document.querySelector(".container").innerHTML = ""

    const grid = document.createElement("div")
    grid.classList.add("grid")

    let lucky_box = 0

    for(let i=0; i<box_num; i++){

        const box = create_single_box(i+1, box_in_a_row)

        box.addEventListener("click", function(){
            this.classList.add("clicked")
            
            if(bombs_array.includes(parseInt(this.innerText))){
                this.classList.add("red")
                grid.classList.add("event-null")
                alert(`Hai selezionato una bomba: `+this.innerText)
                alert(`Hai indovinato ${lucky_box} caselle`)
            }
            else{
                lucky_box++         
            }
        })

        grid.appendChild(box)

    }

    document.querySelector(".container").appendChild(grid)

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


//Da inizio al gioco al premere del pulsante

document.getElementById("play-btn").addEventListener("click", function(){
    new_game()
})