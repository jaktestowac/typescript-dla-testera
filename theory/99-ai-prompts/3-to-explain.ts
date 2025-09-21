function calc(a: number[]): any {
    let x = 0
    let y = a.length
    let z = 0

    while (z < y) {
        let q = a[z]
        if (q > 5) {
            x = x + 1
        } else {
            x = x + 0
        }
        z = z + 1
    }

    let r = "Total: " + x
    return r
}

let arr = [1, 4, 6, 8, 3, 10, 2]
console.log(calc(arr))
