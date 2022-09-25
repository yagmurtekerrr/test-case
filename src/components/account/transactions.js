import React from "react";
import camera from "../images/camera.svg";
import buy from "../images/buy.svg";
import game from "../images/game.svg";
import work from "../images/work.svg";
import "./transactions.css";

const Transactions = () => {
    return (
        <div className="transactions">
            <div>
                <div className="equipments">
                    <img src={camera} alt="" height="60px" width="60px" />
                    <div className="transactions_items">
                        <div className="transaction_item">
                            <h4>Equipments</h4>
                            <h4>326.800</h4>
                        </div>
                        <div className="transaction_item">
                            <p>Nov 17</p>
                            <p>Minimarket Anugrah</p>
                        </div>
                    </div>
                </div>
                <div className="grocery">
                    <img src={buy} alt="" height="60px" width="60px" />
                    <div className="transactions_items">
                        <div className="transaction_item">
                            <h4>Grocery</h4>
                            <h4>326.800</h4>
                        </div>
                        <div className="transaction_item">
                            <p>Nov 17</p>
                            <p>Minimarket Anugrah</p>
                        </div>
                    </div>
                </div>
                <div className="entertainment">
                    <img src={game} alt="" height="60px" width="60px" />
                    <div className="transactions_items">
                        <div className="transaction_item">
                            <h4>Entertainment</h4>
                            <h4>326.800</h4>
                        </div>
                        <div className="transaction_item">
                            <p>Nov 17</p>
                            <p>Minimarket Anugrah</p>
                        </div>
                    </div>
                </div>
                <div className="office">
                    <img src={work} alt="" height="60px" width="60px" />
                    <div className="transactions_items">
                        <div className="transaction_item">
                            <h4>Office Items</h4>
                            <h4>326.800</h4>
                        </div>
                        <div className="transaction_item">
                            <p>Nov 17</p>
                            <p>Minimarket Anugrah</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transactions;


