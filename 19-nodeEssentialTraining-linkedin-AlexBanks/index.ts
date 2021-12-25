// const str = 'hello there';
// console.log(str);
// console.log(__dirname);
// console.log(__filename);
// console.log(process.pid);
// const dataArray = process.argv;
// console.log(dataArray);
// console.log(dataArray.slice(2).toString());

/*
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

const answers: string[] = [];
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
 */

import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question('how are you?', answer => {
//     console.log(`your answer is: ${answer}`);
//     process.exit();
// });

const questions: string[] = [
    "How are you?",
    "Where do you live?",
    "How's your day?"
];

const collectFunctions = ( questions: string[], done: any) => {
    const answers: string[] = [];
    const [ fistQ ] = questions;

    const questionAnswered = (answer: string) => {
        answers.push(answer);
        if(answers.length< questions.length){
            rl.question(questions[answers.length], questionAnswered);
        }else{
            done(answers);
        }
    }

    rl.question(fistQ, questionAnswered);
};

collectFunctions(questions, (answers: string): void => {
    console.log('Thank you for your answers');
    console.log(answers);
    process.exit();
});



