
exports.min = function min (array) {
    const [...newArr] = array || []
    return (newArr !== 'undefined' && newArr.length !== 0) ? Math.min(...newArr) : 0
}

exports.max = function max (array) {
    const [...newArr] = array || []
    return (newArr !== 'undefined' && newArr.length !== 0) ? Math.max(...newArr) : 0
}

exports.avg = function avg (array) {
    const [...newArr] = array || []
    if(newArr.length === 0 && newArr !== 'undefined') return 0
    const sum = newArr.reduce((acc, curr) => acc + curr)
    return (sum / array.length)
}
