const firm = {
    name: 'Четверочка',
    income: 1000000,
    expenses: 400000,
    workers: [
        {
            name: 'Петров Иван',
            jobTitle: 'Директор'
        },
        {
            name: 'Иванова Анна',
            jobTitle: 'Бухгалтер'
        },
        {
            name: 'Васильев Игорь',
            jobTitle: 'Менеджер'
        },
        {
            name: 'Егоров Павел',
            jobTitle: 'Разнорабочий'
        }
    ]
}

const firmName = document.querySelector('.firm-name');
const firmIncome = document.querySelector('.firm-income');
const firmExpenses = document.querySelector('.firm-expenses');
const workersBlock = document.querySelector('.workers');
const firmProfit = document.querySelector('.firm-profit');

firmName.innerHTML = firm.name;
firmIncome.innerHTML = firm.income;
firmExpenses.innerHTML = firm.expenses;

const profit = ((firm.income - firm.expenses) / 88.76).toFixed(2);
firmProfit.innerHTML = profit;

firm.workers.forEach(function(item) {
    const workerElement = 
    `<div>${item.name} - ${item.jobTitle}</div>`;
    workersBlock.insertAdjacentHTML('beforeend', workerElement);
})
