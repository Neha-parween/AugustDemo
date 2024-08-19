document.getElementById('addTaskButton').addEventListener('click', function() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== "") {
        var listItem = document.createElement('li');
        listItem.textContent = taskInput.value;
        
        // Remove task on click
        listItem.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });

        taskList.appendChild(listItem);
        taskInput.value = '';
    }
});
