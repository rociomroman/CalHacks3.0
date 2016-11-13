

// var contact = document.getElementsByClassName("contact");

var mainName = document.getElementById("mainName");
var submitBtn = document.getElementById("submitBtn");

var firebaseHeadingRef = firebase.database().ref().child("Heading");

firebaseHeadingRef.on('value', function(datasnapshot){
  fireHeading.innerText = datasnapshot.val();
});


function submitClick()
{

// window.alert("ok");
  var firebaseRef = firebase.database().ref();

  var messageText = mainText.value;

  firebaseRef.push().set(messageText);

}

