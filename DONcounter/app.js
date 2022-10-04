let Button = (document.getElementById("Button"))
let Button2 = (document.getElementById("Button2"))
let p = (document.getElementById("p"))

let Count = 0;

function Counter(){
    Count += 1;
    console.log(Count)
    p.innerText = Count + " Keer op geklikt"
    p.style.backgroundColor = "Blue"
}

function Counter2(){
    Count -= 1;
    console.log(Count)
    p.innerText = Count + " Keer op geklikt"
    p.style.backgroundColor = "Red"
}