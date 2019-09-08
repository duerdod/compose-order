import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button } from '../ui/Button';
import { useMutation } from '@apollo/react-hooks';
import { ADD_PRODUCT, GET_ALL_PRODUCTS } from '../../gql/gql';
import { OrderContext } from '../../context/order-context';
import getProducts from '../../utils/getProducts';
import { ErrorMessage } from '../PageStatuses';

const Container = styled.div`
  background: ${({ theme }) => theme.white};
  padding: 2rem;
  border: 2px solid #383838;
  @media screen and (max-width: 40em) {
    input,
    textarea,
    select {
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 40em) {
    padding: 0.5rem;
    form {
      width: 100%;
    }
  }
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.serif};
  text-transform: uppercase;
  text-align: center;
`;

const Form = styled.form`
  width: 60%;
  margin: 0 auto;
  input,
  textarea,
  select {
    width: 100%;
    border: 2px solid #383838;
  }

  input,
  select {
    height: 33px;
  }
  textarea {
    height: 100px;
  }

  fieldset {
    border: 0;
  }
  label {
    display: block;
    .labeltext {
      display: block;
      font-size: 0.75rem;
      text-transform: uppercase;
    }
  }
  > button {
    padding: 0.5rem;
    width: 100%;
  }
  .radios {
    display: flex;
    justify-content: space-around;
    align-items: center;

    input[type='radio'] {
      display: none;
    }

    input:checked + label {
      background: ${({ theme }) => theme.black};
      color: ${({ theme }) => theme.white};
    }

    label {
      cursor: pointer;
      padding: 1rem;
      margin: 0.5rem;
      text-transform: uppercase;
    }
  }
`;

const AddProduct = ({ history }) => {
  const [product, setProduct] = useState({});
  const { dispatch } = React.useContext(OrderContext);
  const [addProduct, { loading, error }] = useMutation(ADD_PRODUCT, {
    update: (cache, { data: addProduct }) => {
      const { products } = cache.readQuery({ query: GET_ALL_PRODUCTS });
      cache.writeQuery({
        query: GET_ALL_PRODUCTS,
        data: { products: [...products, addProduct.addProduct] }
      });
    },
    onCompleted: () => {
      getProducts().then(({ data }) => {
        const { products } = data;
        dispatch({ products, type: 'INIT' });
      });
      history.push('/');
    }
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  console.log(product);
  return (
    <Container>
      <Title>Add product</Title>
      <Form
        onSubmit={e => {
          e.preventDefault();
          addProduct({
            variables: {
              ...product,
              price: Number(product.price),
              productType: Number(product.productType)
            }
          });
        }}
      >
        <fieldset disabled={loading}>
          <label htmlFor="productName">
            <span className="labeltext">Product name</span>
            <input
              type="text"
              name="productName"
              onChange={handleChange}
              required
            />
          </label>

          <label htmlFor="brand">
            <span className="labeltext">Brand</span>
            <input type="text" name="brand" onChange={handleChange} />
          </label>

          <div className="radios">
            <input
              type="radio"
              name="productType"
              id="hotdog"
              value="1"
              onChange={handleChange}
            />
            <label htmlFor="hotdog">Hot Dog</label>

            <input
              type="radio"
              name="productType"
              id="bread"
              value="2"
              onChange={handleChange}
            />
            <label htmlFor="bread">Bread</label>

            <input
              type="radio"
              name="productType"
              id="topping"
              value="3"
              onChange={handleChange}
            />
            <label htmlFor="topping">Topping</label>
          </div>

          <label htmlFor="description">
            <span className="labeltext">Description</span>
            <textarea
              type="text"
              name="description"
              onChange={handleChange}
              maxLength="400"
              required
            />
          </label>

          <label htmlFor="price">
            <span className="labeltext">Price</span>
            <input
              type="number"
              name="price"
              onChange={handleChange}
              required
            />
          </label>
          {error ? <ErrorMessage error={error.message} /> : null}
        </fieldset>
        <Button hover={true} type="submit">
          ADDP
        </Button>
      </Form>
    </Container>
  );
};

export default AddProduct;

// refetchQueries: [{ query: GET_ALL_PRODUCTS }]
