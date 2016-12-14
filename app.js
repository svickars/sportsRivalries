var request = require('request');
var fs = require('fs');


var url = 'https://sheetsu.com/apis/v1.0/77a75e701bd6/sheets/links';
var url2 = 'https://sheetsu.com/apis/v1.0/266cad55251a';
var url3 = 'https://sheetsu.com/apis/v1.0/77a75e701bd6/sheets/labels';

request(url, (error, response, body) => {
    if (!error && response.statusCode == 200) {
        var result = JSON.parse(body);
        request(url2, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                var result2 = JSON.parse(body);
                request(url3, (error, response, body) => {
                    if (!error && response.statusCode == 200) {
                        var result3 = JSON.parse(body);
                        // console.log(result2);
                        var links = JSON.stringify(result).replace(/\"source\"\:\"/g, '"source": ').replace(/\"\,\"targetTeam\"/g, ',"targetTeam"')
                                                          .replace(/\"target\"\:\"/g, '"target": ').replace(/\"\,\"wins/g, ',"wins');
                        
                        
                        
                        
                        // var links = JSON.stringify(result).replace(/"source": "/g, '"source": ').replace(/", "targetTeam"/g, ', "targetTeam"').replace(/"target": "/g, '"target": ').replace(/", "id"/g, ', "id"');
                        var nodes = JSON.stringify(result2).replace(/\\/g, "").replace(/]"/g, "]").replace(/"\[/g, /\[/).replace(/\/\\\[\//g, "[");
                        var labels = JSON.stringify(result3).replace(/\\/g, "").replace(/]"/g, "]").replace(/"\[/g, /\[/).replace(/\/\\\[\//g, "[");
                        fs.writeFileSync('js/data.json', ' { "graph": [], "links": ' + links + ', "nodes": ' + nodes + ', "labels": ' + labels + ', "directed": false, "multigraph": false }');
                    }
                    else {
                        console.log("Got an error: ", error, ", status code: ", response.statusCode);
                    }
                });
            }
            else {
                console.log("Got an error: ", error, ", status code: ", response.statusCode);
            }
        });
        // fs.writeFileSync('test/data.json', JSON.stringify(result));
    }
    else {
        console.log("Got an error: ", error, ", status code: ", response.statusCode);
    }
});

// .replace(/]"/g, "]").replace(/"\[/g, '[')