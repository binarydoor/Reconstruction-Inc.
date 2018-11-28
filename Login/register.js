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

  $('#signupbtn').click(function(){

    var email = $('#email').val();
    var password = $('#psw').val();

    var newItem = rootRef.push();

    newItem.update({
      Emails: email,
      Passwords: password
    });

  });
  
});