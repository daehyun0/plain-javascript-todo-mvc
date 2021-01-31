import BaseView from '../base-view.js';
import TodoItem from '../../model/todo.js';

export default class PageTodoMainView extends BaseView {
    todoItem:TodoItem;
    
    constructor () {
        super();
        this.todoItem = new TodoItem('title', 'content', new Date());
    }

    render () {
        const pageFragment = document.createDocumentFragment();
        
        const header = document.createElement('header');
        const main = document.createElement('main');
        const footer = document.createElement('footer');

        // header start
        header.classList.add('p-5');

        header.innerHTML = `<div class="jumbotron">
            <h1 class="display-4">Handmade Todo App</h1>
            <p class="lead">이것은 타입스크립트로 만들어진 Todo 앱입니다.</p>
        </div>`
        // header start

        // main start
        main.classList.add('pl-5');
        main.classList.add('px-5');

        main.innerHTML = `<div>asdfasd</div>`
        // main end

        // footer start 
        footer.classList.add('p-5');
        footer.innerHTML = `<p class="mb-0">Designed and built with all the love in the world by the Bootstrap team with the help of our contributors</p>
            <p class="mb-0">Currently v0.0.1. Code licensed none.</p>`;
        // footer end

        pageFragment.appendChild(header);
        pageFragment.appendChild(main);
        pageFragment.appendChild(footer);

        return pageFragment;
    }
}