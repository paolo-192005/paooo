function add(){
    let x = document.getElementById("num1").value;
    const y = document.getElementById("num2").value;
    var z = Number(x) + Number(y);
    document.getElementById('ans1').value = z;
}
function multiply(){
    let x = document.getElementById("num3").value;
    const y = document.getElementById("num4").value;
    var z = Number(x) * Number(y);
    document.getElementById('ans2').value = z;
}
function minus(){
    let x = document.getElementById("num5").value;
    const y = document.getElementById("num6").value;
    var z = Number(x) - Number(y);
    document.getElementById('ans3').value = z;
}
function divide(){
    let x = document.getElementById("num7").value;
    const y = document.getElementById("num8").value;
    var z = Number(x) / Number(y);
    document.getElementById('ans4').value = z;
}
function change() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
}
function change() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
}