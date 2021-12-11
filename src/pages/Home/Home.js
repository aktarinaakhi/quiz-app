import { Grid, Box, TextField, MenuItem, Button, FormControl, Select, InputLabel } from '@mui/material';
import React, { useState } from 'react';
import Categories from '../../Data/Categories'
import { useNavigate } from 'react-router-dom';

const Home = ({ name, setName, fetchQuestion }) => {

    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();



    const handleSubmit = () => {
        if (!difficulty || !category || !name) {
            setError(true);
        }
        else {
            setError(false)
            fetchQuestion(difficulty, category);
            navigate('/quiz');

        }

    }

    return (
        <div>
            {error && <span style={{ color: 'red' }}>Please fill up this form</span>}
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <Box>
                        <h6 style={{ fontSize: '30px', textAlign: 'center', padding: '10px', fontWeight: '400' }}>Quiz Setting</h6>
                        <Box style={{ padding: '20px' }}>

                            <TextField
                                style={{ marginBottom: '40px' }}
                                fullWidth
                                id="standard-basic"
                                label="Enter Your Name"
                                variant="standard"
                                onChange={e => setName(e.target.value)}
                            />


                            <FormControl fullWidth variant="standard" style={{ marginBottom: 40 }}>
                                <InputLabel id="demo-simple-select-standard-label">Select Cetagory</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={category}
                                    onChange={e => setCategory(e.target.value)}
                                    label="Age"
                                    style={{ textAlign: 'left' }}
                                >
                                    {
                                        Categories.map(cat => <MenuItem key={cat.value} value={cat.value}>{cat.category}</MenuItem>)
                                    }
                                </Select>
                            </FormControl>



                            <FormControl fullWidth variant="standard" style={{ marginBottom: 40 }}>
                                <InputLabel id="demo-simple-select-standard-label">Select difficulty</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={difficulty}
                                    onChange={e => setDifficulty(e.target.value)}
                                    style={{ textAlign: 'left' }}
                                    label="Select difficulty"
                                >

                                    <MenuItem value={10}>Easy</MenuItem>
                                    <MenuItem value={20}>Medium</MenuItem>
                                    <MenuItem value={30}>Advanced</MenuItem>
                                </Select>
                            </FormControl>



                            <Button onClick={handleSubmit} style={{ marginTop: '40px', width: '100%', padding: '8px 0' }} variant="contained">Start Quiz</Button>

                        </Box>
                    </Box>
                </Grid>
                <Grid item md={7} xm={12}>
                    <img style={{ padding: '10px' }} src="./quiz.svg" alt="" />
                </Grid>

            </Grid>
        </div>
    );
};

export default Home;