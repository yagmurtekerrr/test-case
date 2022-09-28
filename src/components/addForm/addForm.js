import React from "react";
import exit from "../images/exit.svg";
import './AddForm.css'

const AddForm = () => {

    return(
        <div className="addForm_component">
            <img className="addForm_img" src={exit} alt=""/>
            <h3>Add Card</h3>
            <div>
                <label className="addForm_label">Cardholder Name
                    <input className="label_top" type="text" placeholder="Enter your name as written on card" />
                </label>
                <label className="addForm_label" >Card Number
                    <input className="label_top" type="number" placeholder="Enter your card number" />
                </label>
                <div className="secondary_label">
                    <label className="addForm_label" >cvv/cvc
                        <input className="label_security" type="number" placeholder="123" />
                    </label>
                    <label className="addForm_label" >Exp. Date
                        <input className="label_date" type="number" placeholder="10/2025"/>
                    </label>
                </div>
                <button className="label_btn">Add Card</button>
            </div>
        </div>
    );
};
export default AddForm;
