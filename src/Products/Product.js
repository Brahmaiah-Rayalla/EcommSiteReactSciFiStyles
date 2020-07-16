import React from "react";
import Modal from "../Modal/Modal";
import "./Product.css";
import { ThemeProvider, createTheme, withStyles, Arwes, Image, Frame, Button } from 'arwes';
import SciFiButton from "../SciFiComponents/SciFiButton";

class Product extends React.Component {
  state = {
    modalOpen: false
  };

  openModal(mode) {
    this.setState({
      modalOpen: true
    });
  }

  closeModal() {
    this.setState({
      modalOpen: false
    });
  }

  render() {
    var product = this.props.prod;
    const imageUrl = require(`../static/${product.img}`);
    var modal = this.state.modalOpen ? (
      <Modal
        prodProps={product}
        show={this.state.modalOpen}
        close={this.closeModal.bind(this)}
      >
        Hi
      </Modal>
    ) : (
      ""
    );
    return (
     
      <div  style={{padding:'20px'}}>
      <Frame
      show={this.state.show}
      animate={true}
      level={3}
      corners={4}
      layer='primary'
     
  >
      
       
        {modal}
        <div className="button-warn">
         {/*} <button
            className="btn btn-warning btn-md"
            onClick={this.openModal.bind(this)}
          >
            View Specs
    </button>*/}
            <Button animate layer='alert'  onClick={this.openModal.bind(this)}> 
              <i className='btn btn-warning btn-lg'>  View Specs </i>
            </Button>
        </div>
        <div className="img">
          {/*<img className="card-img-top" src={imageUrl} alt="Card image" />*/}
          <Image className="card-img-top" animate resources={imageUrl}>
                
            </Image>
        </div>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <div className="card-text">
            <h4>${product.price}</h4>
          </div>
          <Button animate layer='success' onClick={this.props.click}> 
               Add to Cart
            </Button>

           
         {/* <button className="btn btn-primary btn-lg" onClick={this.props.click}>
            Add to Cart
    </button>*/}
        </div>
    
      </Frame>
      </div>
      
    );
  }
}

export default Product;
