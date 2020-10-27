var parseString = require('xml2js').parseString;
var fs = require('fs');

var data = fs.readFileSync('rawdata.txt', 'utf8');

parseString(data, function (err, result) {
    console.log(result);

    fs.writeFile("./data.json", JSON.stringify(result), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 

});