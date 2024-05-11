const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

//ADD A NEW TASK
function addTask(){
    if(inputBox.value ==='')
    {
        alert("You must write something");
    }
    else{
        let li=document.createElement("li"); //create a list tag
        li.innerHTML=inputBox.value; //change the text of li
        listContainer.appendChild(li); // the li should be under list container
        let span=document.createElement("span");
        span.innerHTML="\u00d7";// for cross sign
        li.appendChild(span);
        saveData()
    }
    inputBox.value="";
}

//WHEN THE ITEM IS CLICKED HOW SHOULD IT REACT
listContainer.addEventListener("click",function(e){
    if(e.target.tagName ==="LI")
    {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName ==="SPAN")
    {
        e.target.parentElement.remove();
        saveData()
    }
    
},false);

//EVEN AFTER REFRESHING THE WEBSITE IT SAVES THE DATA
 function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
 }

 //SHOWS THE DATA THAT IS SAVED
 function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
 }
 showTask();
