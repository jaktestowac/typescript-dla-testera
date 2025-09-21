function bbb(xx: number[]): any {
    let l = xx[0]
    let j = 1
    while (j < xx.length) {
        if (xx[j] > l) {
            l = xx[j]
        } else {
            l = l
        }
        j = j + 1
    }
    let out = "Big one is " + l
    return out
}

let nums = [2, 9, 4, 11, 3]
console.log(bbb(nums))
