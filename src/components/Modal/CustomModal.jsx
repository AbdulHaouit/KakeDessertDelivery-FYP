
import React, { useState } from "react";
import "../../styles/product-card.css";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CustomModal = (props) => {
  const [toppings, setToppings] = useState([]);
  const [sauces, setSauces] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addToCart(toppings, sauces);
    props.closeModal();
  };
  return (
    <Modal
      show={props.showModal}
      onHide={props.closeModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Select Toppings and Sauces
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="toppings">Toppings:</label>
            <select
              id="toppings"
              style={{ color: "#F4A460" }}
              onChange={(e) => setToppings(e.target.value)}
            >
            <option value="default">Select one topping</option>
            <option value="Kinder">Kinder</option>
            <option value="Caramel fre do">Caramel fredo</option>
            <option value="Milky bar">Milky bar</option>
            <option value="Crunchie">Crunchie</option>
            <option value="M&M">M&M</option>
            <option value="Flake">Flake</option>
            <option value="Maltesers">Maltesers</option>
            <option value="Mint aero">Mint aero</option>
            <option value="Biscoff bits">Biscoff bits</option>
            <option value="Oreo bits ">Oreo bits</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="sauces">Sauces:</label>
            <select
              id="sauces"
              style={{ color: "#F4A460" }}
              onChange={(e) => setSauces(e.target.value)}
            >
             <option value="default">Select one sauce</option>
             <option value="Milk chocolate">Milk chocolate</option>
             <option value="White chocolate">White chocolate</option>
             <option value="Kinder">Kinder</option>
             <option value="Biscoff">Biscoff</option>
             <option value="Caramel">Caramel</option>
             </select>  
          </div>
          <Modal.Footer className="modal-footer">
          <Button type="submit" style={{ backgroundColor: "#CD853F" }}>Add to Cart</Button>
          <Button onClick={props.closeModal} style={{ backgroundColor: "#CD853F" }}>Cancel</Button>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
  
};

export default CustomModal;





