import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const card = () => {
    return (
        <div class="container">
        <div className = "row">
            <div className="col">
                <div className="card mt-4" style={{width: "18rem"}}>
                    <img src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png" className="card-img-top" alt="..."/>
                    <div className="card-body mb-3">
                        <h5 className="card-title text-center">Card title</h5>
                        <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div className="card-body text-center border-top borde-success">
                        <a href="#" className="btn btn-primary">Find Out More!</a>
                    </div>
                </div>                
            </div>
            <div className="col">
                <div className="card mt-4" style={{width: "18rem"}}>
                    <img src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png" className="card-img-top" alt="..."/>
                    <div className="card-body mb-3">
                        <h5 className="card-title text-center">Card title</h5>
                        <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>                                           
                    </div>
                    <div className="card-body text-center border-top borde-success">
                        <a href="#" className="btn btn-primary">Find Out More!</a>
                    </div> 
                </div>
            </div>
            <div className="col">
                <div className="card mt-4" style={{width: "18rem"}}>
                    <img src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png" className="card-img-top" alt="..."/>
                    <div className="card-body mb-3">
                        <h5 className="card-title text-center">Card title</h5>
                        <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>                                            
                    </div>
                    <div className="card-body text-center border-top borde-success">
                        <a href="#" className="btn btn-primary">Find Out More!</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card mt-4" style={{width: "18rem"}}>
                    <img src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png" className="card-img-top" alt="..."/>
                    <div className="card-body mb-3">
                        <h5 className="card-title text-center">Card title</h5>
                        <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>                                           
                    </div>
                    <div className="card-body text-center border-top borde-success">
                        <a href="#" className="btn btn-primary">Find Out More!</a>
                    </div>
                </div>
            </div>
        </div>
        </div>        
    )
}

export default card;