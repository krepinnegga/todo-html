const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

//adding task function
addTask.addEventListener('click', function(){
   //passing local storage
   localStorage.setItem('value', inputTask.value);
   //creats a div
    let task = document.createElement('div');
    task.classList.add('task');
    
    //creates a <li><li> & recives value stored in inputTask
    let li = document.createElement('li');
    li.innerText = localStorage.getItem("value");
    task.appendChild(li);
    
    
    //creating check button & appending to task div
    let checkBtn = document.createElement("button");
   checkBtn.innerHTML = '<i class="fa-solid fa-check"><i>';
   checkBtn.classList.add('checkTask');
   task.appendChild(checkBtn);
   
  
   let deleteBtn = document.createElement("button");
   deleteBtn.innerHTML = '<li class="fa-solid fa-trash-can"><li>';
   deleteBtn.classList.add('deleteTask');
   task.appendChild(deleteBtn);
   
   
   if(inputTask.value === "") {
      alert('Please Enter a Task');
   } else {
      taskContainer.appendChild(task);
   }
   
   //makes inputTask empty after entering 
   inputTask.value = "";
   
   checkBtn.addEventListener('click', function(){
      checkBtn.parentElement.style.textDecoration = "line-through";
   });
   
   deleteBtn.addEventListener('click', function(e){
      let target = e.target;
      
      target.parentElement.parentElement.remove();
   });
});

//creating variables

