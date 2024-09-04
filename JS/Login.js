function home(){
    location.replace("home.html");
}

function Login() {
    var User_Name = document.getElementById("user_name").value;
    localStorage.setItem("User_Name", User_Name);
    console.log(User_Name);
    
    //location.replace("youtube.com");
    //window.location.assign('home.html');
    //document.close("index.html");
    open("home.html");
}

if( may_continue )
setTimeout(home(), 2000);