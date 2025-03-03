function calculate(){
    let a=parseInt(document.getElementById('bookone').value);
    let b=parseInt(document.getElementById('booktwo').value);
    let c=parseInt(document.getElementById('bookthree').value);
    let d=parseInt(document.getElementById('bookfour').value);
    let e=parseInt(document.getElementById('bookfive').value);
    if (a>100 ||b>100 || c>100 || d>100 || e>100 ){
        alert("Please enter correct value")
    }
    else{
        let obtain=a+b+c+d+e;
        document.getElementById("obtain").innerHTML=obtain;
        let percentage=obtain/500*100;
        document.getElementById("percentage").innerHTML=percentage;
        if (a>40 && b>40 && c>40 && d>40 && e>40 ){
            document.getElementById("remarks").innerHTML="Pass";

        } 
        else{
            document.getElementById("remarks").innerHTML="Fail";

        }
        if (obtain>=80){
            document.getElementById("grade").textContent="A";
        }
        if (obtain>=70){
            document.getElementById("grade").textContent="B";
        }
        else if (obtain>=60){
            document.getElementById("grade").textContent="C";
        }
        else if (obtain>=50){
            document.getElementById("grade").textContent="D";
        }
        else if (obtain>=40){
            document.getElementById("grade").textContent="E";
        }
        else {
            document.getElementById("grade").textContent="F";
        }
    }
    return false;
}