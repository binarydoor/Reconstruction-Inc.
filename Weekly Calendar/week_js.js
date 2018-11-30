 var config = {
    apiKey: "AIzaSyDiszQtqQ82up58DVKGwwSlRYaiFTQzEsk",
    authDomain: "reconstruction-inc.firebaseapp.com",
    databaseURL: "https://reconstruction-inc.firebaseio.com",
    projectId: "reconstruction-inc",
    storageBucket: "reconstruction-inc.appspot.com",
    messagingSenderId: "1072545534960"
  };
  firebase.initializeApp(config);

var checking;

var CS188_data = firebase.database().ref('Class/CS188/Assignment');
var ENGR185_data = firebase.database().ref('Class/ENGR185/Assignment');
var ECE102_data = firebase.database().ref('Class/ECE102/Assignment');

var classID = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
		//		  0          1          2			3			4 		    5 			6
var dailyLine = [1,         1,         1,           1,          1,           1,           1];

$( document ).ready(function() {


			var num;

			CS188_data.on('child_added', function(snapshot) {
					
					num = (snapshot.key-120318) / 100;
				
					document.getElementById(classID[num]).children[dailyLine[num]].innerHTML = "[CS188]".fontcolor("black")+"["+snapshot.key.fontcolor("red")+"]";
						dailyLine[num] += 1; 
					document.getElementById(classID[num]).children[dailyLine[num]].innerHTML = snapshot.val().fontcolor("black");
						dailyLine[num] += 1;
					
			});

	
			ENGR185_data.on('child_added', function(snapshot) {
					
					num = (snapshot.key-120318) / 100;
			
					document.getElementById(classID[num]).children[dailyLine[num]].innerHTML = "[ENGR185]".fontcolor("black")+"["+ snapshot.key.fontcolor("red") +"]";
						dailyLine[num] += 1; 
					document.getElementById(classID[num]).children[dailyLine[num]].innerHTML = snapshot.val().fontcolor("black");
						dailyLine[num] += 1;
					
			});



				ECE102_data.on('child_added', function(snapshot) {
					
					num = (snapshot.key-120318) / 100;
		
					document.getElementById(classID[num]).children[dailyLine[num]].innerHTML = "[ECE102]".fontcolor("black")+"[" + snapshot.key.fontcolor("red") +"]";
						dailyLine[num] += 1; 
					document.getElementById(classID[num]).children[dailyLine[num]].innerHTML = snapshot.val().fontcolor("black");
						dailyLine[num] += 1;
					
			});

				

				document.getElementById(classID[0]).children[9].innerHTML
		
});


