var graph = { 
    nodes: [
        {id: 1, name: "A"}, 
        {id: 2, name: "B"},
        {id: 3, name: "C"},
        {id: 4, name: "D"},
        {id: 5, name: "E"},
        {id: 6, name: "F"}
    ],
    links: [
        {source: 1, target: 2},
        {source: 1, target: 3},
        {source: 1, target: 5},
        {source: 2, target: 4},
        {source: 3, target: 2},
        {source: 3, target: 5},
        {source: 4, target: 5},
        {source: 5, target: 6}
    ]
}; 

//console.log(graph)
//start svg: 
var width = 2000; 
var height = 800; 
var svg = d3.select("#dfs_visualize")
    .append("svg")
    .attr("width", width)
    .attr("height", height); 

var simulation = d3
    .forceSimulation(graph,node)
    .force(
        "link",
        d3.forceLink(graph,link).id(function(d){
            return d.id
        })   
    )
    .force("charge", d3.forceManyBody().strength(-300))
    .force("charge", d3.forceCenter(width/2, height/2));

var link = svg 
    .append("g")
    .selectAll("line")
    .data(graph.links)
    .enter()
    .append("line")
    .attr("stroke-width", function(d){
        return(10)
    })
    .style("stroke", "black");

var node = svg
    .append("g")
    .selectAll("circle")
    .append("title", function(d){ return d.name;})
    .data(graph.nodes)
    .enter()
    .append("circle")
    .style("stroke", "blue")
    .style("fill", "blue")
    .attr("r", 30)
    .attr("cx", function(d){return 50 +(d.id*80);})
    .attr("cy", function(d){return 50 +(d.id*80);}); 
    


