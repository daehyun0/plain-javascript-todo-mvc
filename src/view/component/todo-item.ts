import BaseView from '../base-view.js';
import TodoItem from '../../model/todo.js';
export default class TodoItemView extends BaseView {
    todoItem:TodoItem;

    constructor (todoItem:TodoItem) {
        super();
        this.todoItem = todoItem;
    }
    
    render () {
        const todoItemHtmlElem = document.createElement('div');
        todoItemHtmlElem.classList.add('todo-item');
        todoItemHtmlElem.classList.add('p-4');
        todoItemHtmlElem.classList.add('rounded');
        todoItemHtmlElem.classList.add('shadow-sm');

        todoItemHtmlElem.innerHTML = `<p class="title h2 mb-0">${this.todoItem.title}</p>
        <p class="content lead mb-0 mt-1">${this.todoItem.content}</p>`;

        return todoItemHtmlElem;
    }
}