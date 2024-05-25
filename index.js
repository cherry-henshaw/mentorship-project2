let inputField = document.querySelector("#input-field");
let divWrapper = document.querySelector(".todo-item-con");
let container = document.querySelector(".container");
let todoList = document.querySelector(".todo-list");
inputField.addEventListener("keydown", (event) =>{
  if (event.key === "Enter") {
    let li = document.createElement('uli');
    li.innerText = inputField.value;
    li.classList.add("li");
    todoList.appendChild(li);
    inputField.value = "";

    let editInput = document.createElement('span');
    editInput = li;
    editInput.addEventListener("dblclick",myfun)
    function myfun() {
        
    }

    let newTime = document.createElement('span');
    let newDate = new Date();
    let current = newDate.toLocaleTimeString();
    newTime.innerText =  current;
    newTime.classList.add("new-time");
    todoList.appendChild(newTime);
    
    let completeButton = document.createElement('button');
    completeButton.innerText =  'Edit';
    completeButton.classList.add("edit-btn");
    todoList.appendChild(completeButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerText =  'Delete';
    deleteButton.classList.add("delete-btn");
    todoList.appendChild(deleteButton);

    divWrapper.appendChild(todoList);
   

    completeButton.addEventListener("click", completeToDo);

   function completeToDo() {
    if (2 > 1) {
      li.classList.toggle("line-through");
    }
  }


    
    deleteButton.addEventListener("click", deleteToDo);

    function deleteToDo() {
      if (2 > 1) {
        li.classList.add("trash-text");
      }
    } 

    

      


  };

});



  