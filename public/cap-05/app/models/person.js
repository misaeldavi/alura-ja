export class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        console.time('getFullName')
        const fullName = `${this.name} ${this.surname}`;
        console.timeEnd('getFullName')
        return fullName
    }
    speak(phrase) {
        
    }
}