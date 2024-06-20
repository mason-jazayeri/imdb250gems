import { Fragment } from "react";

function Experiment() {
	function tag(strings, ...values) {
		console.log(strings);
		console.log(values);
		return strings[0] + values[0] + strings[1];
	}

	const name = "John";
	const result = tag`Hello, ${name}!`;

	return (
		<Fragment>
			<div>{result}</div>
		</Fragment>
	);
}

export default Experiment;
