class Animal() {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} make a noise`);
    }
}

class Dog extends Animal {
    speak(){
        console.log(`${this.name} 在叫.`)
    }
}

const dog = new Dog('修勾');
dog.speak();    // 修勾 在叫.