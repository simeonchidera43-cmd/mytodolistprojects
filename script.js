let todolist = []



renDaTodoList()


function renDaTodoList() {

let  todolistHTMl = '';


for(let i = 0; i < todolist.length; i++){
  let todoObject = todolist[i];

  let {name, dueDate} = todoObject;

  let html = `

  <div>
   ${name}
  </div>

  <div>
     ${dueDate}
  </div>

  

    <button class="delete" onclick="
    todolist.splice(${i}, 1);
     renDaTodoList();
  ">X
  </button>

  
  `;
  todolistHTMl += html;
}

document.querySelector('.js-todolist-container').innerHTML = todolistHTMl

}


function addTodo() {
 let inputElement = document.querySelector('.js-name-input');

 let name = inputElement.value;

 let inputDate = document.querySelector('.js-date');

 let dueDate = inputDate.value

 todolist.push({
  name,
  dueDate
 });


 renDaTodoList()


}





