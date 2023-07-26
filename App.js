const inputBox = document.getElementById("input-box");
const listContainer =document.getElementById("list-container");


function addTask(){
    if(inputBox.value ===''){
        alert("write something");
    }
    else{
        let ul =document.createElement("ul");
        ul.innerHTML=inputBox.value;
        listContainer.appendChild(ul);
        let span = document.createElement("span");
        span.innerHTML="";
        ul.appendChild(span);
    }
    inputBox.value ="";
    saveData();

}

listContainer.addEventListener("click",function(e){


    if(e.target.tagName==="UL"){
        e.target.classList.toggle("checked");
        saveData();
    }

    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();


}


});

function saveData(){

    localStorage.setItem("data",listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML=localStorage.getItem("data");
}

showData();