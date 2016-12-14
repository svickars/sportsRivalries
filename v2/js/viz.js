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





// ---------THE INFO BOX---------
var introDown = false;
var down = d3.select(".title").append("div").attr("id", "down").style("display", "inline-block");
down.html('<div class="down"><span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span></div>');

var introHeight = document.getElementById("intro").offsetHeight;

var downStart = "rotate(0deg)";
var downEnd = "rotate(180deg)";
var downBetween = d3.interpolateString(downStart, downEnd);
var upBetween = d3.interpolateString(downEnd, downStart);

var intro = d3.select(".intro");
intro.style("top", (-introHeight) + "px");

down.on("click", function(d) {
    if (introDown == false){
        showIntro();
    }else{
        hideIntro();
    }
});

d3.select("#lCFLname").on("mouseover", function(d) {
                        leagueNameHover(".cfl");
                      })
                      .on("mouseout", function(d) {
                          leagueNameHoverExit();
                      });
d3.select("#lMLBname").on("mouseover", function(d) {
                        leagueNameHover(".mlb");
                      })
                      .on("mouseout", function(d) {
                          leagueNameHoverExit();
                      });
d3.select("#lMLSname").on("mouseover", function(d) {
                        leagueNameHover(".mls");
                      })
                      .on("mouseout", function(d) {
                          leagueNameHoverExit();
                      });
d3.select("#lNBAname").on("mouseover", function(d) {
                        leagueNameHover(".nba");
                      })
                      .on("mouseout", function(d) {
                          leagueNameHoverExit();
                      });
d3.select("#lNFLname").on("mouseover", function(d) {
                        leagueNameHover(".nfl");
                      })
                      .on("mouseout", function(d) {
                          leagueNameHoverExit();
                      });
d3.select("#lNHLname").on("mouseover", function(d) {
                        leagueNameHover(".nhl");
                      })
                      .on("mouseout", function(d) {
                          leagueNameHoverExit();
                      });
                      
d3.select("#tTerr").on("mouseover", function(d) {
                        typeHover(".territorial");
                      })
                      .on("mouseout", function(d) {
                          typeHoverExit();
                      });
                      
d3.select("#tGeo").on("mouseover", function(d) {
                        typeHover(".territorial");
                      })
                      .on("mouseout", function(d) {
                          typeHoverExit();
                      });                  
d3.select("#tOrig").on("mouseover", function(d) {
                        typeHover(".originalSix");
                      })
                      .on("mouseout", function(d) {
                          typeHoverExit();
                      });                  
d3.select("#tMan").on("mouseover", function(d) {
                        typeHover(".manufactured");
                      })
                      .on("mouseout", function(d) {
                          typeHoverExit();
                      });                  
d3.select("#tPlay").on("mouseover", function(d) {
                        typeHover(".playoff");
                      })
                      .on("mouseout", function(d) {
                          typeHoverExit();
                      });                  
d3.select("#tHis").on("mouseover", function(d) {
                        typeHover(".historical");
                      })
                      .on("mouseout", function(d) {
                          typeHoverExit();
                      });                  
d3.select("#tDiv").on("mouseover", function(d) {
                        typeHover(".divisional");
                      })
                      .on("mouseout", function(d) {
                          typeHoverExit();
                      });   

function typeHover(type) {
    d3.selectAll(".territorial").style("opacity", "0.1");
    d3.selectAll(".geographic").style("opacity", "0.1");
    d3.selectAll(".divisional").style("opacity", "0.1");
    d3.selectAll(".originalSix").style("opacity", "0.1");
    d3.selectAll(".manufactured").style("opacity", "0.1");
    d3.selectAll(".league").style("opacity", "0.1");
    d3.selectAll(".expansion").style("opacity", "0.1");
    d3.selectAll(".brady-manning").style("opacity", "0.1");
    d3.selectAll(".superbowl").style("opacity", "0.1");
    d3.selectAll(".historical").style("opacity", "0.1");
    d3.selectAll(type).style("opacity", "1.0");
}
function typeHoverExit() {
    d3.selectAll(".territorial").style("opacity", "1");
    d3.selectAll(".geographic").style("opacity", "1");
    d3.selectAll(".divisional").style("opacity", "1");
    d3.selectAll(".originalSix").style("opacity", "1");
    d3.selectAll(".manufactured").style("opacity", "1");
    d3.selectAll(".league").style("opacity", "1");
    d3.selectAll(".expansion").style("opacity", "1");
    d3.selectAll(".brady-manning").style("opacity", "1");
    d3.selectAll(".superbowl").style("opacity", "1");
    d3.selectAll(".historical").style("opacity", "1");
}

function leagueNameHover(league) {
    d3.selectAll(".cfl").style("opacity", "0.1");
    d3.selectAll(".mlb").style("opacity", "0.1");
    d3.selectAll(".mls").style("opacity", "0.1");
    d3.selectAll(".nba").style("opacity", "0.1");
    d3.selectAll(".nfl").style("opacity", "0.1");
    d3.selectAll(".nhl").style("opacity", "0.1");
    d3.selectAll(league).style("opacity", "1.0");
}
function leagueNameHoverExit() {
    d3.selectAll(".cfl").style("opacity", "1");
    d3.selectAll(".mlb").style("opacity", "1");
    d3.selectAll(".mls").style("opacity", "1");
    d3.selectAll(".nba").style("opacity", "1");
    d3.selectAll(".nfl").style("opacity", "1");
    d3.selectAll(".nhl").style("opacity", "1");
}
// d3.select(".title").on("click", function(d) {
//     if (introDown == false){
//         showIntro();
//     }else{
//         hideIntro();
//     }
// })

function showIntro() {
    down.transition().ease('sin-in-out')
        .styleTween('transform', function (d) {
        return downBetween;
    });
        
    intro.transition()
         .duration(500)
         .style("top", "75px");
    introDown = true;
};

function hideIntro() {
    down.transition()
        .styleTween('transform', function (d) {
        return upBetween;
    });
    intro.transition()
         .duration(500)
         .style("top", (-introHeight - 75) + "px");
    introDown = false;
}




// ---------THE SET-UP---------
// --sizes--
var w = window.innerWidth;
var h = window.innerHeight;
// var w = 2000;
// var h = 1500;

// --set default modes--
var focus_node = null,
    highlight_node = null,
    text_center = true;

// --set highlight color and transparency--
var highlight_color = "black";
var highlight_trans = 0.1;

// --set up scale by number of wins--
var winScale = d3.scale.linear()
    .domain([0, 1237])
    .range([(w/3), (h*5)]);
var dxScale = d3.scale.linear()
    .domain([0, 1237])
    .range([30, 50]);

// --set up x and y position scales-- 
var yPos = d3.scale.linear()
    .domain([0, 1500])
    .range([-75, h-75+100]);
var xPos = d3.scale.linear()
    .domain([0, 1500])
    .range([-75, w+100]);

// --set up force layout--
var force = d3.layout.force()
    .linkDistance(60)
    .charge(-300)
    .size([w, h]);

// --global variables--
var min_zoom = .5;
var max_zoom = 7;
var svg = d3.select("#visualization").append("svg").attr("class", "svg");
var zoom = d3.behavior.zoom().scaleExtent([min_zoom, max_zoom])
var g = svg.append("g");
svg.style("cursor", "move");

// --set options--
var clicked = false;

// --create popup divs--
// var popup = d3.select("svg").append("div").attr("class", "popup");
// popup.style("top", "100px").style("right", "100px").html("test");

var popup = d3.select("#visualization").append("div").attr("class", "popupLink");
var popupLink = d3.select("#visualization").append("div").attr("class", "popupLink");





// ---------THE INFO BOX---------
var instBox = d3.select("#visualization").append("div").attr("class", "instBox");
instBox.html("Hover, click, pan, and zoom");
instBox.style("top", (h - 150) + "px");
instBox.transition().duration(1000).delay(3000).style("opacity", ".25");

instBox.on("mouseover", function(d) {
        instBox.transition().duration(500).style("opacity", ".75");
    })
    .on("mouseout", function(d) {
        instBox.transition().duration(1000).style("opacity", ".25");
    });







// ---------THE VIZZY---------

d3.json("js/data.json", function(error, graph) {
    
    // convert to numbers
    // console.log(graph);

    var linkedByIndex = {};
    graph.links.forEach(function(d) {
        linkedByIndex[d.source + "," + d.target] = true;
    });

    function isConnected(a, b) {
        return linkedByIndex[a.index + "," + b.index] || linkedByIndex[b.index + "," + a.index] || a.index == b.index;
    }

    // function hasConnections(a) {
    //     for (var property in linkedByIndex) {
    //         s = property.split(",");
    //         if ((s[0] == a.index || s[1] == a.index) && linkedByIndex[property]) return true;
    //     }
    //     return false;
    // }

    force.nodes(graph.nodes)
        .links(graph.links)
        .start();

    // create links
    var link = g.selectAll(".link")
        .data(graph.links)
        .enter().append("path")
        .attr("d", function(d) {
            var x1 = xPos(parseFloat(d.source.illX));
            var y1 = yPos(parseFloat(d.source.illY));
            var x2 = xPos(parseFloat(d.target.illX));
            var y2 = yPos(parseFloat(d.target.illY));
            
            return 'M ' + x1 + ' ' + y1 + ' L ' + x2 + ' ' + y2})
        .attr("id", function(d) {
            return d.id;
        })
        .attr("class", function(d) {
            return d.class + " " + d.source.rivalryType;
        })
        .style("stroke", function(d) {
            return d.colour;
        });

    // create nodes
    var node = g.selectAll(".node")
        .data(graph.nodes)
        .enter().append("g")
        .attr("id", function(d) {
            return d.bothTeams;
        })
        .attr("class", function(d) {
            return 'node ' + d.class + ' ' + d.rivalryType;
        })
        .style("stroke", function(d) {
            return d.colour;
        })
        .call(force.drag);

    // what do to on double click - zoom it!
    node.on("dblclick.zoom", function(d) {
        d3.event.stopPropagation();
        var dcx = (window.innerWidth / 2 - d.x * zoom.scale());
        var dcy = (window.innerHeight / 2 - d.y * zoom.scale());
        zoom.translate([dcx, dcy]);
        g.attr("transform", "translate(" + dcx + "," + dcy + ")scale(" + zoom.scale() + ")");
    });

    // size the nodes
    var circle = node.append("path")
        .attr("d", d3.svg.symbol()
            .size(function(d) {
                return winScale(parseFloat(d.wins));
            })
            .type(function(d) {
                return d.type;
            }))
        .attr("id", function(d) {
            return d.bothTeams
        });
    
    var edgelabelsBG = g.selectAll(".edgelabelBG")
        .data(graph.links)
        .enter()
        .append("text")
        .style("pointer-events", "none")
        .attr({'class':function(d){return 'edlabelBG edgelabel '+d.source.bothTeams+' '+d.target.bothTeams+' '+d.source.leagueLower+' '+d.source.rivalryType},
               'id':function(d,i){return 'edgelabel-'+d.id},
               'dx':function(d){ 
                    var x1 = xPos(parseFloat(d.source.illX));
                    var y1 = yPos(parseFloat(d.source.illY));
                    var x2 = xPos(parseFloat(d.target.illX));
                    var y2 = yPos(parseFloat(d.target.illY));
                    var hyp = Math.sqrt((Math.pow((x2 - x1), 2) + (Math.pow((y2 - y1), 2))));
                    return hyp/2;
               },
               'dy':'.3em',
               'font-size':'6px',
               'font-style': 'italic',
               'text-anchor': 'middle',
               'fill':'#fff',
                'stroke':'rgba(255,255,255,.8)'
        });
    
    var edgelabels = g.selectAll(".edgelabelM")
        .data(graph.links)
        .enter()
        .append("text")
        .style("pointer-events", "none")
        .attr({'class':function(d){return 'edgelabelM edgelabel '+d.source.bothTeams+' '+d.target.bothTeams+' '+d.source.leagueLower+' '+d.source.rivalryType},
               'id':function(d,i){return 'edgelabel-'+d.id},
               'dx':function(d){ 
                    var x1 = xPos(parseFloat(d.source.illX));
                    var y1 = yPos(parseFloat(d.source.illY));
                    var x2 = xPos(parseFloat(d.target.illX));
                    var y2 = yPos(parseFloat(d.target.illY));
                    var hyp = Math.sqrt((Math.pow((x2 - x1), 2) + (Math.pow((y2 - y1), 2))));
                    return hyp/2;
               },
               'dy':'.3em',
               'font-size':'6px',
               'font-style':'italic',
               'text-anchor': 'middle',
               'fill':function(d) {
                   return d.colour;
               }});
    
    var edgelabelsWBG = g.selectAll(".edgelabelWBG")
        .data(graph.links)
        .enter()
        .append("text")
        .style("pointer-events", "none")
        .attr({'class':function(d){ return 'edlabelWBG edgelabel '+d.source.bothTeams+' '+d.target.bothTeams+' '+d.source.leagueLower+' '+d.source.rivalryType},
               'id':function(d,i){return 'edgelabel-'+d.id},
               'dx':function(d) {
                   return dxScale(d.source.wins);
               },
               'dy':'.3em',
               'font-size':'5px',
               'font-style':'italic',
               'text-anchor': 'middle',
               'stroke':'rgba(255,255,255,.8)',
               'fill':function(d) {
                   return d.colour;
               }});
    
    var edgelabelsLBG = g.selectAll(".edgelabelLBG")
        .data(graph.links)
        .enter()
        .append("text")
        .style("pointer-events", "none")
        .attr({'class':function(d){ return 'edlabelLBG edgelabel '+d.source.bothTeams+' '+d.target.bothTeams+' '+d.source.leagueLower+' '+d.source.rivalryType},
               'id':function(d,i){return 'edgelabel-'+d.id},
               'dx':function(d) {
                   var x1 = xPos(parseFloat(d.source.illX));
                    var y1 = yPos(parseFloat(d.source.illY));
                    var x2 = xPos(parseFloat(d.target.illX));
                    var y2 = yPos(parseFloat(d.target.illY));
                    var hyp = Math.sqrt((Math.pow((x2 - x1), 2) + (Math.pow((y2 - y1), 2))));
                    return (hyp) - dxScale(d.target.wins);
               },
               'dy':'.3em',
               'font-size':'5px',
               'font-style':'italic',
               'text-anchor': 'middle',
               'stroke':'rgba(255,255,255,.8)',
               'fill':function(d) {
                   return d.colour;
               }});
    
    var edgelabelsW = g.selectAll(".edgelabelW")
        .data(graph.links)
        .enter()
        .append("text")
        .style("pointer-events", "none")
        .attr({'class':function(d){return 'edlabelW edgelabel '+d.source.bothTeams+' '+d.target.bothTeams+' '+d.source.leagueLower+' '+d.source.rivalryType},
               'id':function(d,i){return 'edgelabel-'+d.id},
               'dx':function(d) {
                   return dxScale(d.source.wins);
               },
               'dy':'.3em',
               'font-size':'5px',
               'font-style':'italic',
               'text-anchor': 'middle',
               'fill':function(d) {
                   return d.colour;
               }});
    
    var edgelabelsL = g.selectAll(".edgelabelL")
        .data(graph.links)
        .enter()
        .append("text")
        .style("pointer-events", "none")
        .attr({'class':function(d){return 'edlabelL edgelabel '+d.source.bothTeams+' '+d.target.bothTeams+' '+d.source.leagueLower+' '+d.source.rivalryType},
               'id':function(d,i){return 'edgelabel-'+d.id},
               'dx':function(d) {
                   var x1 = xPos(parseFloat(d.source.illX));
                    var y1 = yPos(parseFloat(d.source.illY));
                    var x2 = xPos(parseFloat(d.target.illX));
                    var y2 = yPos(parseFloat(d.target.illY));
                    var hyp = Math.sqrt((Math.pow((x2 - x1), 2) + (Math.pow((y2 - y1), 2))));
                    return (hyp) - dxScale(d.target.wins);
               },
               'dy':'.3em',
               'font-size':'5px',
               'font-style':'italic',
               'text-anchor': 'middle',
               'fill':function(d) {
                   return d.colour;
               }});
   
    edgelabelsBG.append('textPath')
        .attr('xlink:href',function(d,i) {return '#' + d.id})
        .style("pointer-events", "none")
        .text(function(d) { return d.label});
    
    edgelabels.append('textPath')
        .attr('xlink:href',function(d,i) {return '#' + d.id})
        .style("pointer-events", "none")
        .text(function(d) { return d.label});
    
    edgelabelsWBG.append('textPath')
        .attr('xlink:href',function(d,i) {return '#' + d.id})
        .style("pointer-events", "none")
        .text(function(d) { return d.source.wins + "w"});
        
    edgelabelsLBG.append('textPath')
        .attr('xlink:href',function(d,i) {return '#' + d.id})
        .style("pointer-events", "none")
        .text(function(d) { return d.target.wins + "w"});
    
    edgelabelsW.append('textPath')
        .attr('xlink:href',function(d,i) {return '#' + d.id})
        .style("pointer-events", "none")
        .text(function(d) { return d.source.wins + "w"});
        
    edgelabelsL.append('textPath')
        .attr('xlink:href',function(d,i) {return '#' + d.id})
        .style("pointer-events", "none")
        .text(function(d) { return d.target.wins + "w"});

    
    
    var nodeLabelsCBG = g.selectAll(".nodeLabelsCBG")
        .data(graph.labels)
        .enter()
        .append("text")
        .style("pointer-events", "none")
        .attr({'class':function(d){return 'nodeLabelsCBG nodeLabels ' + d.class+' '+d.rivalryType},
              'id':function(d){return 'nodeLabels-' + d.teamSmall},
              'x': function(d){return xPos(parseFloat(d.illX))},
              'y': function(d){return yPos(parseFloat(d.illY))},
              'dy':'0em',
              'text-anchor': 'middle',
              'stroke': 'rgba(255,255,255,.8)',
              'stroke-width': '2px'
        })
        .text(function(d) {return d.teamLocation});
    
     var nodeLabelsNBG = g.selectAll(".nodeLabelsNBG")
        .data(graph.labels)
        .enter()
        .append("text")
        .style("pointer-events", "none")
        .attr({'class':function(d){return 'nodeLabelsNBG nodeLabels ' + d.class+' '+d.rivalryType},
              'id':function(d){return 'nodeLabels-' + d.teamSmall},
              'x': function(d){return xPos(parseFloat(d.illX))},
              'y': function(d){return yPos(parseFloat(d.illY))},
              'dy':'.8em',
              'text-anchor': 'middle',
              'stroke': 'rgba(255,255,255,.8)',
              'stroke-width': '2px'
        })
        .text(function(d) {return d.teamName});
        
    var nodeLabelsC = g.selectAll(".nodeLabelsC")
        .data(graph.labels)
        .enter()
        .append("text")
        .style("pointer-events", "none")
        .attr({'class':function(d){return 'nodeLabelsC nodeLabels ' + d.class+' '+d.rivalryType},
              'id':function(d){return 'nodeLabels-' + d.teamSmall},
              'x': function(d){return xPos(parseFloat(d.illX))},
              'y': function(d){return yPos(parseFloat(d.illY))},
              'dy':'0em',
              'text-anchor': 'middle',
              'stroke': 'none'
        })
        .text(function(d) {return d.teamLocation});
    
    var nodeLabelsN = g.selectAll(".nodeLabelsN")
        .data(graph.labels)
        .enter()
        .append("text")
        .style("pointer-events", "none")
        .attr({'class':function(d){return 'nodeLabelsN nodeLabels ' + d.class+' '+d.rivalryType},
              'id':function(d){return 'nodeLabels-' + d.teamSmall},
              'x': function(d){return xPos(parseFloat(d.illX))},
              'y': function(d){return yPos(parseFloat(d.illY))},
              'dy':'.8em',
              'text-anchor': 'middle',
              'stroke': 'none'
        })
        .text(function(d) {return d.teamName});
    

    // node interaction
    node.on("mouseover", function(d) {
            if (clicked == false) {
                set_highlight(d);
            }
        })
        .on("click", function(d) {
            if (clicked == false) {
                nodePop(d);
                set_highlight(d);
            }else{
                popOut();
            }
        })
        .on("mouseout", function(d) {
            if (clicked == false) {
                exit_highlight();
            }
        });
        
    link.on("mouseover", function(d) {
            if (clicked == false){
                set_highlightLink(d);
            }
        })
        .on("click", function(d) {
            if (clicked == false){
                linkPop(d);
            }else{
                linkPopOut();
            }
        })
        .on("mouseout", function(d) {
            if (clicked == false){
                exit_highlightLink(d);
            }
        });

    // ----THE POPUPS----
    function nodePop(d) {
        clicked = true;
        popupLink.style("display", "block")
            .html("<div class='popupLinkHeader'>    <div class='popupLinkHeaderInner'>"+d.team+" <span id='versus'>vs</span> "+d.opponentTeam+"</div></div><div class='popupLinkBottom'>    <div class='linkColours'>        <div class='coloursLeft'>            <div class='cLeft'>                <div class='linkColoursSourceOne'></div>                <div class='linkColoursSourceTwo'></div>                <div class='linkColoursSourceThree'></div>            </div>        </div>        <div class='coloursRight'>            <div class='cRight'>                <div class='linkColoursTargetOne'></div>                <div class='linkColoursTargetTwo'></div>                <div class='linkColoursTargetThree'></div>            </div>        </div>    </div>    <div class='popupLinkTitle'>"+d.rivalryType+" Rivalry<br>"+d.rivalryName+"</div>   <div class='popupLinkStats'><div class='statsLeft'>"+d.gamesPlayed+"<div class='sL' id='sGPL'></div></div>        <div class='statsCenter'>GP</div>        <div class='statsRight'><div class='sR' id='sGPR'></div>"+d.gamesPlayed+"</div><div class='statsLeft'>"+d.wins+"<div class='sL' id='sWL'></div></div>        <div class='statsCenter'>W</div>        <div class='statsRight'><div class='sR' id='sWR'></div>"+d.oWins+"</div><div class='statsLeft'>"+d.ties+"<div class='sL' id='sTL'></div></div>        <div class='statsCenter'>T</div>        <div class='statsRight'><div class='sR' id='sTR'></div>"+d.oTies+"</div><div class='statsLeft'>"+d.losses+"<div class='sL' id='sLL'></div></div>        <div class='statsCenter'>L</div>        <div class='statsRight'><div class='sR' id='sLR'></div>"+d.oLosses+"</div><div class='statsLeft'>"+d.otLosses+"<div class='sL' id='sOTLL'></div></div>        <div class='statsCenter'>OTL</div>        <div class='statsRight'><div class='sR' id='sOTLR'></div>"+d.oOtLosses+"</div><div class='statsLeft'>"+d.for+"<div class='sL' id='sFL'></div></div>        <div class='statsCenter'>+</div>        <div class='statsRight'><div class='sR' id='sFR'></div>"+d.oFor+"</div><div class='statsLeft'>"+d.against+"<div class='sL' id='sAL'></div></div>        <div class='statsCenter'>-</div>        <div class='statsRight'><div class='sR' id='sAR'></div>"+d.oAgainst+"</div>    </div>    <div class='popupLinkP'><p>"+d.rivalryNotes+"</p>    </div><div class='popupLinkFootnote'>Text automatically generated from Wikipedia. Problems? <a href='mailto:sam.vickars@gmail.com'>Let me know!</a></div></div>");
            
        // for (var i=0; i<d.info.length; i++) {
        //     var pOppData = d.info;
            
        //     var pOpp = d3.select(".pInfo").append("div").attr("class", "pOpp").attr("id", "pOpp-" + d.info[i].opponentWins);
        //     pOpp.html("vs. <span class='pOppOpp pOppOpp-"+d.info[i].opponentWins+"'>" + d.info[i].opponent + "</span> (<strong>" + d.info[i].wins + "</strong>W <strong>" + d.info[i].losses + "</strong>L)");
            
        //     d3.select("#pOpp-"+d.info[i].opponentWins).on("mouseover", function(d) {
        //         pOppOver(d, i);
        //     });
        // }
        
        d3.select("#sGPL").style("width", ((100) * .5) +"%");
        d3.select("#sGPR").style("width", ((100) * .5) +"%");
        d3.select("#sWL").style("width", ((d.wins / d.gamesPlayed) * 100*1.5) +"%");
        d3.select("#sWR").style("width", ((d.oWins / d.gamesPlayed) * 100*1.5) +"%");
        d3.select("#sTL").style("width", ((d.ties / d.gamesPlayed) * 100*1.5) +"%");
        d3.select("#sTR").style("width", ((d.oTies / d.gamesPlayed) * 100*1.5) +"%");
        d3.select("#sLL").style("width", ((d.losses / d.gamesPlayed) * 100*1.5) +"%");
        d3.select("#sLR").style("width", ((d.oLosses / d.gamesPlayed) * 100*1.5) +"%");
        d3.select("#sOTLL").style("width", ((d.otLosses / d.gamesPlayed) * 100*1.5) +"%");
        d3.select("#sOTLR").style("width", ((d.oOtLosses / d.gamesPlayed) * 100*1.5) +"%");
        d3.select("#sFL").style("width", (d.for / ((parseFloat(d.for)+parseFloat(d.against))) * 100*1.5) +"%");
        d3.select("#sFR").style("width", (d.oFor / ((parseFloat(d.for)+parseFloat(d.against))) * 100*1.5) +"%");
        d3.select("#sAL").style("width", (d.against / ((parseFloat(d.for)+parseFloat(d.against))) * 100*1.5) +"%");
        d3.select("#sAR").style("width", (d.oAgainst / ((parseFloat(d.for)+parseFloat(d.against))) * 100*1.5) +"%");
        
        d3.selectAll(".sL").style("background-color", d.cBack);
        d3.selectAll(".sR").style("background-color", d.ocBack);
        
        // d3.select(".cLeft").style("width", ((d.wins / d.gamesPlayed) * 100*1.5) + "%");
        // d3.select(".cRight").style("width", ((d.oWins / d.gamesPlayed) * 100*1.5) + "%");
        d3.select(".linkColoursSourceOne").style("background-color", d.cBack);
        d3.select(".linkColoursSourceTwo").style("background-color", d.cOutline);
        d3.select(".linkColoursSourceThree").style("background-color", d.cText);
        d3.select(".linkColoursTargetOne").style("background-color", d.ocText);
        d3.select(".linkColoursTargetTwo").style("background-color", d.ocOutline);
        d3.select(".linkColoursTargetThree").style("background-color", d.ocBack);
        
        function pOppOver(d) {
            // console.log(d);
        }
        
        d3.select(".pHeader").style("background-color", d.cBack);
        d3.select(".pHeader").style("color", d.cText);
        d3.select(".pOut").style("border-color", d.cOutline);
        d3.select(".pInfo").style("border", "3px solid " + d.cBack);
    }
    
    function linkPop(d) {
        clicked = true;
        popupLink.style("display", "block")
            .html("<div class='popupLinkHeader'>    <div class='popupLinkHeaderInner'>"+d.source.team+" <span id='versus'>vs</span> "+d.source.opponentTeam+"</div></div><div class='popupLinkBottom'>    <div class='linkColours'>        <div class='coloursLeft'>            <div class='cLeft'>                <div class='linkColoursSourceOne'></div>                <div class='linkColoursSourceTwo'></div>                <div class='linkColoursSourceThree'></div>            </div>        </div>        <div class='coloursRight'>            <div class='cRight'>                <div class='linkColoursTargetOne'></div>                <div class='linkColoursTargetTwo'></div>                <div class='linkColoursTargetThree'></div>            </div>        </div>    </div>    <div class='popupLinkTitle'>"+d.source.rivalryType+" Rivalry<br>"+d.source.rivalryName+"</div>    <div class='popupLinkStats'>        <div class='statsLeft'>"+d.source.gamesPlayed+"            <div class='sL' id='sGPL'></div>        </div>        <div class='statsCenter'>GP</div>        <div class='statsRight'>            <div class='sR' id='sGPR'></div>"+d.source.gamesPlayed+"</div>        <div class='statsLeft'>"+d.source.wins+"            <div class='sL' id='sWL'></div>        </div>        <div class='statsCenter'>W</div>        <div class='statsRight'>            <div class='sR' id='sWR'></div>"+d.source.oWins+"</div>        <div class='statsLeft'>"+d.source.ties+"            <div class='sL' id='sTL'></div>        </div>        <div class='statsCenter'>T</div>        <div class='statsRight'>            <div class='sR' id='sTR'></div>"+d.source.oTies+"</div>        <div class='statsLeft'>"+d.source.losses+"            <div class='sL' id='sLL'></div>        </div>        <div class='statsCenter'>L</div>        <div class='statsRight'>            <div class='sR' id='sLR'></div>"+d.source.oLosses+"</div>        <div class='statsLeft'>"+d.source.otLosses+"            <div class='sL' id='sOTLL'></div>        </div>        <div class='statsCenter'>OTL</div>        <div class='statsRight'>            <div class='sR' id='sOTLR'></div>"+d.source.oOtLosses+"</div>        <div class='statsLeft'>"+d.source.for+"            <div class='sL' id='sFL'></div>        </div>        <div class='statsCenter'>+</div>        <div class='statsRight'>            <div class='sR' id='sFR'></div>"+d.source.oFor+"</div>        <div class='statsLeft'>"+d.source.against+"            <div class='sL' id='sAL'></div>        </div>        <div class='statsCenter'>-</div>        <div class='statsRight'>            <div class='sR' id='sAR'></div>"+d.source.oAgainst+"</div>    </div>    <div class='popupLinkP'>        <p>"+d.source.rivalryNotes+"</p>    </div>    <div class='popupLinkFootnote'>Text automatically generated from Wikipedia. Problems? <a href='mailto:sam.vickars@gmail.com'>Let me know!</a></div></div>");
            
        
        d3.select("#sGPL").style("width", ((100) * .5) +"%");
        d3.select("#sGPR").style("width", ((100) * .5) +"%");
        d3.select("#sWL").style("width", ((d.source.wins / d.source.gamesPlayed) * 100*1.5) +"%");
        d3.select("#sWR").style("width", ((d.source.oWins / d.source.gamesPlayed) * 100*1.5) +"%");
        d3.select("#sTL").style("width", ((d.source.ties / d.source.gamesPlayed) * 100*1.5) +"%");
        d3.select("#sTR").style("width", ((d.source.oTies / d.source.gamesPlayed) * 100*1.5) +"%");
        d3.select("#sLL").style("width", ((d.source.losses / d.source.gamesPlayed) * 100*1.5) +"%");
        d3.select("#sLR").style("width", ((d.source.oLosses / d.source.gamesPlayed) * 100*1.5) +"%");
        d3.select("#sOTLL").style("width", ((d.source.otLosses / d.source.gamesPlayed) * 100*1.5) +"%");
        d3.select("#sOTLR").style("width", ((d.source.oOtLosses / d.source.gamesPlayed) * 100*1.5) +"%");
        d3.select("#sFL").style("width", (d.source.for / ((parseFloat(d.source.for)+parseFloat(d.source.against))) * 100*1.5) +"%");
        d3.select("#sFR").style("width", (d.source.oFor / ((parseFloat(d.source.for)+parseFloat(d.source.against))) * 100*1.5) +"%");
        d3.select("#sAL").style("width", (d.source.against / ((parseFloat(d.source.for)+parseFloat(d.source.against))) * 100*1.5) +"%");
        d3.select("#sAR").style("width", (d.source.oAgainst / ((parseFloat(d.source.for)+parseFloat(d.source.against))) * 100*1.5) +"%");
        
        d3.selectAll(".sL").style("background-color", d.source.cBack);
        d3.selectAll(".sR").style("background-color", d.source.ocBack);
        
        // d3.select(".cLeft").style("width", ((d.source.wins / d.source.gamesPlayed) * 100*1.5) + "%");
        // d3.select(".cRight").style("width", ((d.target.wins / d.target.gamesPlayed) * 100*1.5) + "%");
        d3.select(".linkColoursSourceOne").style("background-color", d.source.cBack);
        d3.select(".linkColoursSourceTwo").style("background-color", d.source.cOutline);
        d3.select(".linkColoursSourceThree").style("background-color", d.source.cText);
        d3.select(".linkColoursTargetOne").style("background-color", d.target.cText);
        d3.select(".linkColoursTargetTwo").style("background-color", d.target.cOutline);
        d3.select(".linkColoursTargetThree").style("background-color", d.target.cBack);
    }
    
    
    function popOut() {
        clicked = false;
        popupLink.style("display", "none");
    }
    
    function linkPopOut() {
        clicked = false;
        popupLink.style("display", "none");
    }

    // ----THE MOUSE----
    // --mouseover--
    function label_highlight(d) {
        console.log("hi");
    }
    function set_highlightLink(d) {
        svg.style("cursor", "pointer");
        d3.selectAll(".node").transition().duration(300).style("opacity", 0.1);
        d3.selectAll(".link").transition().duration(300).style("opacity", 0.1);
        circle.transition().duration(300).style("opacity", 0.1);
        d3.selectAll(".edgelabel").style("opacity", "0.1");
        d3.selectAll(".nodeLabels").style("opacity", "0.1");
        d3.selectAll("#" + d.source.bothTeams).style("opacity", 1.0);
        d3.selectAll("#" + d.target.bothTeams).style("opacity", 1.0);
        d3.selectAll("#edgelabel-" + d.id).style("opacity", "1.0");
        d3.selectAll("#nodeLabels-" + d.source.teamSmall).style("opacity", "1.0");
        d3.selectAll("#nodeLabels-" + d.target.teamSmall).style("opacity", "1.0");
    }
    function exit_highlightLink() {
        svg.style("cursor", "move");
        d3.selectAll(".edgelabel").style("opacity", "1.0");
        d3.selectAll(".nodeLabels").style("opacity", "1.0");
        d3.selectAll(".node").transition().duration(300).style("opacity", 1.0);
        d3.selectAll(".link").transition().duration(300).style("opacity", 1.0);
        circle.transition().duration(300).style("opacity", 1.0);
        link.transition().duration(300).style("opacity", 1.0);
    }
    function set_highlight(d) {
        
        svg.style("cursor", "pointer");
        circle.transition().duration(300).style("opacity", function(o) {return isConnected(d, o) ? 1.0 : 0.1 ;});
        link.transition().duration(300).style("opacity", function(o) {return o.source.index == d.index || o.target.index == d.index ? 1.0 : 0.1;});
        d3.selectAll(".edgelabel").style("opacity", "0.1");
        d3.selectAll(".nodeLabels").style("opacity", "0.1");
        d3.selectAll("#edgelabel-" + d.bothTeams).style("opacity", "1.0");
        d3.selectAll("#edgelabel-" + d.bothTeamsBackwards).style("opacity", "1.0");
        d3.selectAll("#nodeLabels-" + d.teamSmall).style("opacity", "1.0");
        d3.selectAll("#nodeLabels-" + d.opponent).style("opacity", "1.0");
    }

    // --mouseout--
    function exit_highlight() {
        svg.style("cursor", "move");
        d3.selectAll(".edgelabel").style("opacity", "1.0");
        d3.selectAll(".nodeLabels").style("opacity", "1.0");
        circle.transition().duration(300).style("opacity", 1.0);
        link.transition().duration(300).style("opacity", 1.0);
    }

    // --zoomskies--
    zoom.on("zoom", function() {
        g.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
    });

    svg.call(zoom);

    resize();
    
    d3.select(window).on("resize", resize);


    //--position nodes---
    force.on("tick", function() {

        node.attr("transform", function(d) {
            return "translate(" + xPos(parseFloat(d.illX)) + "," + yPos(parseFloat(d.illY)) + ")";
        });
        

        link.attr("x1", function(d) {
                return xPos(d.source.illX);
            })
            .attr("y1", function(d) {
                return yPos(d.source.illY);
            })
            .attr("x2", function(d) {
                return xPos(d.target.illX);
            })
            .attr("y2", function(d) {
                return yPos(d.target.illY);
            });

        node.attr("cx", function(d) {
                return d.x;
            })
            .attr("cy", function(d) {
                return d.y;
            });
    });

    function resize() {
        var width = window.innerWidth,
            height = window.innerHeight;
        svg.attr("width", width).attr("height", height);

        force.size([force.size()[0] + (width - w) / zoom.scale(), force.size()[1] + (height - h) / zoom.scale()]).resume();
        w = width;
        h = height;

        // force.size([force.size()[0] + (width - wW) / zoom.scale(), force.size()[1] + (height - wH) / zoom.scale()]).resume();
        // wW = width;
        // wH = height;
    }

});

// ---------UTILITIES---------

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

$(document).ready(function(){
    $('[data-toggle="popover"]').popover(); 
});