let cnt = 1;
const btn = document.getElementsByClassName("btn")[0];
const input = document.getElementById("inputtext");

// Load tasks from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
    loadTasks();
});

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        btn.click();
    }
});

function AddTask() {
    if (input.value.trim() === "") {
        alert("Task cannot be empty!");
        return;
    }

    const timeId = Date.now();
    const taskText = input.value;

    // Save task to localStorage
    saveTaskToStorage(timeId, taskText);

    // Add task to UI
    createTaskElement(timeId, taskText);

    input.value = ""; // Clear input field
}

function createTaskElement(id, taskText) {
    const div = document.createElement("div");
    div.className = "box";
    div.dataset.id = id; // Set ID for task

    const serialNo = document.createElement("span");
    serialNo.innerText = cnt++;
    serialNo.className = "s1";

    const inputbox = document.createElement("span");
    inputbox.innerHTML = taskText;
    inputbox.className = "s2";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';
    deleteBtn.className = "b1";
    deleteBtn.addEventListener("click", () => {
        deleteTaskFromStorage(id);
        div.remove();
        updateSerialNumbers(); // Update serial numbers dynamically
    });

    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    completeBtn.className = "b2";
    completeBtn.addEventListener("click", () => {
        inputbox.style.textDecorationLine = "line-through";
        completeBtn.style.color = "green";
        inputbox.style.color = "red";
    });

    div.append(serialNo, inputbox, deleteBtn, completeBtn);

    const parent = document.getElementById("box-main");
    parent.append(div);
}

function saveTaskToStorage(id, taskText) {
    const taskList = localStorage.getItem("task");
    let tasks = taskList ? JSON.parse(taskList) : {};
    tasks[id] = taskText;

    localStorage.setItem("task", JSON.stringify(tasks));
}

function loadTasks() {
    const taskList = localStorage.getItem("task");
    if (taskList) {
        const tasks = JSON.parse(taskList);
        for (const id in tasks) {
            createTaskElement(id, tasks[id]);
        }
    }
}

function deleteTaskFromStorage(id) {
    const taskList = localStorage.getItem("task");
    if (taskList) {
        const tasks = JSON.parse(taskList);
        delete tasks[id];

        localStorage.setItem("task", JSON.stringify(tasks));
    }
}

function updateSerialNumbers() {
    const serials = document.querySelectorAll(".s1");
    serials.forEach((serial, index) => {
        serial.innerText = index + 1;
    });
    cnt = serials.length + 1;
}
