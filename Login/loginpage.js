
$( document ).ready(function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDiszQtqQ82up58DVKGwwSlRYaiFTQzEsk",
    authDomain: "reconstruction-inc.firebaseapp.com",
    databaseURL: "https://reconstruction-inc.firebaseio.com",
    projectId: "reconstruction-inc",
    storageBucket: "reconstruction-inc.appspot.com",
    messagingSenderId: "1072545534960"
  };
  firebase.initializeApp(config);

  var rootRef = firebase.database().ref('User');
  var newKey;

  $('#log').click(function() {
  	var correctEmail = false;
  	var correctPW = false;

  	var email = $('#uname').val();
  	var paswd = $('#psw').val();

  	rootRef.orderByChild("Emails").equalTo(email).on('value', function(snapshot){
  		if (snapshot.exists() == false){
  			document.getElementById("wrong_psw").innerHTML = "<p>WRONG EMAIL!</p>";
  		}
  		else
  			correctEmail = true;
  	});

  	rootRef.orderByChild("Emails").equalTo(email).on("child_added", function(snapshot){
  		var solution = snapshot.val();
  		if (solution.Passwords != paswd){
  			document.getElementById("wrong_psw").innerHTML = "<p>WRONG PASSWORD!</p>";
  		}
  		else
  			correctPW = true;
  	}, function(error){
  		console.log("ERROR: " + error.code);
  	});

  	if (correctEmail == true && correctPW == true)
  		location.href = "SignUpComp.html";

 	});
});
