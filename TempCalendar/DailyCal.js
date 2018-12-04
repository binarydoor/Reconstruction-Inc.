 var config = {
    apiKey: "AIzaSyDiszQtqQ82up58DVKGwwSlRYaiFTQzEsk",
    authDomain: "reconstruction-inc.firebaseapp.com",
    databaseURL: "https://reconstruction-inc.firebaseio.com",
    projectId: "reconstruction-inc",
    storageBucket: "reconstruction-inc.appspot.com",
    messagingSenderId: "1072545534960"
  };
  firebase.initializeApp(config);

$(document).ready(function(){
	var rootRef = firebase.database().ref('Class');
	var cs188_data = firebase.database().ref('Class/CS188/Assignment');
	var engr185_data = firebase.database().ref('Class/ENGR185/Assignment');
	var ece102_data = firebase.database().ref('Class/ECE102/Assignment');

	cs188_data.on('child_added', function(snapshot){
		document.getElementById('HW1').innerHTML = snapshot.val();
	});

	engr185_data.on('child_added', function(snapshot){
		document.getElementById('HW2').innerHTML = snapshot.val();
	});

	ece102_data.on('child_added', function(snapshot){
		document.getElementById('HW3').innerHTML = snapshot.val();
	})

});