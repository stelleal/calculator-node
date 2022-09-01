const userInput = '5 + 4';

const userInputArray = userInput.split(' ');

const [firstNumberString, mathOperator, secondNumberString] = userInputArray;
const firstNumber = Number(firstNumberString);
const secondNumber = Number(secondNumberString);

switch (mathOperator) {
	case '+':
		console.log(`${firstNumber} somado ${secondNumber} =`, firstNumber + secondNumber);
		break;

	case '-':
		console.log(`${firstNumber} subtraído ${secondNumber} =`, firstNumber - secondNumber);
		break;

	case '/':
		console.log(`${firstNumber} dividido por ${secondNumber} =`, firstNumber / secondNumber);
		break;

	case '*':
		console.log(`${firstNumber} multiplicado por ${secondNumber} =`, firstNumber * secondNumber);
		break;

	case '%':
		console.log(`${firstNumber} porcento de ${secondNumber} =`, (firstNumber / 100) * secondNumber);
		break;

	default:
		console.log('Invalid math operator');
		break;
}