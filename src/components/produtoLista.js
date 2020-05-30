import React,{Component} from 'react';
import Produto from './Produto'
import Title from './Title';
import {ProdutoConsumer} from '../context';
export default class ProdutoLista extends Component {
  
   render(){
     
     return(
    <React.Fragment>
      <div className="py-5">
      <div className="container">
        <Title name="Nossos" title="produtos" />
      <div className="row">
      <ProdutoConsumer>
      {value => {
        return value.produtos.map(produto => {
          return <Produto key={produto.id} produto={produto}
          />
        })
      }}
      </ProdutoConsumer>
      </div>
      </div>   
      </div>
    </React.Fragment>
  );
   }
}

