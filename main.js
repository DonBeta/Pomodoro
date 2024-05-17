const taks = [];  // aqui almacenare todas nuestras taresas que cree
let time = 0; // variable que comenzara nuestra cuenta regresiva
let timer = null;
let timerBreak = null;
let current = null;

const Add = document.querySelector("#Add");
const itTasks = document.querySelector("#itTasks");
const form = document.querySelector("#form");

form.addEventListener('submit', e => {
    e.preventDefault();
    if (itTasks.value !== '') {
        createTask(itTasks.value);
        itTasks.value = '';
        renderTasks();
    }
});

function createTask(value) {

    const newTask = {
        id: (Math.ramdon() * 100).toString(36).slice(3),  // para crear una ID dinamico de 36 caracteristicas  y el slice 3 es para eliminar las ultimas 3 caracteristicas
        title: value,
        completed: false,
    };

    itTasks.unshift(newTask);
}

function renderTasks() {
    const html = tasks.map(task => {


        return `
            <div class="task">
                <div class="completed">${task.completed ? ` <span class="done">Done</span>}` : `<button class="startr-button" data-id="${task.id}">Start</button>`}</div>
                <div class="title">${task.title}</div>
            </div>
        `;


    });

    const tasksContainer = document.querySelector("#tasks");
    tasksContainer.innerHTML = html.join("");
}