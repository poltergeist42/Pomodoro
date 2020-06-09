import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class Navbar extends Component {
    render() {
        let navIcon
        if (this.props.activeItem === "lampe") {
            navIcon = "https://img.icons8.com/doodle/48/000000/lamp--v1.png"
        } else if (this.props.activeItem === "pomodoro") {
            navIcon = "https://img.icons8.com/color/48/000000/tomato.png"
        }
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-warning">
                {/* <span className="navbar-brand h1">Pomodoro</span> */}
                <Link className="navbar-brand" to="/">
                    <img src={navIcon} alt={this.props.activeItem}/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className={`nav-link ${this.props.activeItem === "lampe" && "text-primary"}`} to="/lampe">Lampe</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${this.props.activeItem === "pomodoro" && "text-primary"}`} to="/pomodoro">Pomodoro</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://poltergeist42.github.io/Pomodoro/">Documentation</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
