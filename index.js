// fill in javascript code here

document.querySelector("form").addEventListener("submit", hospitalRecords);

function hospitalRecords(){
    event.preventDefault();
    var name= document.querySelector("#name").value;

    var dept= document.getElementById("dept").value;
    var email= document.querySelector("#email").value;
    
    var tr=document.createElement("tr");

    var td1=document.createElement("td");
    td1.innerText=name;
    var td2=document.createElement("td");
    var td3=document.createElement("td");
    td3.innerText=dept;
    var td4=document.createElement("td");
    var td5=document.createElement("td");
    td5.innerText=email;
    var td6=document.createElement("td");
    var td7=document.createElement("td");
    
    var td8=document.createElement("td");
    td8.innerText="Delete";

    tr.append(td1, td3, td5, td8);

    document.querySelector("tbody").append(tr,td1,td3,td5,td8);

}

