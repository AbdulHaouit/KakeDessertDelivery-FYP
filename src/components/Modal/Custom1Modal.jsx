import React, { useState } from "react";
import "../../styles/product-card.css";



import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


const Custom1Modal = (props) => {
  const [drink, setDrink] = useState("default");
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAttemptedSubmit(true);
    if (drink !== "default") {
      props.addToCart({ drink });
      props.closeModal();
    }
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
          Select a Hot Drink
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="drink">Hot Drink:</label>
            <select
              id="drink"
              style={{ color: "#F4A460" }}
              onChange={(e) => setDrink(e.target.value)}
            >
              <option value="default">Select a hot drink</option>
              <option value="Espresso €2.00">Espresso €2.00</option>
              <option value="Cappuccino €3.00">Cappuccino €3.00</option>
              <option value="Flat White €3.00">Flat White €3.00</option>
              <option value="Latte €3.00">Latte €3.00</option>
              <option value="Macchiata €2.50">Macchiata €2.50</option>
              <option value="Hot Chocolate €3.00">Hot Chocolate €3.00</option>
              <option value="Mint Aero Hot Choc €3.50">
                Mint Aero Hot Choc €3.50
              </option>
              <option value="Crunchie Hot Choc €3.50">
                Crunchie Hot Choc €3.50
              </option>
              <option value="Kinder Hot Choc €3.50">
                Kinder Hot Choc €3.50
              </option>
            </select>
          </div>
          {attemptedSubmit && drink === "default" && (
            <p style={{ color: "red" }}>Please select an option!</p>
          )}
          <Modal.Footer className="modal-footer">
            {attemptedSubmit === false || drink !== "default" ? (
              <Button
                type="submit"
                variant="danger"
                style={{ backgroundColor: "#CD853F" }}
              >
                Add
              </Button>
            ) : (
              <Button
                variant="danger"
                disabled
                style={{ backgroundColor: "#CD853F" }}
              >
                Add
              </Button>
            )}
            <Button
              onClick={props.closeModal}
              style={{ backgroundColor: "#CD853F" }}
            >
              Cancel
            </Button>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Custom1Modal;
