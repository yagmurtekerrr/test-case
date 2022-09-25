import React from "react";
import './balance.css';

function Balance() {
    return (
        <div>
            <div className="balance-top">
                <h3 className="balance-header">Your Balance</h3>
                <select name="money" id="money" className="balance_select">
                    <option value="tl">TL</option>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="chf">CHF</option>
                </select>
            </div>
            <div>
                <h2 className="balance-sum">8.400,12 ₺</h2>
            </div>
        </div>
    );
};

export default Balance;