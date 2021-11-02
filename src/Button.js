// Import React (Mandatory Step).
import React from "react";


	// Create a functional component
	const Button = (props) => {
		return <button onClick={props.callApi} style={{
			display: "inline-block",
    padding: "0.5em 1em",
    "text-decoration": "none",
    background: "#668ad8",
    color: "#FFF",
    "border-radius": "4px",
    "box-shadow": "0px 0px 0px 5px #668ad8",
    border: "dashed 1px #FFF",
	margin: "0 auto"
		}} >
		{props.text}
		</button>;
	}

// Export Button Component
export default Button;
