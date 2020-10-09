import React, { Component } from "react";
import "./App.css";
import Products from "./components/Products";
import Cart from "./components/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';

class App extends Component {
  constructor() {
    super();

    this.state = {
      items: [
        {
          id: 9090,
          name: "Item1",
          price: 200,
          discount: 10,
          type: "fiction",
          qty: 1,
          img_url: "https://place-hold.it/40.jpg",
        },
        {
          id: 9091,
          name: "Item2",
          price: 250,
          discount: 15,
          type: "literature",
          qty: 1,
          img_url: "https://place-hold.it/40.jpg",
        },
        {
          id: 9092,
          name: "Item3",
          price: 320,
          discount: 5,
          type: "literature",
          qty: 1,
          img_url: "https://place-hold.it/40.jpg",
        },
        {
          id: 9093,
          name: "Item4",
          price: 290,
          discount: 0,
          type: "thriller",
          qty: 1,
          img_url: "https://place-hold.it/40.jpg",
        },
        {
          id: 9094,
          name: "Item5",
          price: 500,
          discount: 25,
          type: "thriller",
          qty: 1,
          img_url: "https://place-hold.it/40.jpg",
        },
        {
          id: 9095,
          name: "Item6",
          price: 150,
          discount: 5,
          type: "literature",
          qty: 1,
          img_url: "https://place-hold.it/40.jpg",
        },
        {
          id: 9096,
          name: "Item7",
          price: 700,
          discount: 22,
          type: "literature",
          qty: 1,
          img_url: "https://place-hold.it/40.jpg",
        },
        {
          id: 9097,
          name: "Item8",
          price: 350,
          discount: 18,
          type: "fiction",
          qty: 1,
          img_url: "https://place-hold.it/40.jpg",
        },
      ],
      totalPrice: 2760,
      totalQty: 8,
    };

    this.addItems = (id) => {
      const updatedItems = this.state.items.map((item) => {
        if (item.id === id) {
          item.qty++;
          item.disable = false;

          this.setState({
            totalQty: this.state.totalQty + 1,
            totalPrice: this.state.totalPrice + item.price,
          });
        }
        return item;
      });

      this.setState({
        items: [].concat(updatedItems),
      });
    };

    this.removeItems = (id) => {
      const updatedItems = this.state.items.map((item) => {
        if (item.id === id) {
          if (item.qty > 0) {
            item.qty--;
            toast.success('Item Removed!!');
            this.setState({
              totalPrice: this.state.totalPrice - item.price,
              totalQty: this.state.totalQty - 1,
            });
          }
          if (item.qty === 0) {
            item.disable = true;
          }
        }
        return item;
      });

      this.setState({
        items: [].concat(updatedItems),
      });
    };

    this.removeWholeItem = (id) => {
      const updatedItems = this.state.items.filter((item) => {
        if (item.qty > 0 && item.id === id) {
          this.setState({
            totalPrice: this.state.totalPrice - item.price * item.qty,
            totalQty: this.state.totalQty - item.qty,
          });
        }

        return item.id !== id;
      });

      this.setState({
        items: [].concat(updatedItems),
      });
    };
  }

  render() {
    return (
      <div className="container">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover />
        <div>
          <div className="row">
            <div className="col-md-8">
              <Products
                removeItems={this.removeItems}
                addItems={this.addItems}
                totalPrice={this.state.totalPrice}
                totalQty={this.state.totalQty}
                items={this.state.items}
                removeWholeItem={this.removeWholeItem}
              />
            </div>
            <div className="col-md-4">
              <Cart
                totalPrice={this.state.totalPrice}
                totalQty={this.state.totalQty}
                items={this.state.items}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
