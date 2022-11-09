function multiply(){
    let Input1 = document.getElementById("Input_1").value;
    let Input2 = document.getElementById("Input_2").value;

    if(Input1 || Input2 <= 0){
        document.getElementById("H1").innerText = "het getal is te laag";
    }else{
        document.getElementById("H1").innerText = Input1 * Input2;
    }
}

function devide(){
    let Input1 = document.getElementById("Input_1").value;
    let Input2 = document.getElementById("Input_2").value;

    if(Input1 || Input2 <= 0){
        document.getElementById("H1").innerText = "het getal is te laag";
    }else{
        document.getElementById("H1").innerText = Input1 / Input2;
    }
}

function add(){
    let Input1 = document.getElementById("Input_1").value;
    let Input2 = document.getElementById("Input_2").value;

    if(Input1 || Input2 <= 0){
        document.getElementById("H1").innerText = "het getal is te laag";
    }else{
        document.getElementById("H1").innerText = Input1 + Input2;
    }
}

function minus(){
    let Input1 = document.getElementById("Input_1").value;
    let Input2 = document.getElementById("Input_2").value;

    if(Input1 || Input2 <= 0){
        document.getElementById("H1").innerText = "het getal is te laag";
    }else{
        document.getElementById("H1").innerText = Input1 - Input2;
    }
}

