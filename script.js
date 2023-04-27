class TodoList {
    constructor() {
        this.newItem = document.getElementById('input');
        this.ulList = document.getElementById('list');
        this.arrayList = [];

        this.newItem.addEventListener('keyup', (event) => {
            if (event.keyCode === 13 && this.newItem.value.trim() !== '') {
                this.addElement();
            }
        });   
    }

    addElement() {
        this.arrayList.push(this.newItem.value.trim());
        this.newItem.value = '';
        this.displayElement();                        
    }

    displayElement() {            
        const liTodo = document.createElement('li');
            this.ulList.appendChild(liTodo);

            const labelTodo = document.createElement('label');
            labelTodo.for = 'todo';
            labelTodo.textContent = this.arrayList[this.arrayList.length - 1];            
            liTodo.appendChild(labelTodo);

            const inputTodo = document.createElement('input');
            inputTodo.id = 'todo';
            inputTodo.type = 'checkbox';
            liTodo.appendChild(inputTodo); 
            
            const buttonTodo = document.createElement('button');
            buttonTodo.innerText = 'Delete';
            liTodo.appendChild(buttonTodo);
            buttonTodo.addEventListener('click', () => {                
                liTodo.setAttribute('style', 'display: none');
            });                   
    }       
}

const todoList = new TodoList();