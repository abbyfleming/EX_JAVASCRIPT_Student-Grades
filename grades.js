
//Random Scores

var scores = [
	82, 71, 95, 
	55, 98, 69, 
	72, 78, 84, 
	64, 58, 87
];

//find which score is highest
/*
var max = Math.max.apply(null, scores);
console.log(max);

//find which score is lowest

var min = Math.min.apply(null, scores);
console.log(min);



*/

var a = [91,100];
var b = [81, 90];
var c = [71, 80];
var d = [61, 70];

var aCounter = 0;
var bCounter = 0;
var cCounter = 0;
var dCounter = 0;
var fCounter = 0;

for (i =0; i < scores.length; i++) {
	if 
	(scores[i] > a[0] && scores[i] < a[1]) {
		aCounter += 1;
	} else if 
	(scores[i] > b[0] && scores[i] < b[1]) {	
		bCounter += 1;
	} else if
	(scores[i] > c[0] && scores[i] < c[1]) {	
		cCounter += 1;
	} else if 
	(scores[i] > d[0] && scores[i] < d[1]) {
		dCounter += 1;
	} else 
		fCounter += 1;
}

console.log(aCounter + " students made A's!");
console.log(bCounter + " students made B's!");
console.log(cCounter + " students made C's!");
console.log(dCounter + " students made D's!");
console.log(fCounter + " students made F's! Study more!");





