var todo = document.getElementById("todo");
var broj = 1;
function dodaj(){
    var input = document.getElementById("input");
    if (input.value != ""){
        var p = document.createElement("p");
        var node1 = document.createTextNode(broj);
        var node2 = document.createTextNode(". ")
        var node3 = document.createTextNode(input.value);
        p.appendChild(node1);
        p.appendChild(node2);
        p.appendChild(node3);
        p.setAttribute("id", "p");
        todo.appendChild(p);
        broj++;
        input.value = "";
    }
}


function izbrisi(){
    while (todo.firstChild) {
        todo.removeChild(todo.lastChild);
    }
    broj = 1;
}