console.log("Hello, TypeScript!")

class Person {
    private password: string
    public name: string
    public age: number

    constructor(name: string, age: number, password: string) {
        this.name = name
        this.age = age
        this.password = password
    }

    checkPassword(input: string): boolean {
        return this.password === input
    }
}

const alice = new Person("Alice", 30, "secret")
console.log("Is Alice password correct? ", alice.checkPassword("secret"))

// This will cause a TypeScript error (only when proper checks are enabled)
alice.password = "newpassword"

console.log("Is Alice password correct? ", alice.checkPassword("secret"))

// This will cause a TypeScript error (only when proper checks are enabled)
const oops: number = "Im not a number"

console.log("This value should be a number:", oops)
