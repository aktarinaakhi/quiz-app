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
        <Container>
            <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>questions : {currentQuestion + 1}</h2>
            <div style={{ border: '3px solid gray', padding: '30px' }}>
                <h2 style={{ textAlign: 'center' }}>{question[currentQuestion].question}</h2>

                {error && <span style={{ color: 'red' }}> wrong</span>}

                <div style={{ marginTop: '30px', textAlign: 'center' }}>

                    {options && options.map(topics => <button
                        onClick={() => handleCheck(topics)}
                        style={{ marginLeft: '40px', padding: '15px', marginBottom: '20px' }}
                        key={topics}

                        className={`singleOption ${selected && handleSelect(topics)}`}
                        disabled={selected}
                    >
                        {topics}</button>)}
                </div>

                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Button
                        style={{ marginRight: '20px' }}
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