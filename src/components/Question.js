import { useState } from 'react';
import KNumber from './KNumber';

export function Question(props) {

    let difficult = 10;

    const [answer, setAnswer] = useState('');
    const [question, setQuestion] = useState(new KNumber(difficult));

    function saveAnswer(){
        if (!answer) return;
        question.answer = parseInt(answer);
        runQuestion();
    }

    function runQuestion() {
        props.list.push(question);

        if (props.list.length > 9) {
            props.runResult();
        }

        setAnswer('');
        setQuestion(new KNumber(difficult));
    }

    return (
        <div>
            <h3>{question.showQuestion()}</h3>
            <p><input type="number" placeholder='= ...' value={answer} onChange={(e) => setAnswer(e.target.value)} /></p>
            <p><button onClick={saveAnswer}>Answer</button></p>
        </div>
    );
}