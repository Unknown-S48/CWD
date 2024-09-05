document.addEventListener('DOMContentLoaded', function OnOpen(){
    if (document.getElementById("name").innerText == "name"){
        Welcome_Name = "Welcome " + localStorage.getItem("User_Name");
        document.getElementById("name").innerText = Welcome_Name;
        console.log("Name change successful");
        //console.log(User_Name);
    }else{
        console.log("Nothing needed to change.");
    };
});