let money = 12000;
let income = 'Фриланс';
let addExpenses = 'Комуналка, Продукты, Интернет, Проезд, Одежда, Другое';
let deposit = false;
let mission = 50000;
let period = 6;

console.log('money:', typeof money);
console.log('income:', typeof income);
console.log('addExpenses:', addExpenses.length);
console.log('"Период равен' + ' ' + period + ' ' + 'месяцев" и "Цель заработать' + ' ' + mission + ' ' + 'гривен"');
console.log('addExpenses:', addExpenses.toLowerCase().split(', '));

let budgetDay = (money / 30);

console.log('budgetDay: ', budgetDay);








