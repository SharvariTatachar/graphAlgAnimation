document.addEventListener("DOMContentLoaded", () =>{
    handleTopNavigation()
})

function handleTopNavigation(){
    var x = document.getElementById("myTopNav"); 
    if (x.className == "topnav"){
        x.className += " responsive"; 
    }
    else{
        x.className = "topnav"; 
    }
}







