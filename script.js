//your JS code here. If required.
//SGN your JS code here. If required.
var noOfDays = function (yr){
 	var isleap = 355;
	var dif = 2024 - yr ;
	if (dif%4==0) {
		isleap = 366;
	} else {
		isleap = 365;
	}
 
 	return (isleap);
 };

const yr = prompt("Enter year.");
alert(noOfDays(yr));