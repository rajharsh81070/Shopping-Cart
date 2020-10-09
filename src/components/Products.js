import React from 'react';
import './Products.css';
import ProductList from './ProductList';


const Products = (props) => {

  return (

    <div className="products">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Items({props.totalQty})</th>
            <th scope="col">Price</th>
            <th scope="col">Qty</th>
            <th scope="col">Inc. Qty</th>
            <th scope="col">Dec. Qty</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>


        <tbody>
          {props.items.map(item =>
            <ProductList
              key={item.id}
              name={item.name}
              addItems={() => props.addItems(item.id)}
              removeItems={() => props.removeItems(item.id)}
              disable={item.disable}
              qty={item.qty}
              price={item.price}
              removeWholeItem={() => props.removeWholeItem(item.id)}
            />
          )}
        </tbody>

        <tr>
          <td className="Label">Total</td>
          <td>2760 Rs</td>
          <td>{props.totalQty}</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

      </table>

    </div>
  );
}

export default Products;