var config = {
  apiKey: "AIzaSyDiszQtqQ82up58DVKGwwSlRYaiFTQzEsk",
  authDomain: "reconstruction-inc.firebaseapp.com",
  databaseURL: "https://reconstruction-inc.firebaseio.com",
  projectId: "reconstruction-inc",
  storageBucket: "reconstruction-inc.appspot.com",
  messagingSenderId: "1072545534960"
};
firebase.initializeApp(config);

var classRoot = firebase.database().ref('Class');

var classID = ["firstClass", "secondClass", "thirdClass"];


$( document ).ready(function() {
	var index = 0;

	classRoot.on('child_added', function(snapshot) {
		document.getElementById(classID[index]).children[0].innerHTML = snapshot.key;
		document.getElementById(classID[index]).children[1].innerHTML = snapshot.child("Info/Course").val();
		document.getElementById(classID[index]).children[2].innerHTML = "Professor: " + snapshot.child("Info/Professor").val();
		document.getElementById(classID[index]).children[3].innerHTML = "Email: " + snapshot.child("Info/Email").val();
		document.getElementById(classID[index]).children[4].innerHTML = "Lecture: " + snapshot.child("Info/Lecture").val();
		document.getElementById(classID[index]).children[5].innerHTML = "Location: " + snapshot.child("Info/Location").val();
		document.getElementById(classID[index]).children[6].innerHTML = "Office: " + snapshot.child("Info/Office").val();
		document.getElementById(classID[index]).children[7].innerHTML = "Office Hour: " + snapshot.child("Info/Office Hour").val();
		
		// var DBvalue = snapshot.val();
		// var table = document.getElementById("t1");
		// var row = table.insertRow(4);
		// var cell1 = row.insertCell(0);
		// var cell2 = row.insertCell(1);
		// var cell3 = row.insertCell(2);
		// cell1.id = "countries";
		// cell1.innerHTML = DBvalue.country;
		// cell1.addEventListener("click", function(){
		// 		myMap.src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyA4iXPq8maCq8c-Cr1WtNhF26z1Rihdndo&q=" + DBvalue.country + "&maptype=satellite";
		// })
		// var newID = snapshot.key;
		// if (DBvalue.correction == "correct") {
		// 	row.className = "CorrectTable";
		// 	row.style.color = "blue";
		// 	cell2.innerHTML = DBvalue.answer;
		// 	cell3.innerHTML = '&#10004 <button type="button" id="'+newID+'" onclick="deleteDB(this)"> delete </button>';
		// }
		// else {
		// 	row.className = "WrongTable";
		// 	row.style.color = "red";
		// 	cell2.innerHTML = DBvalue.answer.strike();
		// 	cell3.innerHTML = DBvalue.capital + ' <button type="button" id="'+newID+'" onclick="deleteDB(this)"> delete </button>';			
		// 
		// }
		index++;
	});


});