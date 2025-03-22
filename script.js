let notStartedL = []
let inProgressL = []
let CompletedL = []
//The arrays in which the list are stored


function addTask() {
    const taskInput = document.getElementById('To-do-list').value
    if (taskInput) {
        notStartedL.push(taskInput);
        
        console.log(notStartedL);
        document.getElementById('To-do-list').value = '';

        const taskList = document.getElementById('task-list');
        const li = document.createElement('li');
        li.textContent = taskInput;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = ' ';
        deleteBtn.onclick = () => {
            const index = notStartedL.indexOf(taskInput);
            if (index > -1) {
                notStartedL.splice(index, 1); // Remove from array
            }
            taskList.removeChild(li); // Remove from HTML
        };

        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    }
}