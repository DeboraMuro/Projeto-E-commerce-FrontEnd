import './styles.css';
import React from 'react';
import logo from './logo digital college.png';
import { Grid, Container } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


export default function Footer () {
    return (
        <footer>
            <Container disableGutters>
                <Grid container justifyContent="space-between">
                    <Grid item>
                    <Grid container direction="column">
                        <div id='digitalStore'>
                            <img src={logo} alt='logo da digital store' />
                        </div>  
                        <p id='textoFooter'>Lorem ipsum dolor sit amet, consectetur<br/>
                        adipiscing elit, sed do eiusmod tempor<br/>
                        incididunt ut labore ut labore et dolore.</p>
                        <Grid container spacing={3}>
                            <Grid item>
                                <FacebookIcon sx={{ color: 'white' }} />
                            </Grid>
                            <Grid item>
                                <InstagramIcon sx={{ color: 'white' }} />
                            </Grid>
                            <Grid item>
                                <TwitterIcon sx={{ color: 'white' }} />
                            </Grid>
                        </Grid>  
                    </Grid>     
                    </Grid>
                
                    <Grid item>
                        <p className='titulosFooter'>Informação</p>
                        <p className='textoFooter'>Sobre Drip Store</p>
                        <p className='textoFooter'>Seguraça</p>
                        <p className='textoFooter'>Wishlist</p>
                        <p className='textoFooter'>Blog</p>
                        <p className='textoFooter'>Trabalhe conosco</p>
                        <p className='textoFooter'>Meus pedidos</p>
                    </Grid>
                
                    <Grid item>
                        <p className='titulosFooter'>Categorias</p>
                        <p className='textoFooter'>Camisetas</p>
                        <p className='textoFooter'>Calças</p>
                        <p className='textoFooter'>Bones</p>
                        <p className='textoFooter'>Headphones</p>
                        <p className='textoFooter'>Tênis</p>
                    </Grid>
            
                    <Grid item>
                        <p className='titulosFooter'>Contato</p>
                        <p className='textoFooter'>Av. Santos Dumont, 1510 - 1<br/>
                        andar - Aldeota, Fortaleza -<br/></p>
                        <p className='textoFooter'>(85) 3051-3411</p>
                    </Grid>
                </Grid>
                <div className='final'>
                        <hr/>
                        <small>@ 2022 Digital College</small>
                    </div>
            </Container>
        </footer>
    )
}
