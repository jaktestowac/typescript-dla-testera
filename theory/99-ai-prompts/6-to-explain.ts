function count(input: string): { v: number; c: number } {
    let v = 0
    let c = 0

    for (let i = 0; i < input.length; i++) {
        const char = input.charAt(i).toLowerCase()

        if (char >= "a" && char <= "z") {
            if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
                v++
            } else {
                c++
            }
        }
    }

    return { v, c }
}

const testString = "Hello, World!"
const result = count(testString)
console.log(`In the string "${testString}": Vowels = ${result.v}, Consonants = ${result.c}`)
