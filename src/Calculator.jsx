import { useState } from "react";

function Calculator() {
	const [input, setInput] = useState("");

	const handleClick = (value) => {
		setInput((prev) => prev + value);
	};

	const calculate = () => {
		try {
			setInput(eval(input).toString());
		} catch (error) {
			setInput("Error");
		}
	};

	const clear = () => {
		setInput("");
	};

	const buttonConfig = [
		["7", "8", "9", "/"],
		["4", "5", "6", "*"],
		["1", "2", "3", "-"],
		["0", ".", "=", "+"],
		["C"],
	];

	return (
		<div className="calculator">
			<input type="text" value={input} readOnly />
			<div className="buttons">
				{buttonConfig.map((row, rowIndex) => (
					<div key={rowIndex} className="button-row">
						{row.map((label) => (
							<button
								key={label}
								onClick={() => {
									label === "="
										? calculate()
										: label === "C"
										? clear()
										: handleClick(label);
								}}
							>
								{label}
							</button>
						))}
					</div>
				))}
			</div>
		</div>
	);
}

export default Calculator;
