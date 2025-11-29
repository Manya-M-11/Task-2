function showMessage() {
    alert("Hello Manya! JavaScript is working!");
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields!");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email!");
        return;
    }

    alert("Form submitted successfully!");
    document.getElementById("contactForm").reset();
});

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let ul = document.getElementById("taskList");

    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button onclick="removeTask(this)">❌</button>`;

    ul.appendChild(li);
    taskInput.value = "";
}

function removeTask(btn) {
    btn.parentElement.remove();
}
