import { Container, Grid, Card, Chip  } from '@mui/material';
import './styles.css';
import tenis from './tenis.png';
import React from 'react';
import line from './Line.png';

function Produto(props){
    
    return (
        <div className='Produto'>
            <Card className='card'>
                {props.desconto && <Chip className="chip" label="30% OFF"/>}
                <img className="imagem" src={tenis} alt='Imagem de um tênis'/>
            </Card>
            <small>Tênis</small>
            <p className='descriçao'>K-Swiss V8 - Masculino</p>
            <br/>
            <div className='valor'>
                <p className='duzentos'>$200</p> <strong className='cem'>$100</strong>
            </div>
        </div>
    )
}

export default function ProdutosAlta () {
    return (
        <div id='ProdutosEmAlta' >
            <Container disableGutters>
                <div className='produtosemalta'>
                    <div className='titulos'>
                            <h3 className='titulo1'>Produtos em alta</h3>
                            <a href='/produtos'>Ver todos <img src={line} alt='seta'/> </a>
                    </div>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <Produto desconto/>
                        </Grid>
                         <Grid item xs={3}>
                            <Produto desconto/>
                        </Grid>
                        <Grid item xs={3}>
                            <Produto/>
                        </Grid>
                        <Grid item xs={3}>
                            <Produto/>
                        </Grid> 
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <Produto/>
                        </Grid>
                         <Grid item xs={3}>
                            <Produto/>
                        </Grid>
                        <Grid item xs={3}>
                            <Produto/>
                        </Grid>
                        <Grid item xs={3}>
                            <Produto/>
                        </Grid> 
                    </Grid>
                </div>
            </Container>
        </div>
    )
}
