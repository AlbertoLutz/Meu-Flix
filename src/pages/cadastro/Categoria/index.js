import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefaul from '../../../components/PageDefault';
import FormField from '../../../components/FormField';


function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState('valoresIniciais');


  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function handleChange(infosDoEvento) {
    const { name, value } = infosDoEvento.target;
    setValue(name, value);
  }

  return (
    <PageDefaul>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function haldleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([...categorias, values]);

         setValues(valoresIniciais)

      }}>

        <FormField 
        label="Nome da Categoria"
        type="text"
        name="nome"
        value={values.nome}
        onChange={handleChange} 
        
        />
        
        <div> 

          <label>
            Descrição
           <textarea type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}            //setNomeDaCategoria(infosDoEvento.target.value);
            />
          </label>

        </div>

        <FormField
        label="Cor"
        type="color"
        name="cor"
        value={values.cor}
        onChange={handleChange}
        />

       {/* <div>
          <label>
            Cor
           <input type="color"
              value={values.cor}
              name="cor"
              onChange={handleChange}             
            />
          </label>

       </div>*/}


        <button>
          Cadastrar
       </button>

      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Voltar para a Home
        </Link>
    </PageDefaul>
  )
}

export default CadastroCategoria;