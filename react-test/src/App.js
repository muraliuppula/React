import React, { useEffect } from "react";
import { connect } from 'react-redux';
import ProductItem from "./components/ProductItem";
import { saveProductList } from "./actions/actions";

function App(props) {
  const getProducts = () => {
    fetch('products.json').then(res => res.json()).then(res => {
      props.saveProductList(res || []);
    }).catch(err => {
      console.log(err);
    })
  }
  
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {
        props.products.map((item, index) => <ProductItem key={index} data={item} />)
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products.productList || []
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveProductList: (data) => dispatch(saveProductList(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);