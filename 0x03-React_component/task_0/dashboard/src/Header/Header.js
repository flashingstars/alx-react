import './Header.css';
import logo from '../assets/holberton-logo.jpg';
import React from 'react';

export default function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>School dashboard</h1>
        </header>
    );
}