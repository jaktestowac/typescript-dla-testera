const numbers: Number[] = [3, -1, 5, 0, -2, 10]

let sum = 0
for (let i = 0; i < numbers.length; i++) {
    const n = Number(numbers[i])
    if (n > 0) {
        sum = sum + n
    }
}

console.log("Sum of positives:", sum)

export {}
