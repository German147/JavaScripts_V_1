var person = { 
     age : 34,
     weith : 75,
     isfemale : false,
     dateOfbirth : new Date(2000, 1, 28),
    address: {
        city: 'Cordoba',
        zip: '5000',
        Zone: 'Colon' 
     }
}

//console.log(person)
//console.log(person.address.city)
//console.log(Object.values(person.address))
//console.log(Object.keys(person))
console.log(JSON.stringify(person))
/*
{"age":34,"weith":75,
"isfemale":false,
"dateOfbirth":"2000-02-28T03:00:00.000Z",
"address":{"city":"Cordoba",
"zip":"5000",
"Zone":"Colon"}}
*/ 