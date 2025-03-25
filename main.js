function Checkgrade() {

	let Grade = document.getElementById('inputGrade').value;
	if (Grade>99){window.alert("perfect grade")
	else if (Grade>89){window.alert("above average grade")
	else if (Grade>84){window.alert("You have an above average grade")
	else if (Grade>74){window.alert("You have an average grade")
	else {window.alert("You're failing bro"){
	}
}