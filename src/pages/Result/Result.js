import { Button, Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';


const Result = ({ result }) => {
    return (
        <Container>
            <div>
                <h2>Your Score: {result}</h2>

                <Link to='/'>
                    <Button>Go to the home page</Button>
                </Link>
            </div>
        </Container>
    );
};

export default Result;