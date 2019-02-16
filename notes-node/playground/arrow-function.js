var square = (num) =>  {
    return Math.pow(num,2)
}

// OR

var shortSquare = num => Math.pow(num,2)

console.log(square(9))

console.log(shortSquare(9))

var user = {
    name: 'Michael',
    sayHi: () => {
        console.log(arguments)
        console.log(`Hi. I'm ${this.name}`)
    },
    sayHiAlt (){
        console.log(arguments)
        console.log(`Hi. I'm ${this.name}.`)
    }
}

user.sayHiAlt(1,2,3)