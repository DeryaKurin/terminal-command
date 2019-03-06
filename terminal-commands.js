const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = (fileName => {
  var createStream = fs.createWriteStream(`${fileName}.js`);
  createStream.end();
};

module.exports.mkdir = (dirName => {
  fs.mkdir('./', { recursive: true }, (err) => {
  if (err) throw err;
});



var createStream = fs.createWriteStream("hello-world.txt");
createStream.end();
