//Events
/*
  - Any event that takes place in a DOM.
  - Events can be user generated or by API.
  - Many types of events
  - Events contains properties and methods.
  - addEventListner function listens to what is set to listen, and calls fires the argument to be called.
    -addEventListener("click", function(){
    logic inside function
    })

    document.addEventListener
*/
//Preventing defaults
//Key events
// document.addEventListener("keydown", function){
//   Logic
// }
//load events

// const clickDiv = document.getElementById("clicky");
// const clickableButton = clickDiv.querySelector("button")

// clickableButton.addEventListener("click", logEvent);

// clickableButton.addEventListener("focus", logEvent);

// clickableButton.addEventListener("focusout", logEvent);


// function logEvent(e){
//   clickableButton.innerText = e.timeStamp;
//   clickableButton.removeEventListener("click", logEvent);
//   console.log(e.type);
// }

// const bg = document.getElementById("background");
// bg.addEventListener("mousedown", switchBackground);

// function switchBackground(e){
//   const hasBeenClicked = bg.contains(e.target);
//   if (hasBeenClicked){
//     bg.classList.add("background-color");
//   }
//   else{
//     bg.classList.remove("background-color");
//   }
// }


// const div3 = document.getElementById("div3");
// const qc = div3.querySelector("p");
// const ta = div3.querySelector("textarea");
// const paraText = "User is typing";
// let timer;
//
// ta.addEventListener("keydown", addText);
// ta.addEventListener("keyup", removeText);
//
// function addText(e){
//     qc.innerText = paraText;
// }
//
// function removeText(e){
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//         qc.innerText = "";
//     }, 1000)
// }


















