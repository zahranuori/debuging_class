function  vowels(char) {
    let l = [97,101,105,111,117]; //a,e,i,o,u
    let r = char.charCodeAt(0)
    let y = l.map(item=> Math.abs(r- item ))
    let minimum = Math.min(...y)
    return String.fromCharCode(l[y.indexOf(minimum)])
}
console.log(vowels("z"))

