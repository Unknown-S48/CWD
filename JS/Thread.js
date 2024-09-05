document.addEventListener('DOMContentLoaded', function OnOpen(){
    UpdateChat();
});

var chat_log = [
    "Wian : Hello so I found this website that will help with the understanding of...",
    "Wian : Never mind I was joking .. lol"
]; 

function SendMessage(){
    message = document.getElementById("message").value;
    chat_log.push(localStorage.getItem("User_Name") + " : " + message);
    UpdateChat();
}

function UpdateChat(){
    var NewMessage = "";
    for(i = 0; i < chat_log.length; i++){
        NewMessage += chat_log[i] + "<br>";
    }
    document.getElementById("chat_area").innerHTML = NewMessage;
    console.log("Chat was loaded successful");
}