import React from 'react';
import { shallow } from 'enzyme';
import './Footer.css';

function Footer() {
    return (
        <div className="App-footer">
            <p> Copyright {getFullYear()} - {getFooterCopy()} </p>
        </div>
    )
}

export default Footer;