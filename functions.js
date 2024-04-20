document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("#butt").onclick = function() {
        let changedColor = document.querySelector("#colorfield").value;
        document.querySelector("#hola").style.color = changedColor;
        document.title = changedColor;
        } 
    });