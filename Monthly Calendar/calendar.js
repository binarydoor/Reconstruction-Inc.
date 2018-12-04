 var config = {
    apiKey: "AIzaSyDiszQtqQ82up58DVKGwwSlRYaiFTQzEsk",
    authDomain: "reconstruction-inc.firebaseapp.com",
    databaseURL: "https://reconstruction-inc.firebaseio.com",
    projectId: "reconstruction-inc",
    storageBucket: "reconstruction-inc.appspot.com",
    messagingSenderId: "1072545534960"
  };
  firebase.initializeApp(config);

var CS188_data = firebase.database().ref('Class/CS188/Assignment');
var ENGR185_data = firebase.database().ref('Class/ENGR185/Assignment');
var ECE102_data = firebase.database().ref('Class/ECE102/Assignment');


var NovId = [112618,112718, 112818, 112918, 113018 ];  // set up the empty array
var DecId = [];
var dataStartDec = 120118;
for (var i = 0; i < 30 ; i++)		// array has total 35 number of elements
{
			DecId.push(dataStartDec);
			dataStartDec = dataStartDec + 100;
}


$( document ).ready(function() {

	

			CS188_data.on('child_added', function(snapshot) {
					
			
					document.getElementById(snapshot.key).innerHTML = "hw";
					//	dailyLine[num] += 1; 
				//	document.getElementById(classID[num]).children[dailyLine[num]].innerHTML = snapshot.val().fontcolor("black");
					//	dailyLine[num] += 1;
					
			});
});