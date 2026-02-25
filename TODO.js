
// CREATE BASIC UI

document.body.style.fontFamily = "Arial";
document.body.style.color = "white";
document.body.style.background = "#ffffff";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.marginTop = "40px";

let app = document.createElement("div");
app.style.width = "400px";
app.style.background = "#000000";
app.style.padding = "20px";
app.style.borderRadius = "10px";
app.style.boxShadow = "0 0 10px rgba(246, 241, 241, 0.1)";

let title = document.createElement("h2");
title.innerText = "ToDo Application";
title.style.textAlign = "center";

let input = document.createElement("input");
input.placeholder = "Enter new task...";
input.style.width = "70%";
input.style.padding = "8px";

let addBtn = document.createElement("button");
addBtn.innerText = "Add";
addBtn.style.padding = "8px 12px";
addBtn.style.marginLeft = "10px";
addBtn.style.cursor = "pointer";

let list = document.createElement("ul");
list.style.listStyle = "none";
list.style.padding = "0";
list.style.marginTop = "20px";

app.append(title, input, addBtn, list);
document.body.appendChild(app);


// TASK CREATION FUNCTION

let createTask = (taskText) => {

    let li = document.createElement("li");
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";
    li.style.padding = "8px";
    li.style.borderBottom = "1px solid #eee";

    let text = document.createElement("span");
    text.innerText = taskText;
    text.style.cursor = "pointer";

    // Mark complete
    text.addEventListener("click", () => {
        text.style.textDecoration =
            text.style.textDecoration === "line-through"
                ? "none"
                : "line-through";
        text.style.color = "gray";
    });

    // Delete button
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.style.background = "red";
    delBtn.style.color = "#fff";
    delBtn.style.border = "none";
    delBtn.style.cursor = "pointer";

    delBtn.addEventListener("click", () => {
        li.remove();
    });

    li.append(text, delBtn);
    return li;
};


// EVENT HANDLING


// Add task
addBtn.addEventListener("click", () => {
    let value = input.value.trim();

    if (value === "") return;

    let task = createTask(value);
    list.appendChild(task);

    input.value = "";
});

// Enter key support
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addBtn.click();
});