const userInput = '8 / 2';

const userInputArray = userInput.split(' ');

const [firstNumberString, mathOperator, secondNumberString] = userInputArray;
const firstNumber = Number(firstNumberString);
const secondNumber = Number(secondNumberString);

function calculate() {
	switch (mathOperator) {
		case '+':
			console.log(`${firstNumber} somado ${secondNumber} =`, firstNumber + secondNumber);
			break;

		case '-':
			console.log(
				`${firstNumber} subtraído ${secondNumber} =`,
				firstNumber - secondNumber
			);
			break;

		case '/':
			console.log(
				`${firstNumber} dividido por ${secondNumber} =`,
				firstNumber / secondNumber
			);
			break;

		case '*':
			console.log(
				`${firstNumber} multiplicado por ${secondNumber} =`,
				firstNumber * secondNumber
			);
			break;

		case '%':
			console.log(
				`${firstNumber} porcento de ${secondNumber} =`,
				(firstNumber / 100) * secondNumber
			);
			break;

		default:
			console.log('Invalid math operator');
			break;
	}
}

function calculator() {
	if (userInputArray.length !== 3 || !firstNumberString || !secondNumberString) {
		return console.log('Invalid operation');
	}

	calculate();
}

calculator();
