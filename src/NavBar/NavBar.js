import React from "react";
import { ThemeProvider, createTheme, withStyles, Arwes, Image, Frame, Heading } from 'arwes';
import "./NavBar.css";

class NavBar extends React.Component {
  checkoutHandler = amount => {
    alert(
      "Total Cart Products: #" +
        this.props.count +
        "\n Total Cart Amount: $" +
        this.props.totalAmount
    );
  };
  render() {
    return (
      
      <div style={{ padding: '5px 15px', fontSize: '50px' }}>
      <Frame
      
      animate={false}
      level={3}
      corners={4}
      layer='success'
     
  >
     
        <div className="container">
          <div className="AppName">
            {" "}
            <ul className="nav navbar-nav navbar-left">
              <li>
                <a
                  href="https://github.com/Brahmaiah-Rayalla"
                  className="fa fa-github"
                />
              </li>
              <li>
                <a
                  href="http://brahma517.blogspot.com/"
                  className="fa fa-rss-square"
                />
              </li>
            </ul>{" "}
            <div style={{ padding: '20px 40px', fontSize: '50px' }}>
            <Heading node='h1'>E-App</Heading> 
                        </div>
            
            <div className="cart">
              <h3>
                <a className="nav-modal">
                  <span className="glyphicon glyphicon-shopping-cart" /> Cart{" "}
                </a>
                Items:{" "}
                <span className="badge badge-success">{this.props.count}</span>{" "}
                Price:{" "}
                <span className="badge badge-success">
                  ${this.props.totalAmount}
                </span>
                <div className="reset">
                  <button className="btn btn-info" onClick={this.props.reset}>
                    Reset
                  </button>
                  {"   "}
                  <button
                    className="btn btn-danger"
                    onClick={this.checkoutHandler.bind(
                      this,
                      this.props.totalAmount
                    )}
                  >
                    Checkout
                  </button>
                </div>
              </h3>
            </div>
          </div>
        </div>
      
      </Frame>
      </div>
    );
  }
}

export default NavBar;
