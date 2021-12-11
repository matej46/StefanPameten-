var myModal=document.getElementById("myModal")
myModal.style.display="none"

var text=document.querySelector(".theAnswer")
var iks=document.getElementsByClassName("close")[0]
function check() {
    var answer=document.getElementById("input-el").value

 if (answer=='da') {
     myModal.style.display="block"
     myModal.style.backgroundColor="green"

     text.innerText="Vasiot odgovor e tocen!"


 }
else if (answer=="ne"){
     myModal.style.display="block"
     myModal.style.backgroundColor="red"

     text.innerText="Vasiot odgovor ne e tocen!"
 }
else {
     myModal.style.display="block"
     myModal.style.backgroundColor="purple"

     text.innerText="Ve molam odgovorete so'da' ili 'ne'"
 }
}
iks.addEventListener("click", function (){
    myModal.style.display="none"
})