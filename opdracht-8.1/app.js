function multiply(){
    let Input1 = document.getElementById("Input_1").value;
    let Input2 = document.getElementById("Input_2").value;

    document.getElementById("H1").innerHTML = Input1 * Input2;
}

function devide(){
    let Input1 = document.getElementById("Input_1").value;
    let Input2 = document.getElementById("Input_2").value;

    document.getElementById("H1").innerHTML = Input1 / Input2;
}

function add(){
    let Input1 = document.getElementById("Input_1").value;
    let Input2 = document.getElementById("Input_2").value;

    document.getElementById("H1").innerHTML = +Input1 + + Input2;
}

function minus(){
    let Input1 = document.getElementById("Input_1").value;
    let Input2 = document.getElementById("Input_2").value;

    document.getElementById("H1").innerHTML = Input1 - Input2;
}