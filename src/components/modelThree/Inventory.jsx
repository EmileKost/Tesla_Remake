import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import './Inventory.css';
import charger from '../../assets/backgrounds/accessoires.png'

const Inventory = () => {
    return(
        <section className="inventory">
            <section className="content-container model3">
                <div className="model-content-container">
                    <div className="model-text-container">
                        <h1>Model 3</h1>
                        <a href="/order">View Inventory</a>
                    </div>
                    <div className="model-btn-container">
                        <button className="model-order-btn">Order Now</button>
                        <button className="model-demo-btn">Demo Drive</button>
                    </div>
                </div>
            </section>
            <section className="content-container modely">
                <div className="model-content-container">
                    <div className="model-text-container">
                        <h1>Model Y</h1>
                        <a href="/order">View Inventory</a>
                    </div>
                </div>
                <div className="model-btn-container">
                        <button className="model-order-btn">Order Now</button>
                        <button className="model-demo-btn">Demo Drive</button>
                    </div>
            </section>
            <section className="content-container models">
                <div className="model-content-container">
                    <div className="model-text-container">
                        <h1>Model S</h1>
                        <a href="/order">View Inventory</a>
                    </div>
                    <div className="model-btn-container">
                        <button className="model-order-btn">Order Now</button>
                        <button className="model-demo-btn">Demo Drive</button>
                    </div>
                </div>
            </section>
            <section className="content-container modelx">
                <div className="model-content-container">
                    <div className="model-text-container">
                        <h1>Model X</h1>
                        <a href="/order">View Inventory</a>
                    </div>
                    <div className="model-btn-container">
                        <button className="model-order-btn">Order Now</button>
                        <button className="model-demo-btn">Demo Drive</button>
                    </div>
                </div>
            </section>
            <section className="content-container solar">
                <div className="model-content-container">
                    <div className="model-text-container">
                        <h1>Solar Panels</h1>
                        <p href="/order">Lowest Cost Solar Panels in America</p>
                    </div>
                    <div className="model-btn-container">
                        <button className="model-order-btn">Order Now</button>
                        <button className="model-demo-btn">Learn More</button>
                    </div>
                </div>
            </section>
            <section className="content-container accessoires">
                <div className="accessoires-content-container">
                    <h1>Accessoires</h1>
                    <img id="accessoires-image" src={charger}/>
                    <button>Shop Now</button>
                </div>
           
            </section>
        </section>
    )
}

export default React.forwardRef(Inventory);