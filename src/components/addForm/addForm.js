import React from "react";
import exit from "../images/exit.svg"

const AddForm = () => {

    return(
        <div>
            <img src={exit} alt=""/>
            <h3>Add Card</h3>
            <div>
                <label>Cardholder Name
                    <input type="text" placeholder="Enter your name as written on card" />
                </label>
                <label>Card Number
                    <input type="number" placeholder="Enter your card number" />
                </label>
                <div>
                    <label>cvv/cvc
                        <input type="number" placeholder="123" />
                    </label>
                    <label>Exp. Date
                        <input type="date" placeholder="10/2025"/>
                    </label>
                </div>
                <button>Add Card</button>
            </div>
        </div>
    );
};
export default AddForm;