import React from 'react';
import './Cart.css';

const Cart = (props) => {


  let order_total, totalPrice;
  if (props.totalQty !== 0) {
    totalPrice = props.totalPrice + '.00 Rs';
    order_total = props.totalPrice + ' Rs';
  } else {
    totalPrice = '0.00 Rs';
    order_total = '0.00 Rs';
  }


  return (
    <div className="body">
      <b className="total">Total</b>

      <hr />

      <p>Items({props.totalQty}):&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;{totalPrice}</p>
      <hr />

      <p><b>Order total</b>:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;{order_total}</p>
    </div>
  )

}

export default Cart;