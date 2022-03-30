import React from 'react';
import './calculator.css';
import './calculation';
import './../React bootstarp/bootstrap.min.css'
const calculator = () => {
    return (
        <div>
            <div className="calculator-body">
            <h3>Calculator</h3>
            <div className="first-row">
                <input type="text" className="form-control"  placeholder="Output"/>
                <button type="button" className="btn btn-primary" value="C">AC</button>
            </div>
            <div className="second-row">
                <input type="button" className="c-btn btn btn-primary" value="1"/>
                <input type="button" className="c-btn btn btn-primary" value="2" />
                <input type="button" className="c-btn btn btn-primary" value="3" />
                <input type="button" className="c-btn btn btn-warning" value="+" />
            </div>
            <div className="third-row">
                <input type="button" className="c-btn btn btn-primary" value="4" />
                <input type="button" className="c-btn btn btn-primary" value="5" />
                <input type="button" className="c-btn btn btn-primary" value="6"/>
                <input type="button" className="c-btn btn btn-warning" value="-" />
            </div>
            <div className="forth-row">
                <input type="button" className="c-btn btn btn-primary" value="5" />
                <input type="button" className="c-btn btn btn-primary" value="8"/>
                <input type="button" className="c-btn btn btn-primary" value="9" />
                <input type="button" className="c-btn btn btn-warning" value="*" />
            </div>
            <div className="forth-row">
                <input type="button" className="c-btn btn btn-warning" value="/" />
                <input type="button" className="c-btn btn btn-warning" value="0" />
                <input type="button" className="c-btn btn btn-warning" value="." />
                <input type="button" className="c-btn btn btn-danger" value="=" />
            </div>
        </div>
        <footer>Copyright © 2021 Shaikat. All Rights Reserved.</footer>
        </div>
    );
};

export default calculator;