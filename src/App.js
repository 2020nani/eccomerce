import React from 'react';
import{Switch, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Detalhe from './components/Detalhe'
import  Carrinho from './components/Carrinho'
import Produtolista from './components/produtoLista'
import Default from './components/Default'
function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Produtolista}/>
        <Route path="/detalhe" component={Detalhe}/>
        <Route path="/carrinho" component={Carrinho}/>
        <Route  component={Default}/>
       
      </Switch>
    </React.Fragment>
    
  );
}

export default App;
