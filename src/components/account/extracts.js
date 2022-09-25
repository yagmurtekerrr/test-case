import React from "react";
import Balance from "./balance";
import Transactions from "./transactions";
import "./extract.css";

const Extract = () => {
    return (
        <div className="extract">
            <Balance />
            <h3>Transactions</h3>
            <div className="extract_transactions">
                <Transactions />
                <Transactions />
            </div>
        </div>
    );
};

export default Extract;