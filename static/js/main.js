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

//creating graph for dfs: 
var dfs_graph = d3.select("#dfs_visualize")
.append("dfs_graph")
    .attr("width",width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
.append("g")
    .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");

d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_network.json", function(data){
    //links: 
    var link = dfs_graph
        .selectAll("line")
        .data(data.links)
        .enter()
        .append("line")
            .style("stroke", "#bbb")
    
    //nodes:
    var node = dfs_graph
        .selectAll("circle")
        .data(data.nodes)
        .enter()
        .append("circle")
            .attr("r", 20)
            .style("fill", "#69b3a2")
}); 


