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

// --set default modes--
var focus_node = null,
    highlight_node = null,
    text_center = true;

// --set highlight color and transparency--
var highlight_color = "black";
var highlight_trans = 0.1;

// --set up scale by number of wins--
var size = d3.scale.pow().exponent(1)
    .domain([1, 100])
    .range([8, 24]);

// --set up force layout--

var force = d3.layout.force()
    .linkDistance(60)
    .charge(-300)
    .size([w, h]);

var default_link_color = "#888";
var nominal_base_node_size = 8;
var nominal_text_size = 10;
var max_text_size = 24;
var nominal_stroke = 1.5;
var max_stroke = 4.5;
var max_base_node_size = 36;
var min_zoom = 0.1;
var max_zoom = 7;
var svg = d3.select("#visualization").append("svg");
var zoom = d3.behavior.zoom().scaleExtent([min_zoom, max_zoom])
var g = svg.append("g");
svg.style("cursor", "move");






d3.json("js/data.json", function(error, graph) {

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

    force
        .nodes(graph.nodes)
        .links(graph.links)
        .start();

    var link = g.selectAll(".link")
        .data(graph.links)
        .enter().append("line")
        .attr("class", function(d) {
            return d.class;
        })
        .style("stroke", function(d) {
            return d.colour;
        });
    // .style("stroke-width", nominal_stroke)
    // .style("stroke", function(d) {
    //     if (isNumber(d.score) && d.score >= 0) return color(d.score);
    //     else return default_link_color;
    // })


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


    node.on("dblclick.zoom", function(d) {
        d3.event.stopPropagation();
        var dcx = (window.innerWidth / 2 - d.x * zoom.scale());
        var dcy = (window.innerHeight / 2 - d.y * zoom.scale());
        zoom.translate([dcx, dcy]);
        g.attr("transform", "translate(" + dcx + "," + dcy + ")scale(" + zoom.scale() + ")");
    });

    var winScale = d3.scale.linear()
        .domain([0, 1237])
        .range([800, 4000]);

    var circle = node.append("path")
        .attr("d", d3.svg.symbol()
        .size(function(d) {
            return winScale(d.wins);
        })
        .type(function(d) {
            return d.type;
        }));


    var nLabelC = g.selectAll(".text")
        .data(graph.nodes)
        .enter().append("text")
        .attr("dy", "0em")
        .attr("id", "nLabelC")
        .attr("class", function(d) {
            return d.classOrig;
        })
        .text(function(d) {
            return d.teamLocation
        })

    var nLabelN = g.selectAll(".text")
        .data(graph.nodes)
        .enter().append("text")
        .attr("dy", ".75em")
        .attr("id", "nLabelN")
        .attr("class", function(d) {
            return d.classOrig;
        })
        .text(function(d) {
            return d.teamName
        })


    node.on("mouseover", function(d) {
            set_highlight(d);
            console.log(d);
        })
        .on("mousedown", function(d) {
            d3.event.stopPropagation();
            focus_node = d;
            set_focus(d)
            if (highlight_node === null) set_highlight(d)

        }).on("mouseout", function(d) {
            exit_highlight();

        });

    d3.select(window).on("mouseup",
        function() {
            if (focus_node !== null) {
                focus_node = null;
                if (highlight_trans < 1) {
                    circle.style("opacity", 1);
                    nLabelC.style("opacity", 1);
                    nLabelN.style("opacity", 1);
                    link.style("opacity", 1);
                }
            }

            if (highlight_node === null) exit_highlight();
        });

    function exit_highlight() {
        highlight_node = null;
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

    function set_focus(d) {
        if (highlight_trans < 1) {
            circle.style("opacity", function(o) {
                return isConnected(d, o) ? 1 : highlight_trans;
            });

            nLabelC.style("opacity", function(o) {
                return isConnected(d, o) ? 1 : highlight_trans;
            });

            nLabelN.style("opacity", function(o) {
                return isConnected(d, o) ? 1 : highlight_trans;
            });

            link.style("opacity", function(o) {
                return o.source.index == d.index || o.target.index == d.index ? 1 : highlight_trans;
            });
        }
    }


    function set_highlight(d) {
        svg.style("cursor", "pointer");
        if (focus_node !== null) d = focus_node;
        highlight_node = d;

        if (highlight_color != "white") {
            circle.style("stroke", function(o) {
                return isConnected(d, o) ? highlight_color : "rgba(0,0,0,0.05)";
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
            link.style("stroke", function(o) {
                return o.source.index == d.index || o.target.index == d.index ? highlight_color : ((isNumber(o.score) && o.score >= 0) ? highlight_color : "rgba(0,0,0,0.05)");

            });
        }
    }


    zoom.on("zoom", function() {

        var stroke = nominal_stroke;
        if (nominal_stroke * zoom.scale() > max_stroke) stroke = max_stroke / zoom.scale();
        link.style("stroke-width", stroke);
        circle.style("stroke-width", stroke);

        var base_radius = nominal_base_node_size;
        if (nominal_base_node_size * zoom.scale() > max_base_node_size) base_radius = max_base_node_size / zoom.scale();
        circle.attr("d", d3.svg.symbol()
            .size(function(d) {
                return Math.PI * Math.pow(size(d.size) * base_radius / nominal_base_node_size || base_radius, 2);
            })
            .type(function(d) {
                return d.type;
            }))

        //circle.attr("r", function(d) { return (size(d.size)*base_radius/nominal_base_node_size||base_radius); })
        if (!text_center) nLabelC.attr("dx", function(d) {
            return (size(d.size) * base_radius / nominal_base_node_size || base_radius);
        });

        var text_size = nominal_text_size;
        if (nominal_text_size * zoom.scale() > max_text_size) text_size = max_text_size / zoom.scale();
        nLabelC.style("font-size", text_size + "px");
        nLabelN.style("font-size", text_size + "px");

        g.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
    });

    svg.call(zoom);

    resize();
    //window.focus();
    d3.select(window).on("resize", resize);

    force.on("tick", function() {

        var yPos = d3.scale.linear()
            .domain([25, 55])
            .range([h - 75, 0]);
        var xPos = d3.scale.linear()
            .domain([-128, -66])
            .range([0, w]);

        node.attr("transform", function(d) {
            return "translate(" + xPos(d.lng) + "," + yPos(d.lat) + ")";
        });
        nLabelC.attr("transform", function(d) {
            return "translate(" + xPos(d.lng) + "," + yPos(d.lat) + ")";
        });
        nLabelN.attr("transform", function(d) {
            return "translate(" + xPos(d.lng) + "," + yPos(d.lat) + ")";
        });

        link.attr("x1", function(d) {
                return xPos(d.source.lng);
            })
            .attr("y1", function(d) {
                return yPos(d.source.lat);
            })
            .attr("x2", function(d) {
                return xPos(d.target.lng);
            })
            .attr("y2", function(d) {
                return yPos(d.target.lat);
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
    }



});

function vis_by_type(type) {
    switch (type) {
        case "circle":
            return keyc;
        case "square":
            return keys;
        case "triangle-up":
            return keyt;
        case "diamond":
            return keyr;
        case "cross":
            return keyx;
        case "triangle-down":
            return keyd;
        default:
            return true;
    }
}

function vis_by_node_score(score) {
    if (isNumber(score)) {
        if (score >= 0.666) return keyh;
        else if (score >= 0.333) return keym;
        else if (score >= 0) return keyl;
    }
    return true;
}

function vis_by_link_score(score) {
    if (isNumber(score)) {
        if (score >= 0.666) return key3;
        else if (score >= 0.333) return key2;
        else if (score >= 0) return key1;
    }
    return true;
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function hexToRgbA(hex) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',');
    }
    throw new Error('Bad Hex');
}

// console.log(hexToRgbA("#ffffff"))