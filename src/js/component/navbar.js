import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
            <a className="navbar-brand text-white" href="#">Star Bootstrap</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{color:"#9E9E9E"}}>About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{color:"#9E9E9E"}}>Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{color:"#9E9E9E"}}>Contact</a>
                    </li>
                </ul>       
            </div>            
        </div>
    </nav>       
  );
};

export default navbar;
