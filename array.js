
const A = [7, -8, 0, 110, -11, 4000, -6, 1, 2]

// const sumArray = (array) => {
//     let summa =0
//     for (let i = 0; i < array.length; i++) {
//         summa += array[i]
//     }
//     return summa
// }

const sumArray = (array) => {
    if (array.length === 0) {
        return 0
    }
    return array[0] + sumArray(array.slice(1))
}

//console.log(sumArray(A))

const max = (array) => {
    if (array.length === 0 ) {
        return 0
    }
    let maxElem = array[0]
    for (i = 1; i < array.length; i++) {
        if (maxElem < array[i]) {
            maxElem = array[i]
        }
    }
    return maxElem
}

//console.log(max(A))

const avg = (array) => {
    if (array.length === 0) {
        return 0
    }
    return sumArray(array) / array.length
}
//console.log(avg(A))

const reverse = (array) => {
    for (let i = 0; i < array.length / 2; i++ ) {
        const replIndex = array.length - 1 - i
        let tmp = array[i]
        array[i] = array[replIndex]
        array[replIndex] = tmp
    }
    return array
}

//console.log(reverse(A))

const find = (array, tiv) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === tiv) {
            return i
        }
    }
    return null
}

// console.log(find(A, 4000))
// console.log(find(A, 156))

A.reverse()
//console.log(A)

const tiv = 254
const result = A.findIndex((elem) => {
    if (elem === tiv) {
        return true
    }
    return false
})
//console.log(result === -1 ? 'not found' : 'found')

const B = [6, 7, 8, 2, 9, 10]
const newArray = B.map(elem=> elem * elem)

//console.log(B, newArray)

const positives = A.filter(elem => elem > 0)
const zuyg = A.filter(elem => elem % 2 === 0)

//console.log(A, positives, zuyg)
const summa = B.reduce((acc, elem) => {
    return acc + elem
}, 0)

const summa1 = B.reduce((acc, elem) => acc + elem)

console.log(summa, summa1)

const  minimum = B.reduce((acc, elem) => {
    if (elem < acc) {
        return elem
    }else {
        return acc
    }
})

console.log(minimum)