'use strict';

let money = prompt('Ваш месячный доход?', 12000);
let income = 'Фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = prompt('Есть ли у вас депозит в банке');

switch (deposit) {
	case 'ДА':
		deposit = true;
		break;
	case 'Да':
		deposit = true;
		break;
	case 'да':
		deposit = true;
		break;
	case 'НЕТ':
		deposit = false;
		break;
	case 'Нет':
		deposit = false;
		break;
	case 'нет':
		deposit = false;
		break;
	default:
		deposit = 'Не верно';
}
let mission = 50000;
let period = 3;

console.log('money:', typeof money);
console.log('income:', typeof income);
console.log('income:', typeof deposit);
console.log('addExpenses:', addExpenses.length);
console.log('"Период равен' + ' ' + period + ' ' + 'месяцев" и "Цель заработать' + ' ' + mission + ' ' + 'гривен"');
console.log('addExpenses:', addExpenses.toLowerCase().split(', '));

let expenses1 = prompt('Введите обязательную статью расходов');
let amount1 = +prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = +prompt('Во сколько это обойдется?');

console.log('Период' + ' ' + period + ' ' + 'месяца')

let amountSum = amount1 + amount2;
console.log('amountSum: ', amountSum);
let budgetMonth = money - amountSum;
console.log('Доход за месяц:' + ' ' + budgetMonth)

let periodMission = Math.ceil(mission / budgetMonth);
let budgetDay = budgetMonth / 30;

console.log('Бюджет на день: ' + ' ' + Math.floor(budgetDay));
console.log('Цель будет достигнута за' + ' ' +  periodMission + ' ' + 'месяцев')

if (budgetDay < 300) {
	console.log('Низкий уровень дохода');
} 	
	else if (budgetDay <= 800) {
	console.log('Средний уровень дохода');	
}	
	else {
	console.log('Высокий уровень дохода');
}
/*
let addExpensesString = addExpenses.toString();

let Sum = 0;

for (let i = 0; i < addExpensesString.length; i++) {

	Sum += parseInt(addExpensesString[i]);
	
}

console.log('addExpenses[i]: ', addExpenses[0] + addExpenses[1] + addExpenses[2]);

console.log('addExpenses.length: ', addExpenses.length);

console.log('Sum: ', Sum);

console.log('Цель заработать ${mission} Рублей');



*/








