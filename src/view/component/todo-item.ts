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
        todoItemHtmlElem.classList.add('d-flex');
        todoItemHtmlElem.classList.add('justify-content-between');
        todoItemHtmlElem.classList.add('align-items-center');

        todoItemHtmlElem.innerHTML = `<div class="content">
            <p class="title h2 mb-0">${this.todoItem.title}</p>
            <p class="content lead mb-0 mt-1">${this.todoItem.content}</p>
        </div>
        <div class="button-group">
            <button type="button" class="btn btn-danger">삭제</button>
            <button type="button" class="btn btn-secondary">수정</button>
        </div>`;

        return todoItemHtmlElem;
    }
}