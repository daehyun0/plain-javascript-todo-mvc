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
        const todoAppTitle = document.createElement('div');
        todoAppTitle.classList.add('jumbotron');

        const todoAppTitleMain = document.createElement('h1');
        todoAppTitleMain.classList.add('display-4');
        todoAppTitleMain.innerText = 'Handmade Todo App';

        const todoAppTitleSub = document.createElement('p');
        todoAppTitleSub.classList.add('lead');
        todoAppTitleSub.innerText = "이것은 타입스크립트로 만들어진 Todo 앱입니다.";

        todoAppTitle.appendChild(todoAppTitleMain);
        todoAppTitle.appendChild(todoAppTitleSub);

        header.appendChild(todoAppTitle);
        // header start

        // main start
        // main end

        // footer start 
        // footer end

        pageFragment.appendChild(header);
        pageFragment.appendChild(main);
        pageFragment.appendChild(footer);

        document.body.appendChild(pageFragment);
    }
}