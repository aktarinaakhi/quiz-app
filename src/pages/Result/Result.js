import { Button, Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';


const Result = ({ result }) => {
    return (
        <Container>
            <div>
                <h2 style={{ fontSize: '3rem', margin: '2rem 0' }}>Your Score: {result}</h2>

                <Link to='/'>
                    <Button style={{ fontSize: '2rem', marginBottom: '18rem' }}>Go to the home page</Button>
                </Link>
            </div>
        </Container>
    );
};

export default Result;