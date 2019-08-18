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
