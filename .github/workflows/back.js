var corAns = 0;
function changeQues(){
	var ques = document.getElementById("qtest");
	if(corAns){
		ques.innerHTML = "They take the bus to work.";
	}
	else{
		ques.innerHTML = "They ____ the bus to work.";
		toggleWrong();
	}
}
function correct(){
	corAns = 1;
}
function incorrect(){
	corAns = 0;
}
function toggleWrong() {
	var result = document.getElementById("res");
	
	if (corAns) {
		result.style.display = "block";
	} else {
		result.style.display = "none";
	}
}