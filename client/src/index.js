import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/core';
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
// Components
import theme, { reset } from './Components/Theme';
import Header from './Components/ui/Header';
import Nav from './Components/Nav';
import AppProvider from './context/index';
import Table from './Components/Table';
import AddProduct from './Components/Add/AddProduct';
import { NotFound } from './Components/PageStatuses';
import Modal from './Components/Modal/Modal';

// Pages
import ProductPage from './Components/ProductPage/ProductPage';
import OrderConfirmation from './Components/Orderconfirmation/OrderConfirmation';
import Checkout from './Components/Checkout/Checkout';

const httpLink = new HttpLink({
  uri: '/graphql'
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const { styles } = reset;

const ComposeOrder = () => {
  const [isModalOpen, toggleModalOpen] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Global styles={{ styles }} />
        <Router>
          <Header />
          <Nav toggleModalOpen={toggleModalOpen} isModalOpen={isModalOpen} />
          <Modal isModalOpen={isModalOpen} toggleModalOpen={toggleModalOpen} />
          <Switch>
            <Route exact path="/" render={() => <Table />} />
            <Route path="/product/:id" component={ProductPage} />
            <Route path="/add" component={AddProduct} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/orderconfirmation" component={OrderConfirmation} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </ApolloProvider>
    </ThemeProvider>
  );
};
ReactDOM.render(
  <AppProvider>
    <ComposeOrder />
  </AppProvider>,
  document.getElementById('root')
);
