document.body.style.backgroundColor="Blanchedalmond";
document.body.style.textAlign="center";
document.body.style.marginTop="30px";
document.body.style.fontWeight="600";
document.getElementById("number").style.borderRadius="15px";
document.getElementById("number").style.border="none";
document.getElementById("number").style.width="350px";
document.getElementById("number").style.height="50px";
document.getElementById("number1").style.borderRadius="15px";
document.getElementById("number1").style.border="none";
document.getElementById("number1").style.height="50px";
document.getElementById("number1").style.width="100px";
document.getElementById("number1").style.backgroundColor="Coral";
document.getElementById("number1").style.fontWeight="600";




var masivi= [];

function add(){
     var a=document.getElementById("number").value;
     masivi.push(a);
     document.getElementById("text").innerHTML=masivi;
     document.getElementById("myform").reset();
}