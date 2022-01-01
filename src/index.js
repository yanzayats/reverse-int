module.exports = function reverse (n) {
    let a = n.toString().slice(1)
    let b = n.toString()
    let c = a.split('').reverse().join('')
    let d = n.toString().slice(0,1)
    let e = b.split('').reverse().join('')
    if (d === '-') {
        return Number(c)
    } else {
        return Number(e)
    }
}
