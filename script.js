let btn = document.getElementById("toggle");
let body = document.querySelector("body");
let greeting = document.getElementById("greeting");
let quote = document.getElementById("quote");
let QuoteBtn = document.getElementById("new-quote");
let input = document.getElementById("input");
let list = document.getElementById("list");


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

let addBtn = document.getElementById("taskbut");

addBtn.addEventListener("click", function () {
  let li = document.createElement("li");
  li.innerHTML = `<input type="checkbox" /> ${input.value}`;
  list.appendChild(li);
  input.value = "";
  li.style.fontSize = "20px";
  li.style.marginTop = "10px";
  li.style.fontFamily = "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";
  li.style.marginLeft = "10px";
});

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
    }
    else {
        mode="light";
         body.style.backgroundColor=" #E4C59C"
          let taskSection = document.getElementById("task");
          taskSection.style.color = "black";
          quote.style.color="black";
          greeting.style.color="#270a42";
    }
});
 console.log(mode);
























