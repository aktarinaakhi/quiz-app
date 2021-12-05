import { Grid, Box, TextField, MenuItem, Button } from '@mui/material';
import React from 'react';
import Categories, { } from '../../Data/Categories'

const Home = () => {


    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
                <Box>
                    <h6 style={{ fontSize: '30px', textAlign: 'center', padding: '10px', fontWeight: '400' }}>Quiz Setting</h6>
                    <Box style={{ padding: '20px' }}>
                        <TextField style={{ marginBottom: '40px' }} fullWidth id="outlined-basic" label="Enter Your Name" variant="outlined" />

                        <TextField
                            select
                            style={{ marginBottom: 30 }}
                            fullWidth
                            id="outlined-basic"
                            label="Select Category"
                            variant="outlined" />

                        <TextField
                            select
                            style={{ marginBottom: 30 }}
                            fullWidth
                            id="outlined-basic"
                            label="Select Difficulty"
                            variant="outlined" />
                        {
                            Categories.map((cat) => {
                                <MenuItem
                                    key={cat.category}
                                    value={cat.value}
                                >
                                    {cat.category}
                                </MenuItem>
                            })
                        }






                        <Button style={{ marginTop: '40px', width: '100%', padding: '8px 0' }} variant="contained">Start Quiz</Button>

                    </Box>
                </Box>
            </Grid>
            <Grid item md={7} xm={12}>
                <img style={{ padding: '10px' }} src="./quiz.svg" alt="" />
            </Grid>

        </Grid>
    );
};

export default Home;