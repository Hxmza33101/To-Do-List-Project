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

