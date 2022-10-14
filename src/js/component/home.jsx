import React from "react";
import navbar from "./navbar";
import jumbotron from "./jumbotron";
import card from "./card";
import footer from "./footer";

const Home = () => {
	return (
		<div>
		<div className = "container">		
			<header className = "header">
				{navbar()}
			</header>
			<div className = "container">
				<div className = "container-fluid">
					{jumbotron()}
			    </div>
			    <div className = "container-fluid">
				    {card()}
			    </div>
			</div>			
		</div>
		<div className = "container-fluid">
				{footer()}
			</div>
		</div>		
	);
};

export default Home;
