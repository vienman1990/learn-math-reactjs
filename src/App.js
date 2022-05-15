import { useState } from 'react';
import { Question } from './components/Question';
import { Start } from './components/Start';
import { Result } from './components/Result';
import './App.scss';

export function App() {
    const [screen, setScreen] = useState(1);
    const [list, setList] = useState([]);
    let screenShow;

    function runStart() {
        setList([]);
        setScreen(2);
    }

    function runResult() {
        setScreen(3);
    }

    if (screen == 1) {
        screenShow = <Start runStart={runStart} />
    }

    if (screen == 2) {
        screenShow = <Question runResult={runResult} list={list} />
    }

    if (screen == 3) {
        screenShow = <Result runStart={runStart} list={list} />
    }

    return (
        <div>
            {screenShow}
        </div>
    );
}