const fs = require('fs');
const zlib = require('zlib').createGzip();
const path = require('path');

const filePath = process.argv[2];
const allFiles = fs.readdirSync(filePath);

fs.mkdirSync('../streamZipFiles');

allFiles.forEach(file => {
  const readFile = fs.createReadStream(path.join(filePath, file), {
    highWaterMark: 9,
  });
  const writeFile = fs.createWriteStream(
    path.join('../streamZipFiles', file.replace(path.extname(file), '.gzip'))
  );
  readFile
    .pipe(zlib)
    .pipe(writeFile)
    .on('finish', () => {
      console.log('Zipping process is done 😊');
    });
});
