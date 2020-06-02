
  document.querySelector('form').addEventListener('submit',submit);
  document.getElementById('clear').addEventListener('click',clearList);
  document.querySelector('ul').addEventListener('click',deleteOrTick);

function submit(e){
  e.preventDefault();
  let input = document.querySelector('input');
  if(input.value != '')
    addTask(input.value);
  input.value = '';
}

// add tasks
function addTask(task){
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = `<input type="checkbox"><label>${task}</label><span class="delete">×</span>`;
  ul.appendChild(li);
  document.querySelector('.tasksBoard').style.display ='flex';
}

// check whether delete or tick
function deleteOrTick(e){
  if(e.target.className == 'delete')
    deleteTask(e);
  else {
    tickTask(e);
  }
}

// delete task
function deleteTask(e){
  let remove = e.target.parentNode;
  let parentNode = remove.parentNode;
  parentNode.removeChild(remove);
}

// tick a task
function tickTask(e){
  const task = e.target.nextSibling;
  if(e.target.checked){
    task.style.textDecoration = "line-through";
    task.style.color = "#999999";
  }else {
    task.style.textDecoration = "none";
    task.style.color = "#61505e";
  }
}


// clear 
function clearList(e){
  let ul = document.querySelector('ul').innerHTML = '';
}

