const converterForm = document.getElementById('converter');
const binaryInput = document.getElementById('binary');
const decimalInput = document.getElementById('decimal');

converterForm.addEventListener('submit', validation);

function validation(e) {
	if (!binaryInput.value.match(/^[0-1]+$/g)) {
		alert('Please enter only 0 and 1 values');
	} else {
		converter();
	}

	e.preventDefault();
}

function converter() {
	const binaryNumbers = binaryInput.value.split('').map((item) => Number(item)).reverse();
	let decimalNumbers = 0;

	binaryNumbers.forEach((number, index) => {
		decimalNumbers += number * Math.pow(2, index);
	});

	decimalInput.value = decimalNumbers;
}
