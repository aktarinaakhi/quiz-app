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

    }, [question, currentQuestion]);

    console.log(question)

    return (
        <div style={{ margin: '5rem' }}>
            <span style={{ fontSize: '5rem' }}>Welcome {name}</span>
            {
                question ? (
                    <>
                        <h1> Topics:  {question[currentQuestion].category}</h1>
                        <span style={{ fontSize: '2rem' }}>Score : {result}</span>

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