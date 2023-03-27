import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import './layout.css'
import { CssBaseline } from '@mui/material';
import ResNavBar from '../../Components/ResNavBar';



const LayoutPage = () => {
    
    return (
        <>
        <CssBaseline/>
        <Container maxWidth={false} disableGutters>
            
            <Outlet />
        </Container>
        </>
    )
}

export default LayoutPage