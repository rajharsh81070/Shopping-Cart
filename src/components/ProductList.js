import React from 'react';
import './ProductList.css';

const ProductList = (props) => {

  return (

    <tr>
      <td className="Label">{props.name}</td>
      <td>{props.price} Rs</td>
      <td>{props.qty}</td>
      <td><button className='btn btn-primary' onClick={props.addItems}>More</button></td>
      <td><button disabled={props.disable} className="btn btn-secondary" onClick={props.removeItems}>Less</button></td>
      <td><button className='btn btn-danger' onClick={props.removeWholeItem}>Delete</button></td>
    </tr>
  )


}

export default ProductList;