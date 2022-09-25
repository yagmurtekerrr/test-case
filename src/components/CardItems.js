import React from "react";
import image1 from './images/Logo.svg';
import cardSurface from "./images/CardSurface.svg";
import './CardItems.css';

const CardItems = () => {
    return (
        <div className="card">
            <img className="card__background-image" src={cardSurface} alt="" />
            <div className="card_items">
                <img src={image1} alt="" className="chip" />
                <div className="card-bottom">
                    <div className="card-bottom-left">
                        <div className="card-number">5142 8164 6526 2563</div>
                        <div className="card_info">
                            <div className="card-name">
                                <div>Name</div>
                                <div>ZAYN MALIK</div>
                            </div>
                            <div className="card-valid">
                                <div>VALID TILL</div>
                                <div>05/34</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CardItems;