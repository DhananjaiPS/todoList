let cnt = 1;
const btn = document.getElementsByClassName("btn")[0];
const input = document.getElementById("inputtext");

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

    const div = document.createElement("div");
    div.className = "box";

    const serialNo = document.createElement("span");
    serialNo.innerText = cnt++;
    serialNo.className = "s1";

    const inputbox = document.createElement("span");
    inputbox.innerHTML = input.value;
    inputbox.className = "s2";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    deleteBtn.className = "b1";
    deleteBtn.addEventListener("click", () => {
        div.remove();
        updateSerialNumbers(); // Update serial numbers dynamically
    });

    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    completeBtn.className = "b2";
    completeBtn.addEventListener("click", () => {
        inputbox.style.textDecorationLine = "line-through";
        completeBtn.style.color="green";
        inputbox.style.color="red";
    });

    div.append(serialNo, inputbox, deleteBtn, completeBtn);

    const parent = document.getElementById("box-main");
    input.value = ""; // Clear input field
    parent.append(div);
}
// function updateSerialNumbers(){
//     const serials=document.querySelectorAll(".s1");
//     serials.forEach((serial,index))
// }

function updateSerialNumbers() {
    const serials = document.querySelectorAll(".s1");
    serials.forEach((serial, index) => {
        serial.innerText = index + 1;
    });
    cnt = serials.length + 1; // Adjust counter
}
