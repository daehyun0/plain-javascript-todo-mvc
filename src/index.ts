import PageTodoMainView from './view/page/todo-main.js';
import PageTodoEditView from './view/page/todo-edit.js';
import PageTodoAddView from './view/page/todo-add.js';

(function main () {
    const pageTodoMainView = new PageTodoMainView();
    const pageTodoEditView = new PageTodoEditView();
    const pageTodoAddView = new PageTodoAddView();

    pageTodoMainView.render();
})();
