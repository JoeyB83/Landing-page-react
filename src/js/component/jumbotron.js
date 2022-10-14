import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const jumbotron = () => {
    return (
        <div id = "jumbo" className = "container">
        <div className="jumbotron jumbotron-fluid rounded">
            <div className="container">
                <h1 className="display-4">A Warm Welcome!</h1>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
            </div>
        </div>
        </div>
    )
}

export default jumbotron;