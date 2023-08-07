import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';
import React from 'react';

export default function Footer () {
    return (
        <footer className="App-footer">
            <p>
                {getFullYear()} - {getFooterCopy(true)}
            </p>
        </footer>
    );
}