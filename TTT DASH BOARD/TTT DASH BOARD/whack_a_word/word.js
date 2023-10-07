let currWordTile;
let currWrongTile;
let score = 0;
let gameOver = false;


window.onload=function() {
        SetGame();

}
function SetGame(){
	for(let i= 0; i<9; i++) {
		let tile = document.createElement("div");
		tile.id= i.toString();
                tile.addEventListener("click",selectTile);
		document.getElementById("board").appendChild(tile); 
    }
	setInterval(setWord, 3000); 
	setInterval(setWrong, 3000);
	setInterval(randomi, 2000);
	var myInter = setInterval(setQues, 3000);
	
}
function getRandom(){
	let num = Math.floor(Math.random() * 9);
	return num.toString();
}
var some;
function randomi(){
	some = Math.floor(Math.random() * 7);
}

function setWord(){
	if(currWordTile){
		currWordTile.innerText=""
	}
    let word = document.createElement("p");
	word.innerText=rightWord[some].english;
	
	let num = getRandom();
	if(currWrongTile && currWrongTile.id == num){
		return;
	}
	currWordTile = document.getElementById(num);
	currWordTile.appendChild(word);
	
}
function setWrong(){
	if(currWrongTile){
		currWrongTile.innerText=""
	}
    let word = document.createElement("p");
	word.innerText=wrongWord[some].wrong;
	
	
	let num = getRandom();
	if(currWordTile && currWordTile.id == num){
		return;
	}
	currWrongTile = document.getElementById(num);
	currWrongTile.appendChild(word);
}
var rightWord= [{hindi:"चलना", english:"walking" },
{hindi:"खाना", english:"eating" },
{hindi:"खेलना", english:"playing" },
{hindi:"नृत्य", english:"dancing" },
{hindi:"सोना", english:"sleeping" },
{hindi:"सीखना", english:"learning" },
{hindi:"दौड़ना", english:"running" },

];
var wrongWord= [{wrong:"taking"},
				{wrong:"cyring"},
				{wrong:"sweeping"},
				{wrong:"speaking"},
				{wrong:"singing"},
				{wrong:"moping"},
				{wrong:"jumping"},

];


function selectTile() {
	if (gameOver) {
		return;
    }
    if (this == currWordTile) {
		score += 10;
        document.getElementById("score").innerText = score.toString();
		forceIntervalIteration()
    }
    else if (this == currWrongTile) {
		document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
    }
}

function setQues(){
	var que=document.getElementById("ques");
	que.innerText=rightWord[some].hindi;
}
function forceIntervalIteration() {
	clearInterval(myInter);
	setQues(); 
	myInter = setInterval(setQues, 3000);
}