

let button = document.querySelector("#btn");
let input = document.querySelector("#input");
let tasklist = document.querySelector("#tasklist");

button.addEventListener("click", function(){
   let task = document.createElement("li");
   tasklist.appendChild(task)   
   task.textContent=input.value ;
     
       input.value="";

   
} );