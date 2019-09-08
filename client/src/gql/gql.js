import gql from 'graphql-tag';

export const GET_ALL_PRODUCTS = gql`
  query GET_ALL_PRODUCTS {
    products {
      id
      productName
      brand
      productType
      description
      price
      __typename
    }
  }
`;

export const GET_PRODUCT = gql`
  query GET_PRODUCT($id: ID!) {
    product(id: $id) {
      id
      productName
      brand
      productType
      description
      image
      price
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation ADD_PRODUCT(
    $productName: String!
    $brand: String!
    $productType: Int
    $description: String!
    $image: String
    $price: Int!
  ) {
    addProduct(
      productName: $productName
      brand: $brand
      productType: $productType
      description: $description
      image: $image
      price: $price
    ) {
      id
      productName
      brand
      productType
      description
      image
      price
      __typename
    }
  }
`;

export const CREATE_CART = gql`
  mutation CREATE_CART($id: ID!) {
    createCart(id: $id) {
      id
    }
  }
`;

export const ADD_TO_CART_MUTATION = gql`
  mutation addToCartWithInput($CartItemInput: [CartItemInput!]!) {
    addToCart(input: $CartItemInput) {
      id
    }
  }
`;

export const GET_CART = gql`
  query GET_CART($id: ID!) {
    cart(id: $id) {
      id
      cartItem {
        quantity
        product {
          id
          productName
          brand
          price
          image
        }
      }
    }
  }
`;
