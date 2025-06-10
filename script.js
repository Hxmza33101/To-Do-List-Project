let NotStarted = [];
let InProgress = [];
let Completed = [];

const button = document.getElementById("submitButton")

const notStartedList = document.getElementById('NotStarted')
const inProgressList = document.getElementById('InProgress')
const completedList = document.getElementById('Completed')


function showInput(columnId) {
    const column = document.getElementById(columnId);
    const input = column.querySelector(".task-input");
    input.style.display = "inline";
    input.focus();
}

function handleKey(event, columnId) {
    if (event.key === "Enter") {
        const input = event.target;
        const task = input.value.trim();

        if (task) {
            const taskElement = document.createElement("div");
            taskElement.textContent = task;
            taskElement.classList.add("task-item");

            document.getElementById(columnId).appendChild(taskElement);
        }

        input.value = "";
        input.style.display = "none";
    }
}

let renderList = function() {
    notStartedList.innerHTML = '';
    inProgressList.innerHTML = '';
    completedList.innerHTML = '';

    NotStarted.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        notStartedList.appendChild(li);
    })

    InProgress.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        inProgressList.appendChild(li);
    })

    Completed.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        completedList.appendChild(li);
    })
}


function submitInput(event) {
    event.preventDefault();
    let input = document.getElementById("inputText").value;
    
    if (input.trim() === '') {
        alert("Input is empty")
        return;
    }
    
    NotStarted.push(input)

    console.log(NotStarted)
    console.log(InProgress)
    console.log(Completed)
    console.log(" ")

    renderList()
    document.getElementById("inputText").value = '';
}

const form = document.querySelector('form');
form.addEventListener('submit', submitInput);
button.addEventListener('click', submitInput);

