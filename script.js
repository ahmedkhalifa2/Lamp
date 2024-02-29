var btn = document.getElementById("btn")
var body = document.querySelector("body")

btn.onclick = (function(){
    body.classList.toggle("on")
})