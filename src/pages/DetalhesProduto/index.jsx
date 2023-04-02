import React from 'react';
import './style.css';
import { Grid, Container, Stack, Card, Fab, Button } from '@mui/material';
import { ChevronLeft, ChevronRight, Star, StarOutline } from "@mui/icons-material";

import Sneakers from './img/White-Sneakers.png';

export default function DetalhesProduto(){
    
    const [atual, setAtual] = React.useState(0);
    
    const hexColors = [
        "#E2E3FF",
        "#FFE8BC",
        "#FFC0BC",
        "#DEC699",        
        "#E8DFCF"
    ];
    const Items = () => {
        return hexColors.map((hexColor, posicao) => {
            return (
                <Grid item xs={2.4}>
                    <Card onClick={() => setAtual(posicao)} sx={(atual === posicao) && { border: "2px solid red"}}>
                        <img src={Sneakers} style={{backgroundColor: hexColor}} width="100%"/>
                    </Card>
                </Grid>
            );
        }); 
    }

    function anterior(){
        if(atual === 0){
            setAtual(hexColors.length - 1);
        }else{
            setAtual(atual - 1);
        }
    }
    function proximo(){
        if(atual < hexColors.length - 1){
            setAtual(atual + 1);
        }else{
            setAtual(0)
        }
    }
    
    return (
        <Container id='DetalhesProduto'>
            <Grid container spacing={3}>
                <Grid item xs={7}>
                    <Card className="cardGrande" align="center">
                        <Stack className='stack' direction="row">
                            <ChevronLeft className='left' onClick={() => anterior()}/>
                            <img src={Sneakers} width="100%" style={{backgroundColor: hexColors[atual]}}/>
                            <ChevronRight className='right' onClick={proximo}/>
                        </Stack>
                    </Card>

                    <Grid container spacing={2}>
                        <Items/>
                    </Grid>
                </Grid>

                <Grid item xs={5}>
                    <div className='titulo'>
                        Tênis Nike Revolution<br/>
                        6 Next Nature Masculino
                    </div>

                    <div className='referencia'>
                        Casual | Nike | REF:38416711
                    </div>

                    <div className='estrelas'>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                        <StarOutline/> 
                        <Button className='avaliação' variant='contained'>4.7<StarOutline className='estrelaAvaliação'/></Button>
                        <small>(90 avaliações)</small>
                    </div>

                    <div>R$ <strong className='duzentosEdezenove'>219,00</strong> <small className='duzentosEcinquenta'>250,00</small></div>

                    <div>
                        <p>Descrição do produto</p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/>
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut<br/>
                        enim ad minim veniam, quis nostrud exercitation ullamco.
                    </div>

                    <div>
                        Tamanho
                    </div>

                    <div className='botaoDeCor'>

                        {hexColors.map((hexColor, posicao) => {
                            return (
                                <Fab className='fab' onClick={() => setAtual(posicao)} sx={{
                                    backgroundColor: hexColor,
                                    '&:hover': {
                                        backgroundColor: hexColor
                                    }
                                }}/>
                            )
                        })}
                    
                    </div>

                    <Button className='comprar' variant='contained'>COMPRAR</Button>
                </Grid>
            </Grid>
        </Container>
    )
}