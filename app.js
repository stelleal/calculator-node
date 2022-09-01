import prompts from 'prompts';
import boxen from 'boxen';

import { calculator } from './calculator.js';

console.log(
	boxen('Calculadora', {
		borderStyle: 'round',
		borderColor: 'cyan',
		padding: {
			right: 5,
			left: 5,
		},
	})
);

const questions = [
	{
		type: 'number',
		name: 'firstNumber',
		message: 'Digite um numero',
		initial: 0,
	},
	{
		type: 'select',
		name: 'mathOperator',
		message: '',
		choices: [
			{ title: '+', description: 'somado', value: '+' },
			{ title: '-', description: 'subtraido', value: '-' },
			{ title: '/', description: 'dividido por', value: '/' },
			{ title: '*', description: 'multiplicado por', value: '*' },
			{ title: '%', description: 'porcento de', value: '%' },
		],
		initial: 0,
	},
	{
		type: 'number',
		name: 'secondNumber',
		message: 'Digite um numero',
		initial: 1,
	},
];

const stopCalculator = {
	type: 'toggle',
	name: 'isActive',
	message: 'Continuar calculando?',
	initial: true,
	active: 'sim',
	inactive: 'nao',
};

let isActive = true;

(async () => {
	while (isActive) {
		const response = await prompts(questions);
		let { firstNumber, mathOperator, secondNumber } = response;

		calculator(firstNumber, secondNumber, mathOperator);

		//check
		const calculating = await prompts(stopCalculator);
		isActive = calculating.isActive;

		if (!isActive) {
			break;
		}
	}

	console.log(
		boxen('Finalizando calculadora...', {
			borderStyle: 'round',
			borderColor: 'gray',
			dimBorder: true,
			padding: {
				right: 3,
				left: 3,
			},
		})
	);
	
})();
