import React, { Component } from 'react';
import { ProdutoConsumer } from '../context'
import { Link } from 'react-router-dom';
import { ButtonContainer, ButtonContainerCart, Cart} from './Button'

export default class Detalhe extends Component {
  render() {
    return (
      <ProdutoConsumer>
        {value => {
          //console.log(value.detailProduto); 
          const { id, company, img, info, price, title, inCart } =
            value.detailProduto
          return (
            <div className="container py-5">
              {/*title*/}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/*end title*/}
              {/*produto info*/}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 ">
                  <img src={img} className="img-fluid" alt="produto" />
                </div>
                {/*produto texto*/}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>modelo : {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    Made by : <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue"><strong>
                    Preco: <span>R$</span>{price}
                  </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Informacoes sobre o produto
          </p>
                  <p className="text-muted-lead">{info}</p>
                  {/* buttons */}
                  <Cart >
                    <Link to="/">
                      <ButtonContainer>
                        Visualizar produtos
              </ButtonContainer>
                    </Link>
                    <ButtonContainerCart
                      disabled={inCart ? true : false}
                      onClick = {()=>{
                        value.addToCart(id);
                      }}
                    >
                      {inCart ? "NoCarrinho" : "adicionar ao carrinho"}
                    </ButtonContainerCart>
                  </Cart>
                </div>
              </div>
            </div>
          )
        }}
      </ProdutoConsumer>
    );
  };
}