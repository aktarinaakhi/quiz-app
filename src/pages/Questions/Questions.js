import { Container } from '@mui/material';
import React, { useState } from 'react';

const Questions = ({ result, setResult, question, setQuestion, currentQuestion, setCurrentQuestion, options, setOptions, correct }) => {

    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);



    return (
        <Container>
            <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>questions : {currentQuestion + 1}</h2>
            <div style={{ border: '3px solid gray', padding: '30px' }}>
                <h2 style={{ textAlign: 'center' }}>{question[currentQuestion].question}</h2>
                <div style={{ marginTop: '20px' }}>
                    {options && options.map(topics => <button style={{ marginLeft: '40px', padding: '20px', marginBottom: '20px' }}>{options}</button>)}
                </div>

            </div>
        </Container>
    );
};

export default Questions;