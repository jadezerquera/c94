
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyApXCs4d_mtVvercglkD6avdmx30XLLZ8g",
      authDomain: "classtest-7cad1.firebaseapp.com",
      projectId: "classtest-7cad1",
      storageBucket: "classtest-7cad1.appspot.com",
      messagingSenderId: "438919356571",
      appId: "1:438919356571:web:260b94e07379ddf36f263e"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
