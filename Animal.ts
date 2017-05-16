
class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    getName = () => { return this.name; }
}

class Dog extends Animal {
    constructor(name: string) { super(name); }
}

class Cat extends Animal {
    constructor(name: string) { super(name); }
}

class Bird extends Animal {
    constructor(name: string) { super(name); }
}

let aDog = new Dog('汪醬');
let aCat = new Dog('老大');
let aBird = new Dog('啾揪');

console.log( aDog.getName() );
console.log( aCat.getName() );
console.log( aBird.getName() );
