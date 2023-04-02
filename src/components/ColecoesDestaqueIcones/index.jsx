import React from "react";
import { Avatar, Container, Grid, Link } from "@mui/material";
import camisetas from "./camiseta.svg";
import calcas from "./calca.svg";
import bones from "./bone.svg";
import tenisi from "./tenisi.svg";
import fones from "./fone.svg";
import camisetarosa from "./camisetaROSA.svg";
import calcasrosa from "./calcaROSA.svg";
import bonerosa from "./boneROSA.svg";
import tenisirosa from "./tenissROSA.svg";
import fonesrosa from "./foneROSA.svg";

import "./style.css";


export default function ColecoesDestaqueIcones() {
  const [ativo, setAtivo] = React.useState(0);

  const colecoes = [
    { nome: "Camisetas", 
      imagem: camisetas, 
      imagemAtiva: camisetarosa
    },
    { nome: "Calças", 
      imagem: calcas, 
      imagemAtiva: calcasrosa 
    },
    { nome: "Bonés", 
      imagem: bones, 
      imagemAtiva: bonerosa
    },
    { nome: "Headphones", 
      imagem: fones, 
      imagemAtiva: fonesrosa 
    },
    { nome: "Tênis", 
      imagem: tenisi, 
      imagemAtiva: tenisirosa 
    },
  ];


  const Sections = () => {
    return colecoes.map((cada, posicao) => {
      return (
        <Grid key={posicao} item className="iconeslinks" onClick={() => setAtivo(posicao)}>
          <Avatar sx={{ backgroundColor: "white", height: "104px", width: "104px"}}>
            <img src={posicao === ativo ? cada.imagemAtiva : cada.imagem} alt="qualquercoisa" />
          </Avatar>
          <Link  to="/" className='link'>{cada.nome}</Link>
        </Grid>
      );
    });
  };

  return (
    <>
      <div id="colecoesicones">
          <Container className='container-collection'>
            <p className="pdest">Coleções em destaque</p>
            <Grid container direction="row" justifyContent="center" spacing={6}>
              <Sections />
            </Grid>
          </Container>
        </div>
    </>
  );
}

