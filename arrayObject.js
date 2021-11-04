const users = [
    { name: 'ali', age: 20 },
    { name: 'zahra', age: 25 },
    { name: 'reza', age: 25 },
    { name: 'sara', age: 27 },
];

const person = users.filter(
    user => user.age === 25
)

console.log(person)
