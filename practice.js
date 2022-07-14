
//ADD YOUR FIREBASE LINKS
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

  function addUser()
  {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
  }