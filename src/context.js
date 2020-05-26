import React, {Component} from 'react';
import {storeProducts, detailProduct} from './data'
const ProdutoContext = React.createContext();


class ProdutoProvider extends Component{
  state = {
    produtos:storeProducts,
    detailProduto:detailProduct
  }
  handleDetail = () =>{
    console.log('veja os detalhes');
  }
  addToCart = () =>{
    console.log('bem vindo ao carrinho');
  }
  render(){
    return(
      <ProdutoContext.Provider value={{
        ...this.state,
        handleDetail:this.handleDetail,
        addToCart:this.addToCart
      }}>
       {this.props.children}
      </ProdutoContext.Provider>

    );
  }
}

const ProdutoConsumer = ProdutoContext.Consumer;

export {ProdutoProvider, ProdutoConsumer};

