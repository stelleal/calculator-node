function calculator(firstNumber, secondNumber, mathOperator) {
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

export { calculator };
