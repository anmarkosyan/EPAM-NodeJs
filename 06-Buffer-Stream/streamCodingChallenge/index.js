const fs = require('fs');
const zlib = require('zlib');

//1️⃣ writing  file
const writable = fs.createWriteStream(`../streamUnzipFiles/test1.txt`);

for (let i = 0; i < 1000; i++) {
  const chunk =
    'Տնային աշխատանք, որը պետք է անել Streams-ով\n' +
    'Ստեղծել ծրագիր, որը դրսից (argv) ստանում է ինչ որ թղթապանակի (folder) հասցե\n' +
    'Այդ թղթապանակին հարակից ստեղծում է պատահական անունով թղթապանակ\n' +
    'Առաջին թղթապանակում գտնվող բոլոր ֆայլերը zip է անում և zip արված ֆայլերը տեղադրում է նոր ստեղծված թղթապանակում:\n';
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
  .pipe(zlib.createGzip())
  .pipe(writeFile)
  .on('finish', () => {
    console.log('Zipping process is done 😊');
  });
