let NotStarted = [];
let InProgress = [];
let Completed = [];

const button = document.getElementById("submitButton")

const notStartedList = document.getElementById('NotStarted')
const inProgressList = document.getElementById('InProgress')
const completedList = document.getElementById('Completed')


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

notStartedList.addEventListener("dragover", function(e) {
    e.preventDefault();
});

notStartedList.addEventListener("drop", function(e) {
    e.preventDefault();
    const task = e.dataTransfer.getData("text/plain");

    // Remove from other arrays
    if (InProgress.includes(task)) {
        InProgress.splice(InProgress.indexOf(task), 1);
    } else if (Completed.includes(task)) {
        Completed.splice(Completed.indexOf(task), 1);
    }

    // Add to NotStarted if not already there
    if (!NotStarted.includes(task)) {
        NotStarted.push(task);
    }

    renderList();
});

inProgressList.addEventListener("dragover", function(e) {
    e.preventDefault();
});

inProgressList.addEventListener("drop", function(e) {
    e.preventDefault();
    const task = e.dataTransfer.getData("text/plain");

    if (NotStarted.includes(task)) {
        NotStarted.splice(NotStarted.indexOf(task), 1);
    } else if (Completed.includes(task)) {
        Completed.splice(Completed.indexOf(task), 1);
    }

    if (!InProgress.includes(task)) {
        InProgress.push(task);
    }

    renderList();
});

completedList.addEventListener("dragover", function(e) {
    e.preventDefault();
});

completedList.addEventListener("drop", function(e) {
    e.preventDefault();
    const task = e.dataTransfer.getData("text/plain");

    if (NotStarted.includes(task)) {
        NotStarted.splice(NotStarted.indexOf(task), 1);
    } else if (InProgress.includes(task)) {
        InProgress.splice(InProgress.indexOf(task), 1);
    }

    if (!Completed.includes(task)) {
        Completed.push(task);
    }

    renderList();
});



function submitInput(event) {
    event.preventDefault();
    let input = document.getElementById("inputText").value;
    
    if (input == '' || input == ' ' || input == null) {
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

