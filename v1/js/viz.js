var svg = d3.select("#visualization").append("svg").attr("class", "svg");
var width = document.getElementById("visualization").offsetWidth;
var height = document.getElementById("visualization").offsetHeight;

console.log(width);
console.log(height);

var simulation = d3.forceSimulation()
    .force("charge", d3.forceManyBody().strength(-200))
    .force("link", d3.forceLink().id(function(d) {
        return d.id;
    }).distance(40))
    .force("x", d3.forceX(width / 2))
    .force("y", d3.forceY(height / 2))
    .on("tick", ticked);

var link = svg.selectAll(".link"),
    node = svg.selectAll(".node");





// ---------FILTER BUTTONS---------
// --CFL--
var cflButton = d3.select("#cflButton");
var cflButton2 = d3.select("#cflButton2");
cflButton.on("click", function() {
        d3.select("#cflButton").style("display", "none");
        d3.select("#cflButton2").style("display", "inline-block");
        d3.selectAll(".cfl").style("visibility", "hidden");
});
cflButton2.on("click", function() {
        d3.select("#cflButton2").style("display", "none");
        d3.select("#cflButton").style("display", "inline-block");
        d3.selectAll(".cfl").style("visibility", "visible");
});
// --MLB--
var mlbButton = d3.select("#mlbButton");
var mlbButton2 = d3.select("#mlbButton2");
mlbButton.on("click", function() {
        d3.select("#mlbButton").style("display", "none");
        d3.select("#mlbButton2").style("display", "inline-block");
        d3.selectAll(".mlb").style("visibility", "hidden");
});
mlbButton2.on("click", function() {
        d3.select("#mlbButton2").style("display", "none");
        d3.select("#mlbButton").style("display", "inline-block");
        d3.selectAll(".mlb").style("visibility", "visible");
});
// --MLS--
var mlsButton = d3.select("#mlsButton");
var mlsButton2 = d3.select("#mlsButton2");
mlsButton.on("click", function() {
        d3.select("#mlsButton").style("display", "none");
        d3.select("#mlsButton2").style("display", "inline-block");
        d3.selectAll(".mls").style("visibility", "hidden");
});
mlsButton2.on("click", function() {
        d3.select("#mlsButton2").style("display", "none");
        d3.select("#mlsButton").style("display", "inline-block");
        d3.selectAll(".mls").style("visibility", "visible");
});
// --NBA--
var nbaButton = d3.select("#nbaButton");
var nbaButton2 = d3.select("#nbaButton2");
nbaButton.on("click", function() {
        d3.select("#nbaButton").style("display", "none");
        d3.select("#nbaButton2").style("display", "inline-block");
        d3.selectAll(".nba").style("visibility", "hidden");
});
nbaButton2.on("click", function() {
        d3.select("#nbaButton2").style("display", "none");
        d3.select("#nbaButton").style("display", "inline-block");
        d3.selectAll(".nba").style("visibility", "visible");
});
// --NFL--
var nflButton = d3.select("#nflButton");
var nflButton2 = d3.select("#nflButton2");
nflButton.on("click", function() {
        d3.select("#nflButton").style("display", "none");
        d3.select("#nflButton2").style("display", "inline-block");
        d3.selectAll(".nfl").style("visibility", "hidden");
});
nflButton2.on("click", function() {
        d3.select("#nflButton2").style("display", "none");
        d3.select("#nflButton").style("display", "inline-block");
        d3.selectAll(".nfl").style("visibility", "visible");
});
// --NHL--
var nhlButton = d3.select("#nhlButton");
var nhlButton2 = d3.select("#nhlButton2");
nhlButton.on("click", function() {
        d3.select("#nhlButton").style("display", "none");
        d3.select("#nhlButton2").style("display", "inline-block");
        d3.selectAll(".nhl").style("visibility", "hidden");
});
nhlButton2.on("click", function() {
        d3.select("#nhlButton2").style("display", "none");
        d3.select("#nhlButton").style("display", "inline-block");
        d3.selectAll(".nhl").style("visibility", "visible");
});


d3.json("js/data.json", function(error, graph) {
    if (error) throw error;

    var rScale = d3.scaleLinear()
        .domain([0, 1237])
        .range([6, 40])

    simulation.nodes(graph.nodes);
    simulation.force("link").links(graph.links);

    link = link
        .data(graph.links)
        .enter().append("line")
        .attr("class", function(d) {
            return d.class;
        });

    node = node
        .data(graph.nodes)
        .enter().append("circle")
        .attr("class", function(d) {
            return d.class;
        })
        .attr("id", function(d) {
            return d.team;
        })
        .attr('r', function(d) {
            return rScale(d.wins);
        });
});

function ticked() {
    link.attr("x1", function(d) {
            return d.source.x;
        })
        .attr("y1", function(d) {
            return d.source.y;
        })
        .attr("x2", function(d) {
            return d.target.x;
        })
        .attr("y2", function(d) {
            return d.target.y;
        });

    node.attr("cx", function(d) {
            return d.x;
        })
        .attr("cy", function(d) {
            return d.y;
        });
}