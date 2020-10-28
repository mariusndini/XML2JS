var parseString = require('xml2js').parseString;
var fs = require('fs');

//read all the files in the input directory
fs.readdir('./input', readDir);

//Do this action for the file
var currentFileName = '';
function readDir(err, files){
    //for each file do this action
    files.forEach(file => {
        currentFileName = file;
        parseString(fs.readFileSync('./input/'+file, 'utf8'), parseLogic); // convert the file
    });
}

//Prase THIS or one paricular file
function parseLogic(err, result){
    //write each file to the output folder (must exist beforehand)
    fs.writeFile("./output/" + currentFileName + '.json', JSON.stringify(result), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("FILE SAVED!");
    }); 
}



