let todoList = [];

let commands = {
  newTodo: 'new',
  listTodos: 'list',
  deleteTodo: 'delete',
  quitApp: 'quit'
}

let userCommand = prompt('What do you want to do?')

while (userCommand !== commands.quitApp) {
  
  if (userCommand === commands.newTodo) {
    let newTodo = prompt('Please enter a new todo:')
    todoList.push(newTodo)
    console.log(`"${newTodo}" added to the list`);
    userCommand = prompt('What do you want to do?')
  } else if (userCommand === commands.listTodos){
    if (todoList.length === 0) {
      console.log('Your To-Do list is empty');
    } else {
      console.log('***********')
    for (let i=0; i < todoList.length; i++){
      console.log(`${i}: ${todoList[i]}`);
    }
    console.log('***********')
    }
    userCommand = prompt('What do you want to do?')
  } else if (userCommand === commands.deleteTodo){
    const index = parseInt(prompt('Please enter the index of the item to delete:'))
    if (!Number.isNaN(index)) {
      const deletedTodo = todoList.splice(index,1)
      console.log(`"${deletedTodo}" has been deleted`);
    } else {
      console.log('Unknown index');
    }
    
    userCommand = prompt('What do you want to do?')
  } else {
    userCommand = prompt('I do not recognize that command. Please enter a valid command')
  }
} 

console.log('OK, you quit the app')