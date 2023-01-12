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
    room_name = localStorage.getItem("room_name");

    function send()
      {
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
        });

        document.getElementById("msg").value = "";
      }

      function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
