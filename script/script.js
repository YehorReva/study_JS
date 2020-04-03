'use strict';

let money = +prompt('Ваш месячный доход?', 12000);
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

function showTypeOf(data) {
	console.log(data, typeof (data));
};
showTypeOf('money: ', money);
showTypeOf('income: ', income);
showTypeOf('deposit: ', deposit);

console.log('addExpenses:', addExpenses.toLowerCase().split(', '));

let expenses1 = prompt('Введите обязательную статью расходов');
let amount1 = +prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = +prompt('Во сколько это обойдется?');

function getExpensesMonth(dataA1, dataA2) {
	return dataA1 + dataA2;
}
let amountSum = getExpensesMonth(amount1, amount2);
console.log('Расходы за месяц: ', amountSum);

function getAccumulatedMonth(dataMoney, dataAS) {
	return dataMoney - dataAS;
}
let accumulation = getAccumulatedMonth(money, amountSum);

let accumulatedMonth = accumulation;

function getTargetMonth(mis, bMonth) {
	return Math.ceil(mis / bMonth);
}
let periodMission = getTargetMonth(mission, accumulatedMonth);
console.log('Период' + ' ' + periodMission + ' ' + 'месяца');

let budgetDay = accumulatedMonth / 30;

console.log('Бюджет на день: ' + ' ' + Math.floor(budgetDay));

function getStatusIncome() {
	if (budgetDay > 1200) {
		return ('У вас высокий уровень дохода');
	} else if (600 < budgetDay < 1200) {
		return ('У вас средний уровень дохода');
	} else if (budgetDay < 600) {
		return ('Что то пошло не так');
	}
}
console.log(getStatusIncome());








