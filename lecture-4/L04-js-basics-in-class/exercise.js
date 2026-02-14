console.log("JS connected ✅");

/* =========================================================
   STUDENT TODO VERSION (Exercises 9–16)
   Rules:
   - Do NOT change HTML ids
   - Fill only TODO parts
   - Test in browser + console
   ========================================================= */

/* =========================
   Exercise 9 — Grade
   TODO:
   1) Read score from input
   2) Use if / else if / else
   3) Show Grade: A/B/C/D/F
   ========================= */
const scoreInput = document.getElementById("scoreInput");
const btnGrade = document.getElementById("btnGrade");
const gradeOut = document.getElementById("gradeOut");

btnGrade.onclick = function () {
     
 
  // TODO: get score as number
      const score = Number(scoreInput.value);

  // TODO: implement grading logic
        if (score < 0 || score > 100 || isNaN(score)) {
          gradeOut.innerText = "Score must be 0 - 100";
        }
  // else if (score >= 90) ...
        else if (score >= 90) {
          gradeOut.innerText = "A";
        }
  // else if (score >= 80) ...
        else if (score >= 80) {
          gradeOut.innerText = "B";
        }
  // else if (score >= 70) ...
        else if (score >= 70) {
          gradeOut.innerText = "C";
        }
  // else if (score >= 60) ...
        else if (score >= 60) {
          gradeOut.innerText = "D";
        }
  // else ...
        else {
          gradeOut.innerText = "F";
        }

  gradeOut.innerText = "Grade: " + grade
};

/* =========================
   Exercise 10 — Even / Odd
   TODO:
   1) Complete isEven( n )
   2) Use it in button click
   ========================= */
const numEvenOdd = document.getElementById("numEvenOdd");
const btnEvenOdd = document.getElementById("btnEvenOdd");
const evenOddOut = document.getElementById("evenOddOut");

function isEven( n ) {
  // TODO: return true if n is even, false otherwise
  // return ...
  return n%2 == 0;
}

btnEvenOdd.onclick = function () {
  const n = Number(numEvenOdd.value);

  // TODO: use isEven( n ) and show EVEN or ODD
  // if (...) { ... } else { ... }
  if (isEven(n)){
    evenOddOut.innerText = "Result : EVEN";
  }
  else{
    evenOddOut.innerText = "Result : ODD";
  }
  
};

/* =========================
   Exercise 11 — Countdown
   TODO:
   1) Build a string using a for loop
   2) Count down from start to 0
   ========================= */
const countdownInput = document.getElementById("countdownInput");
const btnCountdown = document.getElementById("btnCountdown");
const countdownOut = document.getElementById("countdownOut");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


btnCountdown.onclick = async function () {
  const start = Number(countdownInput.value);

  // TODO: create text variable
  // let text = "";
    let text = ""
  // TODO: for loop from start down to 0
  // for (let i = start; i >= 0; i--) { ... }
    for (let i = start; i >= 0; i--) { 
      text += i + "\n";
      await sleep (10);
    }
  countdownOut.innerText = text;
};

/* =========================
   Exercise 12 — Sum 1..N
   TODO:
   1) Complete sumToN( n )
   2) Use it in button click
   ========================= */
const nSumInput = document.getElementById("nSumInput");
const btnSumN = document.getElementById("btnSumN");
const sumNOut = document.getElementById("sumNOut");

function sumToN( n ) {
  // TODO: sum numbers from 1 to n with a loop
  // let sum = 0;
  let sum = 0
  // for (...) { ... }
  for (let i = 1; i<=n; i++)
    sum += i
  // return sum;
  return sum;

}

btnSumN.onclick = function () {
  const n = Number(nSumInput.value);

  // TODO: call sumToN( n )
  const result = sumToN(n)
  // const result = ...

  sumNOut.innerText = "Sum: " + result;
};

/* =========================
   Exercise 13 — Repeat Text N Times
   TODO:
   1) Use a loop to repeat
   2) Build one long string result
   ========================= */
const repeatText = document.getElementById("repeatText");
const repeatCount = document.getElementById("repeatCount");
const btnRepeat = document.getElementById("btnRepeat");
const repeatOut = document.getElementById("repeatOut");

btnRepeat.onclick = function () {
  const text = repeatText.value;
  const times = Number(repeatCount.value);

  // TODO: let result = "";
  let result = "";
  // TODO: loop i=1..times, add text each time
  for (let i = 1; i<=times; i++)
    
  // TODO: show result
  result += text + " "
  repeatOut.innerText = result;
};

/* =========================
   Exercise 14 — Simple Login
   TODO:
   1) Read username/password
   2) Compare with correctUser/correctPass
   3) Show green success / red fail
   ========================= */
const loginUser = document.getElementById("loginUser");
const loginPass = document.getElementById("loginPass");
const btnLogin = document.getElementById("btnLogin");
const loginOut = document.getElementById("loginOut");

// Students can change these:
const correctUser = "student";
const correctPass = "1234";

btnLogin.onclick = function () {
  // TODO: read u and p (trim recommended)
  // const u = ...
  // const p = ...
  const u = loginUser.value.trim();
  const p = loginPass.value.trim();


  // TODO: if correct -> Welcome + green
  // else -> Wrong login + crimson
  if (u===correctUser && p=== correctPass){
    loginOut.innerText = "Status: Wlecome";
    loginOut.style.color = "green"
  } else{
    loginOut.innerText = "Status: Wrong login";
    loginOut.style.color = "Crimson"
  }

};

/* =========================
   Exercise 15 — Min / Max of 3
   TODO:
   1) Complete min3 and max3 using if
   2) Show "Min: X | Max: Y"
   ========================= */
const xInput = document.getElementById("x");
const yInput = document.getElementById("y");
const zInput = document.getElementById("z");
const btnMinMax = document.getElementById("btnMinMax");
const minMaxOut = document.getElementById("minMaxOut");

function min3(a, b, c) {
  // TODO: find minimum using comparisons
  // let m = a;
  let m = a;
  // if (b < m) m = b;
  if (b < m) m = b;
  // if (c < m) m = c;
  if (c < m) m = c;
  // return m;
  return m;

  //return 0; // TODO: replace
}

function max3(a, b, c) {
  // TODO: find maximum using comparisons
  let m = a
  if (b>m) m = b;
  if (c>m) m = c
  return m
  // return 0; // TODO: replace
}

btnMinMax.onclick = function () {
  const a = Number(xInput.value);
  const b = Number(yInput.value);
  const c = Number(zInput.value);

  // TODO: compute mn and mx using min3/max3
  // const mn = ...
  const mn = min3(a, b, c);
  // const mx = ...
  const mx = max3(a, b, c);

  minMaxOut.innerText = "Min: " + mn + " | Max: " + mx;
};

/* =========================
   Exercise 16 — Multiplication Table
   TODO:
   1) Complete makeTable( n )
   2) Use a loop 1..10
   3) Return one string
   ========================= */
const tableN = document.getElementById("tableN");
const btnTable = document.getElementById("btnTable");
const tableOut = document.getElementById("tableOut");

function makeTable( n ) {
  // TODO: build lines with for loop
  let text = "";
  // Example output:
  // "7 × 1 = 7 | 7 × 2 = 14 | ..."
  for (let i = 1; i<= 10; i++) {
    text += n + "x" + i + "=" + (n*i);

    if (i < 10) {
      text += " | ";
    }
  }

  return text;
}

btnTable.onclick = function () {
  const n = Number(tableN.value);

  // TODO: call makeTable( n ) and show it
  tableOut.innerText = makeTable(n);
};