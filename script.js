
const firebaseConfig = {
  apiKey: "AIzaSyAhTkzJ7tlFbWtmifCxGI0UCcQ12bLubag",
  authDomain: "quizapplication-770ad.firebaseapp.com",
  databaseURL: "https://quizapplication-770ad-default-rtdb.firebaseio.com",
  projectId: "quizapplication-770ad",
  storageBucket: "quizapplication-770ad.firebasestorage.app",
  messagingSenderId: "492447781422",
  appId: "1:492447781422:web:0ec9c685788602520185bf"
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


var questions = [
    {
      question: "Q1: HTML Stands for?",
      option1: "Hyper Text Markup Language",
      option2: "Hyper Tech Markup Language",
      option3: "Hyper Touch Markup Language",
      corrAnswer: "Hyper Text Markup Language",
    },
    {
      question: "CSS Stands for",
      option1: "Cascoding Style Sheets",
      option2: "Cascading Style Sheets",
      option3: "Cascating Style Sheets",
      corrAnswer: "Cascading Style Sheets",
    },
    {
      question: "Which tag is used for most large heading",
      option1: "<h6>",
      option2: "<h2>",
      option3: "<h1>",
      corrAnswer: "<h1>",
    },
    {
      question: "Which tag is used to make element unique ",
      option1: "id",
      option2: "class  ",
      option3: "label",
      corrAnswer: "id",
    },
    {
      question: "Any element assigned with id, can be get in css ",
      option1: "by # tag",
      option2: "by @ tag",
      option3: "by & tag",
      corrAnswer: "by # tag",
    },
    {
      question: "CSS can be used with ______ methods ",
      option1: "8",
      option2: "3",
      option3: "4",
      corrAnswer: "3",
    },
    {
      question: "In JS variable types are ____________ ",
      option1: "6",
      option2: "3",
      option3: "8",
      corrAnswer: "8",
    },
    {
      question: "In array we can use key name and value ",
      option1: "True",
      option2: "False",
      option3: "None of above",
      corrAnswer: "False",
    },
    {
      question: "toFixed() is used to define length of decimal ",
      option1: "True",
      option2: "False",
      option3: "None of above",
      corrAnswer: "True",
    },
    {
      question: "push() method is used to add element in the start of array ",
      option1: "True",
      option2: "False",
      option3: "None of above",
      corrAnswer: "False",
    },
  ];
  var button = document.getElementById("btn");
  var question = document.getElementById("ques");
  var option1 = document.getElementById("opt1");
  var option2 = document.getElementById("opt2");
  var option3 = document.getElementById("opt3");
  var index = 0;
  var score = 0;
  var sec = 59;
  var min = 1;
  
  var timerElement = document.getElementById("timer");
  
  function timer() {
    timerElement.innerText = `${min}:${sec}`;
    sec--;
    if (sec < 0) {
      min--;
      sec = 59;
  
      if (min < 0) {
        min = 1;
        sec = 59;
        nextQuestion();
      }
    }
  }
  
  setInterval(timer, 1000);
  
  function nextQuestion() {

    min = 1
    sec = 59
    var options = document.getElementsByClassName("options");
  
    for (var i = 0; i < options.length; i++) {
      if (options[i].checked) {
        var selectedOption = options[i].value;
        var getOption = questions[index - 1][`option${selectedOption}`];
        var corrAnswer = questions[index - 1]["corrAnswer"];
  
        if (getOption === corrAnswer) {
          score++;
        }
  
        console.log(getOption);
      }
  
      options[i].checked = false;
    }
    button.disabled = true;
  
    if (index > questions.length - 1) {
    
      if(score >= 70){

        Swal.fire({
          title: "Good job!",
          text: `Your score is ${((score / questions.length) * 100)}`,
          icon: "success",
        })
      }


      if(score <= 69){
        Swal.fire({
          title: "Are'nt you prepared!",
          text: `Your score is ${((score / questions.length) * 100)}`,
          icon: "warning",
        })}
      }
      else {
      question.innerText = questions[index].question;
      option1.innerText = questions[index].option1;
      option2.innerText = questions[index].option2;
      option3.innerText = questions[index].option3;
      index++;
    }
  
  
  function clicked() {
    button.disabled = false;
  }
  
  // database



  var userName = document.getElementById('name')
  var age = document.getElementById('age')
  var email = document.getElementById('email')
  

function continu(){

 window.location.href = "./quiz.html"



}

function save(){
  var continuebtn = document.getElementById('Continue')

  var key = firebase.database().ref('UserDetails').push().key
  var user = {
    key: key,
    userName: userName.value,
    userAge: age.value,
    userEmail: email.value
  }
 firebase.database().ref('UserDetails').child(key).set(user)
//  window.location.href = "./quiz.html"
  userName.value =""
  age.value = ""
  email.value = ""
  continuebtn.disabled = false
}