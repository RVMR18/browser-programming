console.log("JS connected ✅");

const btnName = document.getElementById("btnName");
const nameOut = document.getElementById("nameOut");
const nameInput = document.getElementById("nameInput")

btnName.onclick = function () {
  nameOut.innerText = nameInput.value; 
  nameOut.style.color = "Green";
  nameOut.style.fontWeight = "Bold";
}

const btnToggle = document.getElementById("btnToggle");
const btnOn = document.getElementById("btnOnOff");

const toggleOut = document.getElementById("toggleOut");

btnToggle.onclick = function () {
  if (toggleOut.innerText === "OFF") {
    toggleOut.innerText = "ON";
  } else {
    toggleOut.innerText = "OFF";
  }
};
btnToggle.onclick=function(){
    if(toggleOut.innerText === "OFF"){
        toggleOut.innerText = "ON";
        toggleOut.style.backgroundColorcolor = "Red";
    }
}

const bgCard = document.getElementById("bgCard");
const btnBg1 = document.getElementById("btnBg1");
const btnBgReset1 = document.getElementById("btnBgReset1");

const btnBg = document.getElementById("btnBg");
const btnBgReset = document.getElementById("btnBgReset");

btnBg.onclick = function () {
  bgCard.style.backgroundColor = "Red"; 
};

btnBgReset.onclick = function () {
  bgCard.style.backgroundColor = "";
};

btnBg1.onclick = function () {
  bgCard.style.backgroundColor = "green";
};

btnBgReset1.onclick = function () {
  bgCard.style.backgroundColor = "";
};


let count = 0;

const btnPlus = document.getElementById("btnPlus");
const btnMinus = document.getElementById("btnMinus");
const btnReset = document.getElementById("btnReset");
const counterValue = document.getElementById("counterValue");

function renderCount() {
  counterValue.innerText = String(count);
}

btnPlus.onclick = function () {
  count = count + 1;
  renderCount();
};

btnMinus.onclick = function () {
  count = count - 1;
  renderCount();
};

btnReset.onclick = function () {
  count = 0;
  renderCount();
};

renderCount();

const aInput = document.getElementById("a");
const bInput = document.getElementById("b");
const btnAdd = document.getElementById("btnAdd");
const sumOut = document.getElementById("sumOut");

btnAdd.onclick = function () {
  const a = Number(aInput.value);
  const b = Number(bInput.value);
  const sum = a + b;

  sumOut.innerText = "Result: " + sum;
};

const btnHide = document.getElementById("btnHide");
const secret = document.getElementById("secret");

btnHide.onclick = function () {
  if (secret.style.display === "none") {
    secret.style.display = "block";
  } else {
    secret.style.display = "none";
  }
};

const msgInput = document.getElementById("msgInput");
const btnCheck = document.getElementById("btnCheck");
const msgOut = document.getElementById("msgOut");

btnCheck.onclick = function () {
  const text = msgInput.value.trim();

  if (text === "") {
    msgOut.innerText = "Please type something.";
    msgOut.style.color = "crimson";
  } else {
    msgOut.innerText = "You typed: " + text;
    msgOut.style.color = "green";
  }
};


const btnHappy = document.getElementById("btnHappy");
const btnSad = document.getElementById("btnSad");
const moodOut = document.getElementById("moodOut");

btnHappy.onclick = function () {
  moodOut.innerText = "Mood: Happy 😊";
  moodOut.style.color = "green";
  

};

btnSad.onclick = function () {
  moodOut.innerText = "Mood: Sad 😢";
  moodOut.style.color = "blue";
};
