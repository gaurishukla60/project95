
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyChMVXMKcHSGRaoRQ6q7zoVKT4LZzzv9bE",
      authDomain: "gauri-rmml.firebaseapp.com",
      databaseURL: "https://gauri-rmml-default-rtdb.firebaseio.com",
      projectId: "gauri-rmml",
      storageBucket: "gauri-rmml.appspot.com",
      messagingSenderId: "354121305152",
      appId: "1:354121305152:web:88384ab10ed4fe00cb23a5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";
    function addroom()
    {
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({ 
                purpose : "adding room name" });
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div> <hr> ";
document.getElementById("output").innerHTML +=row;

      //End code
      });});}
getData();
function redirecttoroomname(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}


