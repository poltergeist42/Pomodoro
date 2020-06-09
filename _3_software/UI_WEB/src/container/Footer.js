import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            // <footer className="container-fluid bg-dark text-ligth fixed-bottom">
            <footer className="container-fluid bg-dark text-white fixed-bottom d-none d-md-none d-lg-block">
                {/* <div className="row">
                    <div className="col-md-4">
                        <a href="https://icons8.com/icon/18102/tomate">Tomate icon by Icons8</a>
                        <a href="https://icons8.com/icon/80486/lamp">Lamp icon by Icons8</a>
                    </div>
                </div> */}
                <hr className="bg-info"/>
                <div className="row">
                    <div className="col-md-12 mb-2 d-flex justify-content-center">
                        {/* <p className="text-center">Dummy Text. Center aligned text on all viewport sizes.</p> */}
                        <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr">
                            <img alt="Licence Creative Commons" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" />
                        </a>
                        
                    </div>
                </div>
            </footer>
        )
    }
}
