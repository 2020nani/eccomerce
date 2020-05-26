import React,{Component} from 'react';
import Produto from './Produto'
import Title from './Title';
import {storeProducts} from '../data';
import {ProdutoConsumer} from '../context';
export default class ProdutoLista extends Component {
   state={
     produtos:storeProducts
   }
   render(){
     console.log(this.state.produtos)
     return(
    <React.Fragment>
      <div className="py-5">
      <div className="container">
        <Title name="Nossos" title="produtos" />
      <div className="row">
      <ProdutoConsumer>
      {value => {
        console.log(value)
      }}
      </ProdutoConsumer>
      </div>
      </div>   
      </div>
    </React.Fragment>
    //<Produto>
      
    //</Produto>
  
  );
   }
}

