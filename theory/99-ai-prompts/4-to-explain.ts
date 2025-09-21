function mx(zzz: string): any {
    let t = ""
    let k = zzz.length - 1
    while (k >= 0) {
        t = t + zzz[k]
        k = k - 1
    }
    let p = "Result is: " + t
    return p
}

let x = "hello"
console.log(mx(x))
