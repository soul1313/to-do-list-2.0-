// Функция добавления задачи
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Введите задачу!');
        return;
    }

    const taskList = document.getElementById('taskList');
    
    // Создание нового элемента списка
    const newTask = document.createElement('li');
    
    // Текст задачи
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    newTask.appendChild(taskContent);

    // Кнопка для удаления задачи
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Удалить';
    removeButton.className = 'remove';
    removeButton.onclick = () => removeTask(newTask);
    newTask.appendChild(removeButton);

    // Добавляем задачу в список
    taskList.appendChild(newTask);
    
    // Очищаем поле ввода
    taskInput.value = '';
}

// Функция удаления задачи
function removeTask(taskElement) {
    taskElement.remove();
}

// Обработчик нажатия клавиши Enter
document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {  // Проверяем, если нажата клавиша Enter
        addTask();  // Добавляем задачу
    }
});
