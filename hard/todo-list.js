/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = []
  }
  add(str) {
    this.todos.push(str)
  }
  remove(index) {
    if (index > -1 && index <= this.todos.length) {
       this.todos.splice(index, 1)
    }

  }
  update(index, updatedTodo) {
    if (index < this.todos.length && index > -1)
      this.todos[index] = updatedTodo;
  }
  getAll() {
    return this.todos;
  }

  get(index) {
    if (index >= this.todos.length)
      return null
    else
      return this.todos[index]
  }
  clear() {
    this.todos = []
  }

}

module.exports = Todo;
