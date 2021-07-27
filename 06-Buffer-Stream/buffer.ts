//==================== 🔴 lecture part ============
//Remember how we had to import the Console class in the previous lesson? Unlike the Console class,
//the Buffer class is in the global definition,so we do not need to import anything.

const buf1 = Buffer.alloc(10);
console.log(buf1);

const strBuf = Buffer.from('hello there!!');
console.log(strBuf.toString());