const inputBox = document.getElementById("input-box");
const listes = document.getElementById("listes");

function add() {
    if(inputBox.value === ''){
        alert("Write something!")
    }else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listes.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "";
        li.appendChild(span);
    }
    inputBox.value = "";
}