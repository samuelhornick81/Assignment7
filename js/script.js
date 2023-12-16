function addTodo() {
    var inputValue = document.getElementById('newTodo').value;
    if (inputValue.trim() !== '') {
        var listItem = document.createElement('li');

        listItem.textContent = inputValue;

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'x';
        deleteButton.onclick = function() {
            deleteTodo(listItem);
        }

        listItem.appendChild(deleteButton);

        var todosList = document.getElementById('todos');
        todosList.appendChild(listItem);

        document.getElementById('newTodo').value = '';
    }
}

function deleteTodo(todoItem) {

    var todosList = todoItem.parentNode;

    todosList.removeChild(todoItem);
}