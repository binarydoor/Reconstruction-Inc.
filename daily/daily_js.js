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

//var classID = "Friday";  //120618

$( document ).ready(function() {


			var num = 1;
			var FridayKey = 120718;
			CS188_data.on('child_added', function(snapshot) {

					//alert(snapshot.key + " || " + FridayKey);
				if(snapshot.key == FridayKey)
				{
				
				
					document.getElementById("Friday").children[num].innerHTML = "["+snapshot.key.fontcolor("red")+"]" +  "[CS188] ".fontcolor("black") + snapshot.val().fontcolor("black");
						num += 1; 
					}
			});

	
			ENGR185_data.on('child_added', function(snapshot) {
				if(snapshot.key == FridayKey)
				{
					document.getElementById("Friday").children[num].innerHTML = "["+ snapshot.key.fontcolor("red") +"]"+"[ENGR185] ".fontcolor("black")+snapshot.val().fontcolor("black");
						num += 1; 
				}
			});



				ECE102_data.on('child_added', function(snapshot) {
				if(snapshot.key == FridayKey)
				{
					document.getElementById("Friday").children[num].innerHTML = "[" + snapshot.key.fontcolor("red") +"]" + "[ECE102] ".fontcolor("black") + snapshot.val().fontcolor("black");
						num += 1; 
				
				}
			});

				
		
});


