var corAns = 0;
var currentQuestion = 1

function changeQues(){
	var ques = document.getElementById("qtest");
	ques.innerHTML = questions[currentQuestion - 1].question;
}

window.onload=function(){
	changeOption();
}

function correct(){
	corAns = 1;
}
function incorrect(){
	corAns = 0;
}
function changeOption(){
	var ops1 = document.getElementById("op1");
	var ops2 = document.getElementById("op2");
	var ops3 = document.getElementById("op3");
	ops1.innerHTML = questions[currentQuestion - 1].op1;
	ops2.innerHTML = questions[currentQuestion - 1].op2;
	ops3.innerHTML = questions[currentQuestion - 1].op3;
	if(questions[currentQuestion - 1].corr == 1){
		ops1.onclick = correct;
		ops3.onclick = incorrect; 
		ops2.onclick = incorrect;
	}
	else if(questions[currentQuestion - 1].corr == 2){
		ops1.onclick = incorrect; 
		ops2.onclick = correct; 
		ops3.onclick = incorrect; 
	}
	else if(questions[currentQuestion - 1].corr == 3){
		ops1.onclick = incorrect; 
		ops2.onclick = incorrect;
		ops3.onclick = correct; 
	}
}


function toggleWrong() {
	var result1 = document.getElementById("res1");
	var result2 = document.getElementById("res2");
	
	
	if (corAns) {
		result1.style.display = "block";
		result2.style.display = "none";
	} else {
		result1.style.display = "none";
		result2.style.display = "block";
	}
}

function toggleOff(){
	var result1 = document.getElementById("res1");
	var result2 = document.getElementById("res2");
	result1.style.display = "none";
	result2.style.display = "none";
}

function speak(text) {
	const speech = new SpeechSynthesisUtterance();
	speech.text = text;
	speechSynthesis.speak(speech);
}

function showAns(){
	var ques = document.getElementById("qtest");
	if(corAns){
		ques.innerHTML = questions[currentQuestion - 1].answer;
		speak(questions[currentQuestion - 1].answer);
	}
	else{
		ques.innerHTML = questions[currentQuestion - 1].question;
		toggleWrong();
	}
	var ops1 = document.getElementById("op1");
	var ops2 = document.getElementById("op2");
	var ops3 = document.getElementById("op3");
	ops1.disabled = true
	ops2.disabled = true
	ops3.disabled = true


}


var questions = [
	{ question: "They ____ the bus to work.", answer: "They take the bus to work.",op1: "take", op2: "taken", op3: "taker", corr: 1},
	{ question: "She ____ teach chemistry.", answer: "She doesn't teach chemistry.",op1: "dosen't", op2: "get", op3: "best", corr: 1 },
	{ question: "What ____ you doing?", answer: "What are you doing?",op1: "is", op2: "are", op3: "can", corr: 2 },
	{ question: "My daughter does ____ laundry", answer: "My daughter does the laundry",op1: "a", op2: "an", op3: "the", corr: 3 },
	
];


function nextQuestion() {
	if (currentQuestion < questions.length) {
		currentQuestion++;
		changeQues();
	}
	else{
		currentQuestion = 1;
		changeQues();
	}
	var ops1 = document.getElementById("op1");
	var ops2 = document.getElementById("op2");
	var ops3 = document.getElementById("op3");
	ops1.disabled = false
	ops2.disabled = false
	ops3.disabled = false
}

function prevQuestion() {
	if (currentQuestion <= questions.length && currentQuestion != 1) {
		currentQuestion--;
		changeQues();
	}
	var ops1 = document.getElementById("op1");
	var ops2 = document.getElementById("op2");
	var ops3 = document.getElementById("op3");
	ops1.disabled = false
	ops2.disabled = false
	ops3.disabled = false
}
function changeColor(){
	
}






