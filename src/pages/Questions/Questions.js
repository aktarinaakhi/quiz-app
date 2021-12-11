import { Container, Button } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Questions = ({ result, setResult, question, setQuestion, currentQuestion, setCurrentQuestion, options, setOptions, correct }) => {

    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleCheck = (topics) => {
        setSelected(topics);
        if (topics === correct) {
            setResult(result + 1);
            setError(false);
        }

    }

    const handleSelect = (topics) => {
        if (selected === topics && selected === correct) {
            return 'select'
        }
        else if (selected === topics && selected !== correct) {
            return 'wrong'
        }
        else if (topics === correct) {
            return 'select'
        }
    }

    const handleQuit = () => {

    }

    const handleNext = () => {
        if (currentQuestion > 8) {
            navigate('/result');
        }
        else if (selected) {
            setCurrentQuestion(currentQuestion + 1);
            setSelected();
        }
        else {
            setError('please select an option first')
        }
    }
    return (
        <Container style={{ textAlign: 'center' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>questions : {currentQuestion + 1}</h2>
            <div style={{ border: '3px solid gray', padding: '2rem' }}>
                <h2 style={{ textAlign: 'center' }}>{question[currentQuestion].question}</h2>

                {error && <span style={{ color: 'red' }}> Select one option</span>}

                <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', width: '50%', margin: 'auto', marginBottom: '3rem' }}>

                    {options && options.map(topics => <button
                        onClick={() => handleCheck(topics)}
                        style={{ marginLeft: '3rem', padding: '1rem', marginBottom: '1rem' }}
                        key={topics}

                        className={`singleOption ${selected && handleSelect(topics)}`}
                        disabled={selected}
                    >
                        {topics}</button>)}
                </div>

                <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                    <Button
                        style={{ marginRight: '2rem' }}
                        variant="contained"
                        color="warning"
                        onClick={handleQuit}
                    >
                        Quit </Button>
                    <Button
                        variant="contained"
                        onClick={handleNext}
                    >Next Question</Button>
                </div>

            </div>
        </Container>
    );
};

export default Questions;