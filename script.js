let intMeters = ["Dumb as a Chicken","Imbecile","a Idiot","Below Average","Average","Above Average","Intelligent","Genius","God Gifted","Einstein or something?"]
let count = 0;
function calculate() {
	let userName = document.querySelector("input").value;
	count++;
	if (userName === "") {
	alert("Enter your Name");
 	
}else if ((userName == "Hania shareef" || userName == "hania shareef") && (count <=1)) {
	document.querySelector(".alert-shownumber").innerHTML = userName + " Your are " + intMeters[6];
}else if (count <= 1){
	intMeter = intMeters[Math.floor(Math.random()*intMeters.length)];
	document.querySelector(".alert-shownumber").innerHTML = userName + " Your are " + intMeter;
	}
	else{
		alert("Please Enter New Name");
		window.location.replace("index.html");
	}

}

