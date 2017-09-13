var questions = [
	"Who is the dark knight?",
	"Who is the man of Steel?",
	"Who fought in the world war?",
	"Who created their own suit?"
]

var random = Math.floor((Math.random() * 3));

var answer = prompt(questions[random]);

var batman = document.getElementById("batman");
var superman = document.getElementById("superman");
var ironman = document.getElementById("ironman");
var cap = document.getElementById("cap");

if(random == 0 && answer == "batman"){
	console.log("Correct");
	batman.style.visibility = "visibile";
	superman.style.visibility = "hidden";
	cap.style.visibility = "hidden";
	ironman.style.visibility = "hidden";
}
else if(random == 1 && answer == "superman"){
	console.log("Correct");
	superman.style.visibility = "visibile";
	batman.style.visibility = "hidden";
	cap.style.visibility = "hidden";
	ironman.style.visibility = "hidden";
}
else if(random == 2 && answer == "cap"){
	console.log("Correct");
	cap.style.visibility = "visibile";
	superman.style.visibility = "hidden";
	batman.style.visibility = "hidden";
	ironman.style.visibility = "hidden";
}
else if(random == 3 && answer == "ironman"){
	console.log("Correct");
	ironman.style.visibility = "visibile";
	batman.style.visibility = "hidden";
	cap.style.visibility = "visibile";
	superman.style.visibility = "hidden";
}
else{
	console.log("False");
}


//console.log(document.getElementById("batman"));

/*document.getElementById("question").innerHTML = questions[Math.floor((Math.random() * 3))];
var count = 0;
var batman = document.getElementById("batman");
var superman = document.getElementById("superman");
var cap = document.getElementById("cap");
var ironman = document.getElementById("ironman");



if(questions[0] && batman.checkValidity()){
	console.log("Correct");
	count++;
}
else if(questions[1] && superman.checkValidity()){
	console.log("Correct");
	count++;
}
else if(questions[2] && cap.checkValidity()){
	console.log("Correct");
	count++;
}
else if(questions[4] && ironman.checkValidity()){
	console.log("Correct");
	count++;
}
else{
	console.log("Wrong. Back to zero");
	count = 0;
}



document.getElementById("count").innerHTML = count;
*/