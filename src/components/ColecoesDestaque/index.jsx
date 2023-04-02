import { Grid, Container, Button, Paper, Chip, Stack } from '@mui/material';
import { lime, pink } from '@mui/material/colors';
import imagem1 from "./img/img1.png";
import imagem2 from "./img/img2.png";
import imagem3 from "./img/img3.png";


import "./styles.css";


export default function ColecoesDestaque() {
    return (
        <div id='ColecoesDestaque'>
            <Container className="Container">
                <h3>Coleções em Destaque</h3>
                <Grid container  spacing={2}>
                    <Grid item>
                        <Paper className='card' elevation={2} sx={{backgroundColor: "#D8E3F2"}}>
                            <div className='conteudo'>
                                <Chip className='chip' label="30% OFF" sx={{backgroundColor: lime["A100"], fontWeight: "bold"}} />
                                <h2> Novo drop<br /> Supreme</h2>
                                <Button sx={{backgroundColor: "white", color: pink[500], fontWeight: "bold", textTransform: "capitalize", width:"136px", borderRadius:"8px"}} >Comprar</Button>
                            </div>
                            <div className='imagem1'>
                                <img src={imagem1}/>
                            </div>
                        </Paper>
                    </Grid>

                    <Grid item>
                        <Paper className='card' elevation={2} sx={{backgroundColor: "#D8E3F2"}}>
                            <div className='conteudo'>
                                <Chip className='chip' label="30% OFF" sx={{backgroundColor: lime["A100"], fontWeight: "bold"}} />
                                <h2>Coleção<br /> Adidas</h2>
                                <Button  sx={{backgroundColor: "white", color: pink[500], fontWeight: "bold", textTransform: "capitalize", width:"136px", borderRadius:"8px"}} >Comprar</Button>
                            </div>
                            <div className='imagem2'>
                                <img src={imagem2} />
                            </div>
                        </Paper>
                    </Grid>

                    <Grid item>
                        <Paper className='card' elevation={2} sx={{backgroundColor: "#D8E3F2"}}>
                            <div className='conteudo'>
                                <Chip className='chip' label="30% OFF" sx={{backgroundColor: lime["A100"], fontWeight: "bold"}} />
                                <h2>Novo <br /> Beats Bass</h2>
                                <Button sx={{backgroundColor: "white", color: pink[500], fontWeight: "bold", textTransform: "capitalize", width:"136px", borderRadius:"8px"}} >Comprar</Button>
                            </div>
                            <div className='imagem3'>
                                <img src={imagem3} />
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>

        
 )
        
}
    


