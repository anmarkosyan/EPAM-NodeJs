// const str = 'hello there';
// console.log(str);
// console.log(__dirname);
// console.log(__filename);
// console.log(process.pid);
// const dataArray = process.argv;
// console.log(dataArray);
// console.log(dataArray.slice(2).toString());

const questions = [
    "file name",
    "environment",
    "use npm or not"
];

const ask = (i = 0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `);
};


ask();

const answers = [];
process.stdin.on('data', data => {
    answers.push(data.toString().trim());

    if(answers.length< questions.length){
        ask(answers.length);
    }else {
        process.exit();
    }
});

process.on('exit', ()=>{
    const [name, env, npm] = answers;
    console.log(`
    
    Thank you for your answers!!!
    for ${name} inside ${env} with ${npm}))))))
    `);
});