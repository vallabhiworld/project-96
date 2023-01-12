const firebaseConfig = {
      apiKey: "AIzaSyBIfEmMfDvCX0fDZtxRKfi4J56LskA9uTE",
      authDomain: "kwitter-4dcf4.firebaseapp.com",
      databaseURL: "https://kwitter-4dcf4-default-rtdb.firebaseio.com",
      projectId: "kwitter-4dcf4",
      storageBucket: "kwitter-4dcf4.appspot.com",
      messagingSenderId: "205711576817",
      appId: "1:205711576817:web:6636106236f5e48b5ca350",
      measurementId: "G-0FK4PF8QCS"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

    function addRoom()
    {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class= 'room_name' id = "+Room_names+" onclick= 'redirectToRoomName(this.id)'>*" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
            //End code
            });});}
      getData();
      
      function redirectToRoomName(name)
      {
            console.log(name);
            localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";
      }
      
      

