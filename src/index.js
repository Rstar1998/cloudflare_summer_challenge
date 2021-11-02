// Import React (Mandatory Step).
import React from "react";
// Import ReactDOM (Mandatory Step).
import ReactDOM from "react-dom";

// Import The Button Component from Button.js
//import Button from "./Button";

const rootElement = document.getElementById("root");

// Create a functional component
const App = () => {
	// Declare a state variable
	//const [Joke, setJoke] = React.useState("");
    const [Fact, setFact] = React.useState("");
	// const fetchApi = () => {
	// 	// Fetching data from the API
	// 		fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
	// 		.then((res) => res.json())
	// 		.then((data) => setJoke(data.joke));
	// };

    const fetchfactapi = () => {
		// Fetching data from the API
			fetch("https://uselessfacts.jsph.pl/random.json?language=en")
			.then((res) => res.json())
			.then((data) => setFact(data.text));
	};
//{Fact === "" ? <Button callApi={fetchfactapi} text={"Wanna hear a Fact ??"}/> : <p>{Fact}</p> }
	return (
		// Return the Button Component with a conditional statement
		<div style={{
			"justify-content": "center"}}>
		<h1 style={{"text-align": "center"}}>Fact Generator</h1>
           
             
		   
		   <p style={{"background-color": "lightgrey",width: "300px",border: "15px solid blue",
  padding: "50px","text-align": "center",
  margin: "0 auto" }} >{Fact}</p>

<div style={{ display: 'flex', justifyContent: 'flex-end' }}>

<button onClick={fetchfactapi} style={{
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
		"Wanna hear a Fact ??
		</button>

</div>



            
</div>
		
	);
}

// Rendering the App Component.
ReactDOM.render(
	<App />,
rootElement
);
export default App
