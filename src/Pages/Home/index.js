import React from 'react'
import { Container, Box } from '@mui/material'
import './Home.css'

const index = () => {
    return (
            
                <Container maxWidth="xl" >
                    <Box>
                        <div className='content-wrap'>
                         <p className='home-text'>A PERSONAL BLOG</p>
                         <span className='text-underline'></span>   
                        </div>
                        <h1 className='header-text'>A<span className='color-changer'>xol</span>e.</h1> 
                        <p className='about-content'> I am a Blogger from Photographer Based in Philliphines</p>                                                  
                    </Box>
                </Container>
            
        
    )
}

export default index