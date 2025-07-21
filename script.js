let btn = document.getElementById("toggle");
let body = document.querySelector("body");
let greeting = document.getElementById("greeting");
let quote = document.getElementById("quote");
let QuoteBtn = document.getElementById("new-quote");
let input = document.getElementById("input");



//greeting
let date=new Date() ;
    console.log(date);
let hours= date.getHours();
    console.log(hours);
if(hours >= 0 && hours < 12){
    greeting.innerHTML="☀️ GOOD MORNING"
}  else if(hours >= 12 && hours < 18){
    greeting.innerHTML="🌤️ GOOD AFTERNOON"
} else  {
    greeting.innerHTML="🌙 GOOD EVENING"
}

//quote generator
const quotesArray = [
  "Push yourself, because no one else is going to do it for you.",
  "Success doesn’t just find you. You have to go out and get it.",
  "Great things never come from comfort zones.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Do something today that your future self will thank you for.",
  "It always seems impossible until it’s done.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Dream big. Work hard. Stay focused.",
  "Discipline is the bridge between goals and accomplishment."
];
function showRandomQuote() {
  let index = Math.floor(Math.random() * quotesArray.length);
  quote.innerText = quotesArray[index];
}

QuoteBtn.addEventListener("click", showRandomQuote);

// task add
let tableBody = document.querySelector("#table tbody");
let addBtn = document.getElementById("taskbut");



let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
loadTasksFromStorage();

addBtn.addEventListener("click", function () {
  let taskText = input.value.trim();
  if (taskText === "") return;

  let taskObj = { task: taskText, completed: false };
  tasks.push(taskObj);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  addTaskToTable(taskObj); 
  input.value = "";
});

function addTaskToTable(taskObj, index = tasks.length - 1) {
  let newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td class="${taskObj.completed ? 'completed' : ''}">${taskObj.task}</td>
    <td><button class="delete-btn">Delete</button></td>
    <td><button class="complete-btn">Complete</button></td>
  `;
  tableBody.appendChild(newRow);

  // Delete Button
  newRow.querySelector(".delete-btn").addEventListener("click", function () {
    newRow.remove();
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  // Complete Button
  newRow.querySelector(".complete-btn").addEventListener("click", function () {
    let taskCell = newRow.querySelector("td");
    taskCell.classList.toggle("completed");

    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });
}

function loadTasksFromStorage() {
  tasks.forEach((taskObj, index) => {
    addTaskToTable(taskObj, index);
  });
}


// dark mode

let mode = "light";
btn.addEventListener("click",()=>{
    if (mode==="light"){  
        mode="dark";
         body.style.backgroundColor="black";
         body.style.Color="white";
         let taskSection = document.getElementById("task");
          taskSection.style.color = "white";
          quote.style.color="white";
          greeting.style.color="hsl(271, 18%, 69%)";
          dark.style.color="white";
          dark.innerText="light mode";

    }
    else {
        mode="light";
         body.style.backgroundColor=" #E4C59C"
          let taskSection = document.getElementById("task");
          taskSection.style.color = "black";
          quote.style.color="black";
          greeting.style.color="#270a42";
            dark.style.color="black";
          dark.innerText="dark mode";
           
    }
});
 
localStorage.setItem("test", "hello");
console.log(localStorage.getItem("test"));
























