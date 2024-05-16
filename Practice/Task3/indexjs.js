const p1 = {
    name: 'Tom',
    money: 4000,
};

const p2 = {
    name: 'Peter',
    money: 3000,
};

const p3 = {
    name: 'Steve',
    money: 5555,
};

const bank = p1.money + p2.money + p3.money;

console.log(bank);

const arr = [
    {
        name: 'Tom',
        money: 4000,
    },
    {
        name: 'Peter',
        money: 6000,
    },
    {
        name: 'Antone',
        money: 7000,
    },
]

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i].money;
}

console.log(sum);

const person = {
    name: 'Gregory',
    tinkoff: 10000,
    sber: 12000,
    vtb: 5555,
    alfa: 6666,
    psb: 8000,
};

let result = 0;

for (prog in person) {
    //if (prog !== 'name') - ненормальный способ

    if (typeof person[prog] === 'number') { //провека на "число"
       result = result + person[prog];
    }
   
}

console.log(result);

const pers = {
    name: 'Pete',
    banks: {
        tinkoff: 132100,
        sber: 12470,
        vtb: 55545,
        alfa: 6666,
        psb: 84840,
    },
age: 30
} 

let result2 = 0;

for (prog in pers.banks) {

   result2 += pers.banks[prog]; 
}


console.log(result2);

const str = 'aaabbbcccabc';

let res = 0;

for (char of str) {

    if (char === 'b') { 
        res++;

};
}
console.log(res);

const names1 = [
    'Masha',
    'Peter',
    'Olya',
    'Sergey',
    'Mitya',
    'Misha',
    'Eva',
    'Alisa',
    'Mariya'
];

let r1 = 0;
let r2 = 0;

for (let i = 0; i < names1.length; i++) {
    if (names1[i][0] === 'M')
    r1++
}

for (let i = 0; i < names1.length; i++) {
    for (char of names1[i]) {
        if (char === 'A' || char === 'a') {
            r2++;
        }
    }
}

console.log(r1); 
console.log(r2); 