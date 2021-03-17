import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  // Definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=a1a09640cf6f44fd900db5b7edb9deaa`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
        <Header
          titulo='Buscador de Noticias'
        />

        <div className="container white">
            <Formulario
              guardarCategoria={guardarCategoria}
            />

            <ListadoNoticias
              noticias={noticias}
            />
        </div>
    </Fragment>
  );
}

export default App;
