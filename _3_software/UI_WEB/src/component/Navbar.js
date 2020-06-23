import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Navbar as BNavbar, Nav } from "react-bootstrap"


export default class Navbar extends Component {
    render() {
        let navIcon
        if (this.props.activeItem === "lampe") {
            navIcon = "https://img.icons8.com/doodle/48/000000/lamp--v1.png"
        } else if (this.props.activeItem === "pomodoro") {
            navIcon = "https://img.icons8.com/color/48/000000/tomato.png"
        }
        return (
            <BNavbar collapseOnSelect expand="lg" bg="warning" >
                <BNavbar.Brand>
                    <Link className="navbar-brand" to="/">
                        <img src={navIcon} alt={this.props.activeItem} />
                    </Link>
                    {/* <span className="navbar-brand h1">Pomodoro</span> */}
                </BNavbar.Brand>
                <BNavbar.Brand>
                    <h2 className="d-none d-lg-block">Pomodoro</h2>
                </BNavbar.Brand>
                <BNavbar.Toggle aria-controls="responsive-navbar-nav" />
                <BNavbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav as="ul">
                            <Nav.Item as="li">
                                <Link className={`nav-link ${this.props.activeItem === "lampe" && "text-primary"}`} to="/lampe">Lampe</Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className={`nav-link ${this.props.activeItem === "pomodoro" && "text-primary"}`} to="/pomodoro">Pomodoro</Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <a className="nav-link" href="https://poltergeist42.github.io/Pomodoro/">Documentation</a>
                            </Nav.Item>
                        </Nav>
                    </Nav>
                </BNavbar.Collapse>
            </BNavbar>
        )
    }
}
