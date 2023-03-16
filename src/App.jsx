import { useState } from "react";
6;
import "./App.css";

function App() {
	const [result, setResult] = useState("");

	function handleClick(e) {
		setResult(result.toString().concat(e.target.name));
	}

	function clear() {
		setResult("");
	}

	function backspace() {
		setResult(result.slice(0, -1));
	}

	function getResult() {
		try {
			setResult(eval(result));
		} catch (error) {
			setResult("Error");
		}
	}

	return (
		<div className="App">
			<div className="container">
				<form>
					<input type="text" name="inp" id="inp" value={result} />
				</form>
				<div className="keypad">
					<button name="" className="highlight" id="clear" onClick={clear}>
						Clear
					</button>
					<button
						name=""
						className="highlight"
						id="backspace"
						onClick={backspace}
					>
						Del
					</button>
					<button name="*" className="highlight" onClick={handleClick}>
						&#10006;
					</button>
					<button name="7" onClick={handleClick}>
						7
					</button>
					<button name="8" onClick={handleClick}>
						8
					</button>
					<button name="9" onClick={handleClick}>
						9
					</button>
					<button name="/" className="highlight" onClick={handleClick}>
						&divide;
					</button>
					<button name="4" onClick={handleClick}>
						4
					</button>
					<button name="5" onClick={handleClick}>
						5
					</button>
					<button name="6" onClick={handleClick}>
						6
					</button>
					<button name="-" className="highlight" onClick={handleClick}>
						&minus;
					</button>
					<button name="1" onClick={handleClick}>
						1
					</button>
					<button name="2" onClick={handleClick}>
						2
					</button>
					<button name="3" onClick={handleClick}>
						3
					</button>
					<button name="+" className="highlight" onClick={handleClick}>
						&#43;
					</button>
					<button name="0" onClick={handleClick}>
						0
					</button>
					<button name="." onClick={handleClick}>
						.
					</button>
					<button className="highlight" onClick={getResult} id="result">
						&#61;
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
