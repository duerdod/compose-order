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
import { AppContainer } from './Components/Table';
import { OrderContextProvider } from './context/order-context';
import Table from './Components/Table';
import AddProduct from './Components/Add/AddProduct';
// import ProductPage from './Components/ProductPage/ProductPage';
import { NotFound } from './Components/PageStatuses';

const httpLink = new HttpLink({
  uri: '/graphql'
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const { styles } = reset;

const ComposeOrder = () => (
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <Global styles={{ styles }} />
      <Router>
        <OrderContextProvider>
          <AppContainer>
            <Header />
            <Nav />
            <Switch>
              <Route exact path="/" component={Table} />
              {/* <Route path="/product/:id" component={ProductPage} /> */}
              <Route path="/add" component={AddProduct} />
              <Route component={NotFound} />
            </Switch>
          </AppContainer>
        </OrderContextProvider>
      </Router>
    </ApolloProvider>
  </ThemeProvider>
);

ReactDOM.render(<ComposeOrder />, document.getElementById('root'));
