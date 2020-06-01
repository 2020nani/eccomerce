import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data'
const ProdutoContext = React.createContext();


class ProdutoProvider extends Component {
  state = {
    produtos: [],
    detailProduto: detailProduct
  };
  componentDidMount() {
    this.setProdutos();
  }
  setProdutos = () => {
    let tempProdutos = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProdutos = [...tempProdutos, singleItem];
    });
    this.setState(() => {
      return { produtos: tempProdutos }
    });
  };

  getItem = id => {
    const produto = this.state.produtos.find(item =>item.id===id)
    return produto;
  }
  handleDetail = id => {
    const produto = this.getItem(id);
    this.setState(()=>{
      return {detailProduto:produto}
    })
  }
  addToCart = id => {
    console.log(`bem vindo ao carrinho id produto e ${id}`)
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
  render() {
    return (
      <ProdutoContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart
      }}>


        {this.props.children}
      </ProdutoContext.Provider>

    );
  }
}

const ProdutoConsumer = ProdutoContext.Consumer;

export { ProdutoProvider, ProdutoConsumer };

