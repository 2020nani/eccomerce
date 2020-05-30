import React, {Component} from 'react';
import {storeProducts, detailProduct} from './data'
const ProdutoContext = React.createContext();


class ProdutoProvider extends Component{
  state = {
    produtos:[],
    detailProduto:detailProduct
  };
  componentDidMount(){
    this.setProdutos();
  }
  setProdutos = () => {
    let tempProdutos = [];
    storeProducts.forEach(item => {
      const singleItem = {...item};
      tempProdutos = [...tempProdutos, singleItem];
    });
    this.setState(()=>{
      return {produtos:tempProdutos}
    });
  };
  handleDetail = () =>{
    console.log('veja os detalhes');
  }
  addToCart = () =>{
    console.log('bem vindo ao carrinho');
  }
  //testando adicionar carrinho manipulando data.js
  /*tester = () =>{
    console.log('state produtos: ', this.state.produtos[0].inCart);
    console.log('Data produtos: ', storeProducts[0].inCart);
    const tempProducts = [...this.state.produtos];
    tempProducts[0].inCart = true
    this.setState(()=>{
      return {produtos:tempProducts}
    },()=>{
      console.log('state produtos: ', this.state.produtos[0].inCart);
    console.log('Data produtos: ', storeProducts[0].inCart);
    })
  }*/
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

