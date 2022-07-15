function IMC(){
    var p=document.getElementById('p').value;
    var a=document.getElementById('a').value;
    var imc=p/(a/100*a/100);
    document.getElementById("result").innerHTML="Seu IMC é" + imc;
    }