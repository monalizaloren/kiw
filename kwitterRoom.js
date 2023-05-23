  // Inicialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyCfd8rzCVi6S6xgbyr67Eq-69_IgO1ppqk",
    authDomain: "kiwitter-23fa5.firebaseapp.com",
    databaseURL: "https://kiwitter-23fa5-default-rtdb.firebaseio.com",
    projectId: "kiwitter-23fa5",
    storageBucket: "kiwitter-23fa5.appspot.com",
    messagingSenderId: "497280174569",
    appId: "1:497280174569:web:f895eee643eb1022352378",
    measurementId: "G-9NK8ZWR2ZY"
  };
firebase.initializeApp(firebaseConfig)
   //Utilize o código 'getItem' para pegar um item dentro do localStorage
   userName = localStorage.getItem("userName");
   userName = localStorage.getItem("userName");
  //Utilize o código 'innerHTML' para mudar o conteúdo HTML
  //Utilize a variável que guarda o nome do usuário
  document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("roomName").value;
  //Coloque o nome da variável que guardará o nome da sala
    firebase.database().ref("/").child(roomName).update({
      purpose : "adicionar sala"
    });
  
      localStorage.setItem("roomName", roomName);
      //Código que muda de tela
      window.location = "kwitter_page.html";
  }
  
  //Função para obter dados do firebase
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {

    localStorage.setItem("roomName", name);
    //Código que troca de tela
      window.location = "kwitter_page.html";
  }
  
  function logout() {
    // Utilize o código 'removeItem' para remove o usuário e sala
  localStorage.removeItem("userName");
  localStorage.removeItem("roomName");
  //Utilize o código que troca de tela
      window.location = "index.html";
  }
  
