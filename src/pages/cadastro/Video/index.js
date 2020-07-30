import React from 'react'
import PageDefaul from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo () {
    return (
      <PageDefaul>
       <h1>Cadastro de Vídeo</h1>

        <Link to="/cadastro/categoria">
            Cadastrar Categoria
        </Link>
      </PageDefaul>
    )
  }
  
  export default CadastroVideo;