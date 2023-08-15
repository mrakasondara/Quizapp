const question = [
  {
    page: "1",
    quest: "1. What is CSS ?",
    a: "Cascading Style Sheet",
    b: "Casual Size Sheet",
    c: "Cascading Size Simetris",
    d: "Check Size Style",
    value: "a",
  },
  {
    page: "2",
    quest: "2. What is DOM ?",
    a: "Data Object Manipulation",
    b: "Document Object Model",
    c: "Design Own Model",
    d: "Document Object Modification",
    value: "b",
  },
  {
    page: "3",
    quest: "3. Inside which HTML element do we put the Javascript ?",
    a: "js",
    b: "javascript",
    c: "scripting",
    d: "script",
    value: "d",
  },
  {
    page: "4",
    quest: "4. Where is the correct place to insert a Javascript ?",
    a: "head section",
    b: "body section",
    c: "outer html section",
    d: "In style section",
    value: "b",
  },
  {
    page: "5",
    quest: "5. What is HTML ?",
    a: "Hyper Text Markup Language",
    b: "Hero Text Modification Language",
    c: "Hyper Transition Manipulation Large",
    d: "Hyper Text Market Language",
    value: "a",
  },
];

let indexQuest = 0;
let quest = document.querySelector("label.question");
let answerA = document.querySelector("span.answerA");
let answerB = document.querySelector("span.answerB");
let answerC = document.querySelector("span.answerC");
let answerD = document.querySelector("span.answerD");
let page = document.querySelector("p.page");
let option = document.querySelectorAll("div.quest input");
let skor = 0;
let button = document.querySelector("button");
let time = document.querySelector("p.time");
let timestamp = 10;
let deadline;
const wrapper = document.getElementById("wrapper");
const modalScreen = document.querySelector("div.modal");
let username;
function start() {
  const usernameInput = document.getElementById("username").value;
  modalScreen.style.display = "none";
  wrapper.style.display = "flex";
  showQuest();
  username = usernameInput;
  deadline = setInterval(() => {
    time.innerHTML = `${timestamp--}s`;
    if (timestamp < 0) {
      timestamp = 10;
      nextQuest();
    }
  }, 1000);
}

function showQuest() {
  deselectAnswer();
  page.innerHTML = `${indexQuest + 1}/${question.length}`;

  quest.innerHTML = question[indexQuest].quest;
  answerA.innerHTML = question[indexQuest].a;
  answerB.innerHTML = question[indexQuest].b;
  answerC.innerHTML = question[indexQuest].c;
  answerD.innerHTML = question[indexQuest].d;
}

function deselectAnswer() {
  option.forEach((opt) => {
    opt.checked = false;
  });
}

function selectAnswer() {
  option.forEach((opt) => {
    let answer;
    if (opt.checked) {
      answer = opt.id;
      if (answer == question[indexQuest].value) {
        skor++;
      }
    }
    return skor;
  });
}
function nextQuest() {
  if (indexQuest == question.length - 2) {
    button.innerHTML = "Submit";
  }
  if (indexQuest == question.length - 1) {
    selectAnswer();
    button.setAttribute("onclick", submit());
    clearInterval(deadline);
    return;
  }
  timestamp = 10;
  selectAnswer();
  indexQuest++;
  showQuest();
}
const infoRes = document.querySelector("p.info");
const scorRes = document.querySelector("p.scor");

function submit() {
  const info = document.querySelector("div.info");
  const user = document.querySelector("div.user");
  modalScreen.style.display = "flex";
  wrapper.style.display = "none";
  user.style.display = "none";
  info.style.display = "flex";

  if (skor >= 4) {
    infoRes.innerHTML = `Congrats ${username}, You Passed The Quiz`;
    scorRes.innerHTML = `${skor} of ${question.length} is passed`;
    infoRes.style.color = "green";
    scorRes.style.color = "green";
  } else {
    infoRes.innerHTML = `Sorry ${username}, You Missed The Quiz`;
    scorRes.innerHTML = `${skor} of ${question.length} is passed`;
    infoRes.style.color = "red";
    scorRes.style.color = "red";
  }
}

function refresh() {
  window.location.reload();
}
