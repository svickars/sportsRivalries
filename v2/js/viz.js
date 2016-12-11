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

var popup = d3.select("#visualization").append("div").attr("class", "popup");



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

    function hasConnections(a) {
        for (var property in linkedByIndex) {
            s = property.split(",");
            if ((s[0] == a.index || s[1] == a.index) && linkedByIndex[property]) return true;
        }
        return false;
    }

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
            return d.class;
        })
        .style("stroke", function(d) {
            return d.colour;
        });

    // create nodes
    var node = g.selectAll(".node")
        .data(graph.nodes)
        .enter().append("g")
        .attr("id", function(d) {
            return d.id;
        })
        .attr("class", function(d) {
            return d.class;
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
            }));
    
    var edgelabelsBG = g.selectAll(".edgelabelBG")
        .data(graph.links)
        .enter()
        .append("text")
        .style("pointer-events", "none")
        .attr({'class':function(d){return 'edlabelBG edgelabel '+d.source.bothTeams+' '+d.target.bothTeams},
               'id':function(d,i){return 'edgelabelBG-'+d.id},
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
        .attr({'class':function(d){return 'edlabelM edgelabel '+d.source.bothTeams+' '+d.target.bothTeams},
               'id':function(d,i){return 'edgelabelM-'+d.id},
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
        .attr({'class':function(d){ return 'edlabelWBG edgelabel '+d.source.bothTeams+' '+d.target.bothTeams},
               'id':function(d,i){return 'edgelabelWBG-'+d.id},
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
        .attr({'class':function(d){ return 'edlabelLBG edgelabel '+d.source.bothTeams+' '+d.target.bothTeams},
               'id':function(d,i){return 'edgelabelLBG-'+d.id},
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
        .attr({'class':function(d){return 'edlabelW edgelabel '+d.source.bothTeams+' '+d.target.bothTeams},
               'id':function(d,i){return 'edgelabelW-'+d.id},
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
        .attr({'class':function(d){return 'edlabelL edgelabel '+d.source.bothTeams+' '+d.target.bothTeams},
               'id':function(d,i){return 'edgelabelL-'+d.id},
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
    
    
    
    // label: team city
    var nLabelC = g.selectAll(".text")
        .data(graph.nodes)
        .enter().append("text")
        .attr("dy", "0em")
        .attr("id", "nLabelC")
        .attr("class", function(d) {
            return d.class;
        })
        .text(function(d) {
            return d.teamLocation
        })
    var nLabelCF = g.selectAll(".text")
        .data(graph.nodes)
        .enter().append("text")
        .attr("dy", "0em")
        .attr("id", "nLabelCF")
        .attr("class", function(d) {
            return d.class;
        })
        .text(function(d) {
            return d.teamLocation
        })

    // label: team name
    var nLabelN = g.selectAll(".text")
        .data(graph.nodes)
        .enter().append("text")
        .attr("dy", ".8em")
        .attr("id", "nLabelN")
        .attr("class", function(d) {
            return d.class;
        })
        .text(function(d) {
            return d.teamName
        });
    var nLabelNF = g.selectAll(".text")
        .data(graph.nodes)
        .enter().append("text")
        .attr("dy", ".8em")
        .attr("id", "nLabelNF")
        .attr("class", function(d) {
            return d.class;
        })
        .text(function(d) {
            return d.teamName
        });
    
    nLabelC.attr("transform", function(d) {
            return "translate(" + xPos(parseFloat(d.illX)) + "," + yPos(parseFloat(d.illY)) + ")";
        });
    nLabelN.attr("transform", function(d) {
            return "translate(" + xPos(parseFloat(d.illX)) + "," + yPos(parseFloat(d.illY)) + ")";
    });

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
    .on("mouseout", function(d) {
        if (clicked == false){
            exit_highlight(d);
        }
    });

    // ----THE POPUPS----
    function nodePop(d) {
        clicked = true;
        popup.style("display", "block")
            .html("<div class='pHeader'><div class='pOut'>"+d.team+"</div></div><div class='pInfo'><span class='pHeadline'>League: </span>"+d.league+"<br><span class='pHeadline'>City: </span>"+d.city+"<br><br><span class='pHeadline'>Rivalries: </span></div>");
            
        for (var i=0; i<d.info.length; i++) {
            var pOppData = d.info;
            
            var pOpp = d3.select(".pInfo").append("div").attr("class", "pOpp").attr("id", "pOpp-" + d.info[i].opponentWins);
            pOpp.html("vs. <span class='pOppOpp pOppOpp-"+d.info[i].opponentWins+"'>" + d.info[i].opponent + "</span> (<strong>" + d.info[i].wins + "</strong>W <strong>" + d.info[i].losses + "</strong>L)");
            
            d3.select("#pOpp-"+d.info[i].opponentWins).on("mouseover", function(d) {
                pOppOver(d, i);
            });
            
            
        }
        
        function pOppOver(d) {
            console.log(d);
        }
        
        d3.select(".pHeader").style("background-color", d.cBack);
        d3.select(".pHeader").style("color", d.cText);
        d3.select(".pOut").style("border-color", d.cOutline);
        d3.select(".pInfo").style("border", "3px solid " + d.cBack);
    }
    
    function popOut() {
        clicked = false;
        popup.style("display", "none");
    }

    // ----THE MOUSE----
    // --mouseover--
    function set_highlightLink(d) {
        svg.style("cursor", "pointer");
        d3.selectAll(".node").style("stroke", "rgba(0,0,0,0.05)");
        d3.selectAll(".link").style("stroke", "rgba(0,0,0,0.05)");
        d3.select("#" + d.source.id).style("stroke", "black");
        d3.select("#" + d.target.id).style("stroke", "black");
        d3.select("#" + d.fullId).style("stroke", "black");
    }
    function exit_highlightLink(d) {
        svg.style("cursor", "move");
        
    }
    function set_highlight(d) {
        svg.style("cursor", "pointer");
        if (focus_node !== null) d = focus_node;
        highlight_node = d;
        
        if (highlight_color != "white") {
            circle.style("stroke", function(o) {
                return isConnected(d, o) ? d.colour : "rgba(0,0,0,0.05)";
            });
            nLabelC.style("font-weight", function(o) {
                return isConnected(d, o) ? "600" : "normal";
            });
            nLabelC.style("opacity", function(o) {
                return isConnected(d, o) ? 1 : 0.1;
            })
            nLabelN.style("font-weight", function(o) {
                return isConnected(d, o) ? "bold" : "normal";
            });
            nLabelN.style("opacity", function(o) {
                return isConnected(d, o) ? 1 : 0.1;
            })
            nLabelCF.style("font-weight", function(o) {
                return isConnected(d, o) ? "600" : "normal";
            });
            nLabelCF.style("opacity", function(o) {
                return isConnected(d, o) ? 1 : 0.1;
            })
            nLabelNF.style("font-weight", function(o) {
                return isConnected(d, o) ? "bold" : "normal";
            });
            nLabelNF.style("opacity", function(o) {
                return isConnected(d, o) ? 1 : 0.1;
            })
            // edgelabels.style("opacity", function(o) {
            //     return isConnected(d, o) ? 1 : 0.1;
            // })
            // edgelabelsW.style("opacity", function(o) {
            //     return isConnected(d, o) ? 1 : 0.1;
            // })
            // edgelabelsL.style("opacity", function(o) {
            //     return isConnected(d, o) ? 1 : 0.1;
            // })
            // edgelabelsBG.style("opacity", function(o) {
            //     return isConnected(d, o) ? 1 : 0.1;
            // })
            // edgelabelsWBG.style("opacity", function(o) {
            //     return isConnected(d, o) ? 1 : 0.1;
            // })
            // edgelabelsLBG.style("opacity", function(o) {
            //     return isConnected(d, o) ? 1 : 0.1;
            // })
            link.style("stroke", function(o) {
                return o.source.index == d.index || o.target.index == d.index ? d.colour : ((isNumber(o.score) && o.score >= 0) ? d.colour : "rgba(0,0,0,0.05)");
            });
        }
        d3.selectAll(".edgelabel").style("opacity", "0.1");
        d3.selectAll("." + d.bothTeams).style("opacity", "1.0");
    }

    // --mouseout--
    function exit_highlight() {
        highlight_node = null;
        d3.selectAll(".edgelabel").style("opacity", "1.0");
        if (focus_node === null) {
            svg.style("cursor", "move");
            if (highlight_color != "white") {
                circle.style("stroke", function(d) {
                    return d.colour;
                });
                nLabelC.style("font-weight", "normal")
                    .style("opacity", 1.0);
                nLabelN.style("font-weight", "normal")
                    .style("opacity", 1.0);
                link.style("stroke", function(d) {
                    return d.colour;
                });
            }
        }
    }

    // function set_focus(d) {
    //     if (highlight_trans < 1) {
    //         circle.style("opacity", function(o) {
    //             return isConnected(d, o) ? 1 : highlight_trans;
    //         });

    //         nLabelC.style("opacity", function(o) {
    //             return isConnected(d, o) ? 1 : highlight_trans;
    //         });

    //         nLabelN.style("opacity", function(o) {
    //             return isConnected(d, o) ? 1 : highlight_trans;
    //         });

    //         link.style("opacity", function(o) {
    //             return o.source.index == d.index || o.target.index == d.index ? 1 : highlight_trans;
    //         });
    //     }
    // }

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
        nLabelC.attr("transform", function(d) {
            return "translate(" + xPos(parseFloat(d.illX)) + "," + yPos(parseFloat(d.illY)) + ")";
        });
        nLabelCF.attr("transform", function(d) {
            return "translate(" + xPos(parseFloat(d.illX)) + "," + yPos(parseFloat(d.illY)) + ")";
        });
        nLabelN.attr("transform", function(d) {
            return "translate(" + xPos(parseFloat(d.illX)) + "," + yPos(parseFloat(d.illY)) + ")";
        });
        nLabelNF.attr("transform", function(d) {
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