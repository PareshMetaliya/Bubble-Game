// for loop for random number ob bubbles
function makeBubble() {
  var clutter = "";
  for (let i = 1; i < 109; i++) {
    let random = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${random}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}
// timer logic
var timer = 60;
function runTimer() {
  var tmr = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").innerHTML = timer;
    }
    // document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
    else {
      clearInterval(tmr);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>
    `;
    }
  }, 1000);
}

// hit logic
var rn = 0;
function getNewHit() {
  rn = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = rn;
}

// score update on hit
var score = 0;
function incScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

// adding event listner on the parents of the bubbles= pbtm so with the only one event listner we can read all click of every child bubbles as event listner not available on bubbles so it will search it on it's parent

// document.querySelector("#pbtm").addEventListener("click", function(details){

//alert("chala");

//console.log(details.target);  // give a target on which click is done

//console.log(details.target.textContent);  // give a target text value in string on which click is done

// console.log(Number(details.target.textContent));  // converted target text value in number on which click is done

document.querySelector("#pbtm").addEventListener("click", function (details) {
  let clickNumber = Number(details.target.textContent);

  if (rn === clickNumber) {
    incScore();
    makeBubble();
    getNewHit();
  }
});

makeBubble();
runTimer();
getNewHit();
