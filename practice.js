// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOUIuwVz5ZLH6GRRqQKsnicsZcZzOyhxA",
    authDomain: "project-93-ba969.firebaseapp.com",
    databaseURL: "https://project-93-ba969-default-rtdb.firebaseio.com",
    projectId: "project-93-ba969",
    storageBucket: "project-93-ba969.appspot.com",
    messagingSenderId: "322958567838",
    appId: "1:322958567838:web:ef6a911b20e7351fff4e8f"
  };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    //ADD YOUR FIREBASE LINKS
    
    function addUser() {
    
        username=document.getElementById("user_name").value;
        firebase.database().ref("/").child(username).update({
            Purpose:"addUser"
        });
    
    }