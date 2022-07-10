import React from 'react';
import { AppBar, Toolbar, Typography, Box} from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css'


function Navbar() {
    return (
        <>
            <AppBar position="static" className='appBar'>
                <Toolbar variant="dense" className='navBar'>
                    <Box className='box' >
                        <Typography variant="h5" color="inherit">
                             BlogPessoal
                         </Typography>
                    </Box>
                    <Box display="flex">
                        <Box mx={1} className='box'>
                        <Link to='/home' className='text-decorator-none'>
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                        </Link>
                        </Box>
                        <Box mx={1} className='box'>
                        <Link to='/posts' className='text-decorator-none'>
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Link>
                        </Box>
                        <Box mx={1} className='box'>
                        <Link to='/temas' className='text-decorator-none'>
                            <Typography variant="h6" color="inherit">
                                tema
                            </Typography>
                        </Link>
                        </Box>
                        <Box mx={1} className='box'>
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className='box'>
                                <Typography variant="h6" color="inherit">
                                    logout
                                </Typography>
                            </Box>
                        </Link>
                        
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;
