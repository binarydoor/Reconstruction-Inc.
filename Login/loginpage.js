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

  var rootRef = firebase.database().ref('user');
  var newKey;

  $('#log').click(function(){
  	var email = ('#uname').val();
  	var paswd = ('#psw').val();

  	rootRef.orderByChild("Email").equalTo(email).on("child_added", function(snapshot){
  		var solution = snapshot.val();
  		if (solution.Password != paswd)
  		{
  			document.getElementById('#wrong_psw').innerHTML = "WRONG PASSWORD!";
  		}
  	}, function(error){
  		console.log("Error: " + error.code);
  		document.getElementById('#wrong_psw').innerHTML = "WRONG EMAIL!";
  	});
  });

});