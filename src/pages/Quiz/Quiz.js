import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Questions from '../Questions/Questions';
import './Quiz.css'

const Quiz = ({ name, question, setQuestion, result, setResult }) => {

    const [options, setOptions] = useState();
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleExchange = (optionss) => {
        return optionss.sort(() => Math.random() - 0.5);

    }

    useEffect(() => {

        setOptions(question &&
            handleExchange([question[currentQuestion]?.correct_answer, ...question[currentQuestion]?.incorrect_answers])
        )

    }, [question]);

    console.log(question)

    return (
        <div style={{ margin: '50px' }}>
            <span>Welcome {name}</span>
            {
                question ? (
                    <>
                        <h1> {question[currentQuestion].category}</h1>
                        <span>Score : {result}</span>

                        <Questions
                            result={result}
                            setResult={setResult}
                            question={question}
                            setQuestion={setQuestion}
                            currentQuestion={currentQuestion}
                            setCurrentQuestion={setCurrentQuestion}
                            options={options}
                            setOptions={setOptions}
                            correct={question[currentQuestion]?.correct_answer}
                        ></Questions>
                    </>
                )
                    : (<CircularProgress></CircularProgress>)
            }

        </div>
    );
};

export default Quiz;