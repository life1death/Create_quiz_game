let questions = ['What is the capital of Cameroon?', 'What is 2+2?', 'Where is the Eiffel Tower located?'];
let answers = ['Yaounde', '4', 'Paris'];
let score = 0;

for (let i = 0; i < questions.length; i++) {
    let response = prompt(questions[i]);
    if (response === answers[i]) {
        score++;
        alert('Correct!');
    } else {
        alert('Incorrect!');
    }
}

alert(`You got ${score} correct answers!`);