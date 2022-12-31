//console.log(__dirname)

const fs = require('fs')
//const unzipFiles = require('extract-zip')
var AdmZip = require("adm-zip");

/*path  /Users/chowchungpui/Downloads/first-nodejs   */
var dirPath = './eform';

files = fs.readdirSync(dirPath)

files.forEach(element => {
      const filename = element.split('_');
      //console.log(filename[0]);
      var targetPath= './';
      var zipPath = dirPath + '/' + element;
      //console.log(zipPath)
      targetPath += filename[0];
      //console.log(targetPath)

      var zip = new AdmZip(zipPath);
      zip.extractAllTo(/*target path*/ targetPath, /*overwrite*/ true);

      var jsonFile = require('fs')
      targetPath +='/data/data.json'

      jsonFile.readFile(targetPath, (err, data)=>{
        if (err)
        console.log(err)
        else
        var obj = JSON.parse(data)
        console.log(obj.listOfItem.length)
        //obj.listOfECA.ecaTech.forEach(xxx=>{console.log(xxx)})
      })




});

