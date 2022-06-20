import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      conteudos.map((conteudo) => {
        return(
          <div>
          <h4>O conteúdo é: {conteudo.conteudo}
          <br /> Status: {conteudo.status}
          <br /> Bloco: {conteudo.bloco}
          </h4>
          </div>

        );
      })
    )
  };
}

export default Content