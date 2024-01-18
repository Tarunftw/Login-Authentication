function login() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username == "admin" && password == "admin")
     {
      alert("Login successful!");
    }
    else if (username == "tarun@gmail.com" && password == "developer")
     {
        alert("Login successful!");
      }
    else
     {
      alert("Invalid username or password.");
    }
    
  }
  
