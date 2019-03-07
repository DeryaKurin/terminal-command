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
  var createStream = fs.createWriteStream(fileName);
  createStream.end();
});

module.exports.mkdir = (dirPath => {
  fs.mkdir(dirPath, { recursive: true }, (err) => {
  if (err) throw err;
});
});
