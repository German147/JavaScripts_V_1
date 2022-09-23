//Normally used to Excecute a piece of code until a certain condition is met

var names = ['Alan',
    'John',
    'Judy',
    'German',
    'MoreNames',
    'Lucas'
];


console.log('For i loop')
    for (let index = 0; index < names.length; index++) {
        console.log(names[index])
        
    }
console.log()
    
console.log("Similar to For hence loop")
for (const name of names) {
    console.log(name)
}

console.log()

console.log('For in Loop')
for (const key in names) {
    if (Object.hasOwnProperty.call(names, key)) {
        const element = names[key];
        console.log(element)
    }
}


