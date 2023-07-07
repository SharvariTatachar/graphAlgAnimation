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

var margin = {top: 10, right: 30, bottom: 30, left: 40},
  width = 400 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

//creating graph for dfs from json file: 
import data from './graph.json' assert { type: 'json' }; 
console.log(data)



