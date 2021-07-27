const fs = require('fs');
const zlib = require('zlib').createGzip();

//1️⃣ writing  file
const writable = fs.createWriteStream(`../streamUnzipFiles/test1.txt`);

for (let i = 0; i < 1000; i++) {
  const chunk = 'Հոսքերը տվյալների հավաքածու են, ճիշտ այնպես, ինչպես զանգվածները կամ տողերը: ' +
    'Տարբերությունն այն է, որ հոսքերը կարող են միանգամից հասանելի չլինել, և դրանք պարտադիր չէ, ' +
    'որ տեղավորվեն հիշողության մեջ:\n';
  writable.write(chunk);
}
writable.end();

//2️⃣ created a new directory
fs.mkdir('../streamZipFiles', err => {
  if (err) throw err;
  else console.log('Created directory for zip files...');
});

//3️⃣ transform a writable stream
const readFile = fs.createReadStream('../streamUnzipFiles/test1.txt', {
  highWaterMark: 9,
});
const writeFile = fs.createWriteStream('../streamZipFiles/test1.gzip');
readFile
  .pipe(zlib)
  .pipe(writeFile)
  .on('finish', () => {
    console.log('Zipping process is done 😊');
  });
